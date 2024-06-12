import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  Tabs,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { Naver } from "../Application/Tables/CampainTable/Logo";
import { PageHeader2 } from "../Application/PageHeader/PageHeader2";
import { getCollection, searchDoc } from "../Firebase/Database";
import { where } from "firebase/firestore";
import { faker } from "@faker-js/faker";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Filler를 등록합니다.
);

function Search(props) {
  const [searchByKeyword, setSearchByKeyword] = useState();
  const [totalCnt, setTotalCnt] = useState(0);
  function groupObjectsByProperty(objects, property) {
    const groupedObjects = {};
    objects.forEach((obj) => {
      const value = obj[property];
      if (value in groupedObjects) {
        groupedObjects[value].push(obj);
      } else {
        groupedObjects[value] = [obj];
      }
    });
    return groupedObjects;
  }

  useEffect(() => {
    searchDoc(
      "Search",
      where("campain", "==", window.location.pathname.split("/").pop())
    ).then((data) => {
      let totalCnt = 0;
      data.forEach((doc) => {
        totalCnt += parseInt(doc.count);
      });
      setTotalCnt(totalCnt);
      // 'name' 속성을 기준으로 객체를 그룹화
      const groupedObjectsByName = groupObjectsByProperty(data, "keyword");
      setSearchByKeyword(groupedObjectsByName);
    });
  }, []);
  return (
    <Stack>
      {/* <PageHeader2 title="검색점유율" discription={`네이버 키워드 노출 현황`} /> */}
      {searchByKeyword && (
        <Stack mx={{ base: 4, md: 8 }}>
          <Heading size="sm">검색점유율</Heading>
          <Text opacity={0.5}>네이버 키워드 노출 현황</Text>
          <Wrap>
            {Object.entries(searchByKeyword)?.map(([key, value]) => (
              <Tag
                colorScheme="cyan"
                borderRadius={"full"}
                key={key}
                size="lg"
                fontWeight="bold"
              >
                {key}
              </Tag>
            ))}
          </Wrap>
          <Text>
            총 <strong>{totalCnt}건</strong>의 리뷰가 검색 노출되었습니다.
          </Text>
          <Box mt={8}>
            {Object.entries(searchByKeyword)?.map(([key, value]) => (
              <Box
                h={"100%"}
                key={key}
                mb={4}
                borderTop={"3px solid black"}
                py={4}
              >
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {key}
                </Text>
                <HStack h={"100%"}>
                  {value.map(
                    (obj, index) =>
                      index < 3 && (
                        <Stack spacing={1} p={4}>
                          <Text>
                            <strong key={index} style={{ color: "red" }}>
                              {obj.count}건
                            </strong>{" "}
                            노출
                          </Text>
                          <Text opacity={0.5} fontSize="sm">
                            {obj.date}
                          </Text>
                          <Image
                            src={obj.url}
                            maxW={"200px"}
                            aspectRatio={"9/16"}
                            border={"1px solid #d9d9d9"}
                            borderRadius={"xl"}
                            objectFit={"cover"}
                          />
                        </Stack>
                        // <Text key={index} ml={4}>
                        //   {JSON.stringify(obj)}
                        // </Text>
                      )
                  )}
                  <LineChart value={value} />
                </HStack>
              </Box>
            ))}
          </Box>
        </Stack>
      )}
    </Stack>
  );
}

export function LineChart(value) {
  console.log(value);
  const [diffDate, setDiffDate] = useState(4);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 3, // x 축 틱의 최대 수
          font: {
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          maxTicksLimit: 1,
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return "노출수: " + context.parsed.y;
          },
        },
      },
    },
  };

  // 90일 동안의 날짜 배열 생성
  function getDatesArray(startDate, endDate) {
    const datesArray = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      datesArray.push(new Date(currentDate).toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return datesArray;
  }

  // 오늘 날짜 구하기
  const today = new Date();

  // 90일 전 날짜 구하기
  const ninetyDaysAgo = new Date();
  let subDays = 365;
  switch (diffDate) {
    case 0:
      subDays = 365;
      break;
    case 1:
      subDays = 365;
      break;
    case 2:
      subDays = 180;
      break;
    case 3:
      subDays = 90;
      break;
    case 4:
      subDays = 30;
      break;
    default:
      break;
  }

  console.log(subDays);
  ninetyDaysAgo.setDate(today.getDate() - subDays);

  // 배열 생성
  const labels = getDatesArray(ninetyDaysAgo, today);

  // x 축에 표시될 날짜 배열 생성 (일주일에 한 번씩)
  const xAxisDatesArray = labels.filter((date, index) => index % 10 === 0);

  // // 날짜 범위 내의 객체 배열 생성
  // const objectArray = [
  //   { date: "2024-05-10", count: 20 },
  //   { date: "2024-05-11", count: 30 },
  //   { date: "2024-05-12", count: 40 },
  //   // 이하 생략...
  // ];

  // 날짜 범위 내의 객체 배열 생성
  const objectArray = value.value;

  console.log(objectArray);

  // 날짜 배열에 해당하는 데이터 생성
  const resultData = getDatesArray(ninetyDaysAgo, today).map((date) => {
    const dateString = date;
    console.log(dateString);
    const matchedObject = objectArray.find((obj) => obj.date === dateString);
    return matchedObject ? parseInt(matchedObject.count) : 0;
  });

  console.log(resultData);

  const data = {
    labels,
    datasets: [
      {
        lineTension: 0,
        label: "노출수",
        data: resultData,
        fill: true,
        backgroundColor: "rgba(14,156,255,0.2)", // 채우기 색상 설정
        borderColor: "rgba(14,156,255,1)", // 라인 색상 설정
        borderCapStyle: "butt",
        tension: 0.1, // 곡선의 길이 설정
        borderWidth: 2, // 라인 그래프의 굵기 설정
        pointRadius: 3, // 데이터 포인트 점 크기 설정
        pointBackgroundColor: "white",
      },
    ],
  };
  return (
    <Stack style={{ maxWidth: "400px", width: "100%", height: "400px" }}>
      <Line options={options} data={data} />
    </Stack>
  );
}

export default Search;

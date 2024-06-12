import React, { useEffect, useState } from "react";
import {
  Center,
  Heading,
  VStack,
  Text,
  Stack,
  Wrap,
  Tag,
  HStack,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { PageHeader2 } from "../Application/PageHeader/PageHeader2";
import { getDocument } from "../Firebase/Database";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2"; // 원하는 차트 종류를 가져오세요.
import { MdRestore } from "react-icons/md";

ChartJS.register(ArcElement, Tooltip, Legend);

// 사용할 색상 리스트
const colorList = [
  "#E53E3E46",
  "#DD6B2046",
  "#D69E2E46",
  "#38A16946",
  "#31979546",
  "#3182CE46",
  "#00B5D846",
  "#805AD546",
  "#D53F8C46",
];

const generateAlternatingColors = (numColors) => {
  const alternatingColors = [];
  for (let i = 0; i < numColors; i++) {
    const colorIndex = i % colorList.length; // 색상 리스트 내의 인덱스를 계산하여 반복합니다.
    alternatingColors.push(colorList[colorIndex]);
  }

  return alternatingColors;
};

function Keyword(props) {
  const [keywords, setKeywords] = useState([]);
  const [result, setResult] = useState([]);
  const [rank, setRank] = useState([]);
  useEffect(() => {
    console.log(window.location.pathname.split("/").pop());
    let cid = window.location.pathname.split("/").pop();

    if (keywords?.length === 0) {
      getDocument("Campain", cid).then(async (data) => {
        let keywordList = [];
        if (data?.keywords) {
          data.keywords?.forEach((keyword) => {
            keywordList.push(keyword);
            setKeywords(keywordList);
          });
        }
      });
    }

    // fetch("http://localhost:3001/keywordstool?hintKeywords=" + "프로바이오틱스")
    //   .then(async (response) => {
    //     console.log(response);
    //   })
    //   .then(async (data) => {
    //     console.log(data);
    //   })
    //   .catch(async (error) => {
    //     console.log(error);
    //   });
  }, []);

  useEffect(() => {
    if (keywords?.length === 0) return;
    fetch(
      process.env.REACT_APP_SERVER_URL +
        "/keywordstool?hintKeywords=" +
        keywords?.join(",")
    )
      .then(async (response) => {
        // console.log(response);
        return response.json();
      })
      .then(async (data) => {
        let originArray = JSON.parse(data.data).keywordList;

        if (data.length === 0) return;

        let newArray = originArray.filter((keyword) => {
          return keywords?.includes(keyword.relKeyword);
        });
        // let newArray = originArray.slice(0, 20);
        // console.log(newArray);
        newArray.sort((a, b) => b.monthlyMobileQcCnt - a.monthlyMobileQcCnt);
        setRank(newArray);
        setResult(originArray);
      });

    // });
  }, [keywords]);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const option = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: "right",
      },
      // title: {
      //   display: true,
      //   text: "Chart.js Pie Chart",
      // },
    },
  };

  const data = {
    labels: result.map((keyword) => {
      if (keywords?.includes(keyword.relKeyword)) {
        return keyword.relKeyword;
      }
    }),
    datasets: [
      {
        // label: "클릭수",
        data: result.map((keyword) => {
          if (keywords?.includes(keyword.relKeyword)) {
            console.log(keyword);
            return keyword.monthlyMobileQcCnt + keyword.monthlyPcQcCnt;
          }
        }),
        backgroundColor: generateAlternatingColors(result.length),
        borderColor: "white", // 투명도 없는 버전
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack spacing={{ base: "4", md: "8" }}>
      <HStack alignItems={"flex-end"}>
        <PageHeader2 title="유입키워드" />
        {/* <IconButton
          mb={1}
          onClick={() => window.location.reload()}
          size={"sm"}
          icon={<MdRestore />}
        /> */}
      </HStack>
      <Stack mx={{ base: "4", md: "8" }}>
        <HStack w={"full"} alignItems={"flex-start"} spacing={10}>
          <Stack
            w={"50%"}
            h={"400px"}
            borderTop={"3px solid"}
            borderColor={"gray.800"}
            p={4}
            spacing={4}
          >
            <Text fontWeight={"bold"} fontSize={"xl"}>
              키워드 그래프
            </Text>
            <Wrap>
              {keywords?.map((keyword, index) => (
                <Tag key={keyword} rounded="full" size="lg" colorScheme="blue">
                  {keyword}
                </Tag>
              ))}
            </Wrap>
            <Pie data={data} options={option} />
          </Stack>
          <Stack w={"50%"}>
            <Stack borderTop={"3px solid"} borderColor={"gray.800"} p={4}>
              <Text fontWeight={"bold"} fontSize={"xl"}>
                키워드 순위
              </Text>
              <Stack>
                {rank?.map((keyword, index) => (
                  <Text>
                    {index + 1}. {keyword.relKeyword}
                  </Text>
                ))}
              </Stack>
            </Stack>
            <Stack borderTop={"3px solid"} borderColor={"gray.800"} p={4}>
              <Text fontWeight={"bold"} fontSize={"xl"}>
                기타 유입키워드
              </Text>
              <Wrap>
                {result?.map(
                  (keyword, index) =>
                    index < 30 && (
                      <Tag
                        key={keyword.relKeyword}
                        rounded="full"
                        size="lg"
                        variant="outline"
                      >
                        {keyword.relKeyword}
                      </Tag>
                    )
                )}
              </Wrap>
            </Stack>
          </Stack>
        </HStack>
      </Stack>
    </Stack>
  );
}

export default Keyword;

import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Select,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SelectModal } from "./TesterUser";
import { PageHeader2 } from "../Application/PageHeader/PageHeader2";
import { getDocument, searchDoc } from "../Firebase/Database";
import { getDoc, where } from "firebase/firestore";
import { Grid, GridItem } from "@chakra-ui/react";
import { BiCalendarCheck, BiCalendarEvent } from "react-icons/bi";
import { IoOpen } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import {
  BsCalendarCheck,
  BsCheck2Square,
  BsClipboard2Check,
} from "react-icons/bs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { calculateTotalViews, getViewsArray } from "../Firebase/Util";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TotalView(props) {
  const [campain, setCampain] = useState({});
  const [testers, setTesters] = useState([]);
  const [selectTester, setSelectTester] = useState([]);
  const [completeTester, setCompleteTester] = useState([]);
  const [reviewTester, setReviewTester] = useState([]);

  // 오늘의 날짜
  const today = new Date();
  // 30일 전 날짜 계산
  const past30Days = new Date();
  past30Days.setDate(today.getDate() - 30);

  useEffect(() => {
    const cid = window.location.pathname.split("/").pop();
    getDocument("Campain", cid).then((data) => {
      setCampain(data);
      searchDoc("Tester", where("cid", "==", cid)).then((data) => {
        setTesters(data);

        data.forEach((tester) => {
          if (tester.step > 0) {
            setSelectTester((prev) => [...prev, tester]);
          }

          if (tester.step > 1) {
            setCompleteTester((prev) => [...prev, tester]);
          }

          if (tester.step > 2) {
            setReviewTester((prev) => [...prev, tester]);
          }
        });
      });
    });
  }, []);

  const toast = useToast();

  function copyToClipboard(text) {
    // 지원되는 브라우저에서는 navigator.clipboard.writeText()를 사용하여 클립보드에 텍스트를 복사합니다.
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast({
            title: "",
            description: "텍스트가 클립보드에 복사되었습니다.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
        })
        .catch((err) => {
          console.error(
            "텍스트를 클립보드에 복사하는 동안 오류가 발생했습니다:",
            err
          );
        });
    } else {
      // 지원되지 않는 브라우저에서는 document.execCommand()를 사용하여 텍스트를 클립보드에 복사합니다.
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast({
        title: "",
        description: "텍스트가 클립보드에 복사되었습니다.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  return (
    <>
      {!window.location.pathname.replaceAll("/admin/dashboard", "") ? (
        <Center w={"full"} h={"full"}>
          <SelectModal />
        </Center>
      ) : (
        <Stack>
          <HStack width={"full"} justifyContent={"space-between"}>
            <PageHeader2 title="종합상세보기" discription={campain?.name} />
            {window.location.pathname.includes("/admin") && (
              <HStack mx={4}>
                <Button
                  variant={"unstyle"}
                  onClick={() =>
                    copyToClipboard(
                      window.location.href.replaceAll(
                        "/admin/dashboard",
                        "/report"
                      )
                    )
                  }
                >
                  링크 생성하기
                </Button>
                <Button
                  variant={"unstyle"}
                  onClick={() => window.location.replace("/admin/dashboard")}
                >
                  다른 캠페인 선택하기
                </Button>
              </HStack>
            )}
          </HStack>

          <Accordion defaultIndex={[0, 1]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton
                  bgColor={"white"}
                  _expanded={{ bg: "gray.100" }}
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"bold"}
                    fontSize={"lg"}
                  >
                    체험단 현황
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing={4}>
                  <HStack gap={4}>
                    <Stack w={"fit-content"} minW={"150px"}>
                      <Button
                        _hover={{ bg: "gray.500" }}
                        colorScheme="gray"
                        leftIcon={<BiCalendarCheck />}
                      >
                        모집기간
                      </Button>
                      <Button
                        _hover={{ bg: "gray.500" }}
                        colorScheme="gray"
                        leftIcon={<BiCalendarEvent />}
                      >
                        발표일
                      </Button>
                      <Button
                        _hover={{ bg: "gray.500" }}
                        colorScheme="gray"
                        leftIcon={<MdReviews />}
                      >
                        리뷰기간
                      </Button>
                    </Stack>
                    <Stack alignItems={"around"}>
                      <Center h={10}>
                        <Text>
                          {campain?.startDate} ~ {campain?.endDate}
                        </Text>
                      </Center>
                      <Center h={10}>
                        <Text w={"full"}>{campain?.openDate}</Text>
                      </Center>
                      <Center h={10}>
                        <Text w={"full"}>
                          {/* {campain?.reviewStart} ~ {campain?.reviewEnd} */}
                          체험 후 3일 이내 작성이 원칙
                        </Text>
                      </Center>
                    </Stack>
                  </HStack>

                  <Divider />

                  <HStack gap={4}>
                    <Stack w={"fit-content"} minW={"150px"}>
                      <Button
                        _hover={{ bg: "gray.500" }}
                        colorScheme="gray"
                        leftIcon={<BsClipboard2Check />}
                      >
                        신청한 인원
                      </Button>
                      <Button
                        _hover={{ bg: "gray.500" }}
                        colorScheme="gray"
                        leftIcon={<HiUserAdd />}
                      >
                        선정된 인원
                      </Button>
                    </Stack>
                    <Stack alignItems={"around"}>
                      <Center h={10}>
                        <Text fontWeight={"bold"} color={"red.500"}>
                          {testers.length}
                        </Text>
                        <Text w={"full"}>명</Text>
                      </Center>
                      <Center h={10}>
                        <Text fontWeight={"bold"} color={"red.500"}>
                          {selectTester.length}
                        </Text>
                        <Text w={"full"}>명</Text>
                      </Center>
                    </Stack>
                  </HStack>

                  <Divider />

                  <HStack gap={4}>
                    <Stack w={"fit-content"} minW={"150px"}>
                      <Button
                        _hover={{ bg: "gray.500" }}
                        colorScheme="gray"
                        leftIcon={<BsCalendarCheck />}
                      >
                        체험완료
                      </Button>
                      <Button
                        _hover={{ bg: "gray.500" }}
                        colorScheme="gray"
                        leftIcon={<BsCheck2Square />}
                      >
                        리뷰완료
                      </Button>
                    </Stack>
                    <Stack alignItems={"around"}>
                      <Center h={10}>
                        <Text fontWeight={"bold"} color={"red.500"}>
                          {completeTester.length}
                        </Text>
                        <Text w={"full"}>명</Text>
                      </Center>
                      <Center h={10}>
                        <Text fontWeight={"bold"} color={"red.500"}>
                          {reviewTester.length}
                        </Text>
                        <Text w={"full"}>명</Text>
                      </Center>
                    </Stack>
                  </HStack>

                  <Divider />

                  <HStack gap={4}>
                    <Stack w={"fit-content"} minW={"150px"}>
                      <Button _hover={{ bg: "gray.500" }} colorScheme="gray">
                        최근 30일
                      </Button>
                      <Button _hover={{ bg: "red.500" }} colorScheme="red">
                        총 조회수
                      </Button>
                    </Stack>
                    <Stack alignItems={"around"}>
                      <Center h={10}>
                        {campain?.views && (
                          <Text fontWeight={"bold"} color={"red.500"}>
                            {calculateTotalViews(
                              campain?.views,
                              past30Days,
                              today
                            )}
                          </Text>
                        )}
                        <Text w={"full"}>회</Text>
                      </Center>
                      <Center h={10}>
                        <Text fontWeight={"bold"} color={"red.500"}>
                          {campain?.totalviews}
                        </Text>
                        <Text w={"full"}>회</Text>
                      </Center>
                    </Stack>
                  </HStack>
                </Stack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  bgColor={"white"}
                  _expanded={{ bg: "gray.100" }}
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"bold"}
                    fontSize={"lg"}
                  >
                    조회 수 현황
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <LineChart views={campain?.views} />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      )}
    </>
  );
}

export function LineChart({ views }) {
  const [diffDate, setDiffDate] = useState(4);
  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 5, // x 축 틱의 최대 수
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      tooltip: {
        padding: 20,
        caretPadding: 10,
        font: {
          family: "'Noto Sans KR', sans-serif",
          color: "#000",
        },
        titleMarginBottom: 10,
        titleSpacing: 10,
        bodySpacing: 10,
        filter: (item) => item.parsed.y !== null,
        // 툴팁에 보여질 데이터를 필터링해줌. 위 코드는 null 인 값은 보이지 않게 함
        usePointStyle: false, //true 로 하면 다른 모양으로 스타일을 설정할 수 있는데, 플러그인 등록
        callbacks: {
          // 툴팁에 표시되는 내용 콜백함수
          // context.parsed.y 은 y 축 값, context.dataset.label는 표시되는 label
          label: (context) => {
            if (context.parsed.y === 0) {
              return " " + context.dataset.label + " -건";
            }
            return " " + context.dataset.label + " " + context.parsed.y + "건";
          },
        },
      },
      scales: {
        //https://www.chartjs.org/docs/latest/axes/styling.html - [scaleId] 가 x 또는 y
        x: {
          type: "time",
          time: {
            unit: "week", // 주 단위로 표시
            stepSize: 1, // 간격 설정
            displayFormats: {
              week: "YYYY-MM-DD", // 주의 형식 설정
            },
          },
        },
        y: {
          // ... x축과 옵션이 동일함. Y축에 대한 옵션
        },
      },

      // title: {
      //   display: true,
      //   text: "Chart.js Line Chart",
      // },
    },
  };

  function getDatesArray(startDate, endDate) {
    const datesArray = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const year = currentDate.getFullYear();
      const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
      const day = ("0" + currentDate.getDate()).slice(-2);
      const formattedDate = `${year}-${month}-${day}`;
      datesArray.push(formattedDate);

      // 현재 날짜에 1일씩 더함
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

  // 데이터 정렬 및 변환
  // getViewsArray(views, 30);

  const data = {
    labels,
    datasets: [
      {
        label: "조회수",
        data: getViewsArray(views, subDays),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4, // 곡선의 길이 설정
        borderWidth: 2, // 라인 그래프의 굵기 설정
        pointRadius: 0, // 데이터 포인트 점 크기 설정
      },
    ],
  };
  return (
    <Stack>
      <Tabs variant={"soft-rounded"} onChange={setDiffDate} defaultIndex={4}>
        <TabList>
          <Tab value={0}>전체</Tab>
          <Tab value={1}>1년</Tab>
          <Tab value={2}>반년</Tab>
          <Tab value={3}>90일</Tab>
          <Tab value={4}>30일</Tab>
        </TabList>
      </Tabs>
      <Line options={options} data={data} height={"100px"} />
    </Stack>
  );
}

export default TotalView;

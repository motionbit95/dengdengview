import {
  Stack,
  Text,
  Button,
  Icon,
  Box,
  Circle,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  HStack,
  Input,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Td,
  StackDivider,
  AspectRatio,
  Image,
  useBreakpointValue,
  Container,
  VStack,
  AccordionIcon,
  Flex,
  Center,
} from "@chakra-ui/react";
import {
  BsClipboardCheck,
  BsPersonCheck,
  BsCalendarCheck,
  BsCheck2Square,
} from "react-icons/bs";
import { colorScheme } from "../App";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getCollection, getDocument, searchDoc } from "../Firebase/Database";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { where } from "firebase/firestore";
import { calculateDday } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/_data";

const Report = () => {
  const navigate = useNavigate();
  const [campain, setCampain] = useState({});
  const [testerCnt, setTesterCnt] = useState({
    register: 0,
    selecter: 0,
    complete: 0,
    reviewer: 0,
  });
  useEffect(() => {
    console.log(window.location.pathname.split("/").pop());

    getDocument("Campain", window.location.pathname.split("/").pop()).then(
      (data) => {
        setCampain(data);
      }
    );

    getCollection("Tester").then((data) => {
      let totalCnt = { register: 0, selecter: 0, complete: 0, reviewer: 0 };
      data.forEach((doc) => {
        if (doc.step > 0) {
          totalCnt.register = totalCnt.register + 1;
        }

        if (doc.step > 1) {
          totalCnt.selecter = totalCnt.selecter + 1;
        }

        if (doc.step > 2) {
          totalCnt.complete = totalCnt.complete + 1;
        }

        if (doc.step > 3) {
          totalCnt.reviewer = totalCnt.reviewer + 1;
        }

        setTesterCnt(totalCnt);
      });
    });
  }, []);
  return (
    <>
      <Flex
        onClick={() => navigate("/")}
        bgColor={"white"}
        px={4}
        py={4}
        w={"100%"}
        justifyContent={"left"}
      >
        <Container>
          <Image src={require("../Assets/img/LogoText.png")} h={"30px"} />
        </Container>
      </Flex>
      <Stack align="center" background="#f5f5f5" spacing={8}>
        <ReportMain campain={campain} testerCnt={testerCnt} />
        <ReportCampain campain={campain} testerCnt={testerCnt} />
        <ReportNotification />
      </Stack>
    </>
  );
};

export default Report;

export function LineChart(value) {
  console.log(value);
  const [diffDate, setDiffDate] = useState(4);
  const options = {
    responsive: true,

    scales: {
      x: {
        ticks: {
          maxTicksLimit: 3, // x 축 틱의 최대 수
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return "조회수: " + context.parsed.y;
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

  // console.log(subDays);
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

  // console.log(objectArray);

  // 날짜 배열에 해당하는 데이터 생성
  const resultData = getDatesArray(ninetyDaysAgo, today).map((date) => {
    const dateString = date;
    // console.log(dateString);
    const matchedObject = objectArray.find((obj) => obj.date === dateString);
    return matchedObject ? parseInt(matchedObject.count) : 0;
  });

  // console.log(resultData);

  const data = {
    labels,
    datasets: [
      {
        label: "조회수",
        data: resultData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4, // 곡선의 길이 설정
        borderWidth: 2, // 라인 그래프의 굵기 설정
        pointRadius: 0, // 데이터 포인트 점 크기 설정
      },
    ],
  };
  return (
    <VStack w={"100%"} h={"100%"}>
      <Line options={options} data={data} />
    </VStack>
  );
}

const ReportMain = (props) => {
  const navigate = useNavigate();

  const [keywords, setKeywords] = useState([]);
  const [result, setResult] = useState([]);
  const [rank, setRank] = useState([]);
  useEffect(() => {
    console.log(window.location.pathname.split("/").pop());
    let cid = window.location.pathname.split("/").pop();

    getDocument("Campain", cid).then((data) => {
      let keywordList = [];
      data.keywords?.forEach((keyword) => {
        keywordList.push(keyword);
        setKeywords(keywordList);
      });
    });

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
    // keywords.forEach((keyword) => {
    // console.log("keywords", keywords, keywords.join(","));
    fetch(
      process.env.REACT_APP_SERVER_URL +
        "/keywordstool?hintKeywords=" +
        keywords.join(",")
    )
      .then(async (response) => {
        return response.json();
      })
      .then(async (data) => {
        let originArray = JSON.parse(data.data).keywordList;

        let newArray = originArray.filter((keyword) => {
          return keywords.includes(keyword.relKeyword);
        });
        // let newArray = originArray.slice(0, 20);
        // console.log(newArray);
        newArray.sort((a, b) => b.monthlyMobileQcCnt - a.monthlyMobileQcCnt);
        setRank(newArray);
        // console.log(newArray);
        setResult(originArray);
      });
    // });
  }, [keywords]);

  useEffect(() => {
    const cid = window.location.pathname.split("/").pop();
    getCollection("Tester").then((data) => {
      data.forEach((doc) => {
        if (doc.cid === cid) {
          console.log(doc);
        }
      });
    });
  }, []);

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

      console.log(groupedObjectsByName);
    });
  }, []);
  return (
    <Stack
      w={"100%"}
      px={{ base: "4", md: "10" }}
      pt={{ base: "4", md: "10" }}
      pb={{ base: "12", md: "24" }}
      spacing={8}
      background="linear-gradient(180deg, #ffffff00 0%, #ffffff 100%)"
    >
      <Container>
        <Stack spacing={4}>
          <Stack align="flex-start" spacing={2}>
            {/* <Text fontWeight="bold" fontSize="3xl">
          [경기 수원]
        </Text> */}
            <Text fontWeight="bold" fontSize={{ base: "2xl", md: "4xl" }}>
              {props.campain.name}
            </Text>
            <Button
              size="lg"
              onClick={() => navigate("/campain/" + props.campain.doc_id)}
            >
              모집글 보기
            </Button>
          </Stack>
          {/* 체험단 현황 */}
          <Stack
            p={8}
            borderRadius={"xl"}
            spacing={5}
            bgColor="white"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              spacing={0}
              align={{ base: "start", md: "center" }}
            >
              <Text fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }}>
                전체 체험단 현황
              </Text>
              <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                {props.campain.startDate}~{props.campain.endDate}
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              p={5}
              align={"center"}
              borderRadius={"xl"}
              border="1px solid #D9D9D9"
              spacing={{ base: 5, md: 0 }}
              divider={<StackDivider />}
            >
              <HStack
                justify="space-between"
                flex="1"
                px={{ base: 0, md: 10 }}
                w={"100%"}
              >
                <Stack align="center">
                  <Icon as={BsClipboardCheck} fontSize={"xl"} />
                  <Text fontWeight="bold" fontSize="md">
                    신청
                  </Text>
                  <Text fontWeight="bold" fontSize="lg" color="cyan.500">
                    {props.testerCnt.register}
                  </Text>
                </Stack>
                <Stack align="center">
                  <Icon as={BsPersonCheck} fontSize={"xl"} />
                  <Text fontWeight="bold" fontSize="md">
                    선정
                  </Text>
                  <Text fontWeight="bold" fontSize="lg" color="cyan.500">
                    {props.testerCnt.selecter}
                  </Text>
                </Stack>
                <Stack align="center">
                  <Icon as={BsCalendarCheck} fontSize={"xl"} />
                  <Text fontWeight="bold" fontSize="md">
                    체험완료
                  </Text>
                  <Text fontWeight="bold" fontSize="lg" color="cyan.500">
                    {props.testerCnt.complete}
                  </Text>
                </Stack>
                <Stack align="center">
                  <Icon as={BsCheck2Square} fontSize={"xl"} />
                  <Text fontWeight="bold" fontSize="md">
                    리뷰완료
                  </Text>
                  <Text fontWeight="bold" fontSize="lg" color="cyan.500">
                    {props.testerCnt.reviewer}
                  </Text>
                </Stack>
              </HStack>
              {/* <Box w="1px" h="40px" border={"1px solid #D9D9D9"} /> */}
              <Stack flex="1" px={{ base: 0, md: 10 }} w={"100%"}>
                <HStack justify="space-between">
                  <Text fontWeight="bold" fontSize="lg">
                    최근 30일 조회
                  </Text>
                  <HStack>
                    <Text fontWeight="bold" color="cyan.500">
                      {props.campain.views}
                    </Text>
                    <Text>회</Text>
                  </HStack>
                </HStack>
                <HStack justify="space-between">
                  <Text fontWeight="bold" fontSize="lg">
                    총 조회 수
                  </Text>
                  <HStack>
                    <Text fontWeight="bold" color="cyan.500">
                      {props.campain.views}
                    </Text>
                    <Text>회</Text>
                  </HStack>
                </HStack>
              </Stack>
            </Stack>
            <Stack direction={{ base: "column", md: "row" }} spacing={5}>
              <Stack spacing={3} flex="1">
                <HStack fontWeight="bold">
                  <Text>지난</Text>
                  <Text color="cyan.500">30일</Text>
                  <Text>조회 그래프</Text>
                </HStack>
                <Box
                  borderRadius="xl"
                  border={"1px solid #D9D9D9"}
                  overflow={"hidden"}
                  h={200}
                >
                  <Stack
                    w={"full"}
                    h={"full"}
                    // bgColor={"gray"}
                    align={"center"}
                    justify={"center"}
                  >
                    <LineChart
                      value={[
                        { date: "2024-05-01", count: "2" },
                        { date: "2024-05-02", count: "10" },
                        { date: "2024-05-03", count: "3" },
                        { date: "2024-05-04", count: "5" },
                        { date: "2024-05-05", count: "10" },
                      ]}
                    />
                  </Stack>
                </Box>
              </Stack>
              <Stack spacing={3} flex="1" alignSelf="stretch">
                <HStack fontWeight="bold">
                  <Text>전체</Text>
                  <Text color="cyan.500">총 조회</Text>
                  <Text>그래프</Text>
                </HStack>
                <Box
                  borderRadius="xl"
                  border={"1px solid #D9D9D9"}
                  overflow={"hidden"}
                  h={200}
                >
                  <Stack
                    w={"full"}
                    h={"full"}
                    // bgColor={"gray"}
                    align={"center"}
                    justify={"center"}
                  >
                    <LineChart
                      value={[
                        { date: "2024-05-01", count: "2" },
                        { date: "2024-05-02", count: "10" },
                        { date: "2024-05-03", count: "3" },
                        { date: "2024-05-04", count: "5" },
                        { date: "2024-05-05", count: "10" },
                      ]}
                    />
                  </Stack>
                </Box>
              </Stack>
            </Stack>
            <Button
              size="lg"
              // colorScheme={colorScheme}
              height={12}
              // alignSelf="stretch"

              onClick={() =>
                navigate(
                  `/report/detail/` + window.location.pathname.split("/").pop()
                )
              }
            >
              종합 상세 리포트 보기
            </Button>
          </Stack>
          {/* 네이버 노출 키워드 */}
          <Stack
            borderRadius={"xl"}
            overflow="hidden"
            border={"1px solid #4FC671"}
            bgColor="white"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <HStack py={1} px={2} background="#4FC671">
              <Text fontWeight="bold" fontSize="xl" color="white">
                네이버 노출 키워드
              </Text>
            </HStack>
            <Stack
              direction={{ base: "column", lg: "row" }}
              p={4}
              justify={"space-between"}
              spacing={2}
            >
              {searchByKeyword && Object.entries(searchByKeyword).length ? (
                <Stack
                  direction={{ base: "column", md: "row" }}
                  w={"full"}
                  flex={1}
                >
                  <HStack w={"full"}>
                    {searchByKeyword &&
                      Object.entries(searchByKeyword)?.map(([key, value]) => (
                        <Box key={key}>
                          <Text fontSize="xl" fontWeight="bold" mb={2}>
                            {key}
                          </Text>
                          <HStack>
                            {value?.map(
                              (obj, index) =>
                                index < 3 && (
                                  <Stack spacing={1}>
                                    <Text>
                                      <strong
                                        key={index}
                                        style={{ color: "red" }}
                                      >
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
                                      aspectRatio={"2/3"}
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
                          </HStack>
                        </Box>
                      ))}
                    {/* <Stack w={"full"}>
                <Text>OOO</Text>
                <HStack align={"center"}>
                  <Text fontSize={"sm"}>00건 노출</Text>
                  <Text fontSize={"xs"} color={"rgba(0, 0, 0, 0.5)"}>
                    2024.05.01
                  </Text>
                </HStack>
                <AspectRatio ratio={9 / 16}>
                  <Image objectFit={"cover"} overflow={"hidden"} />
                </AspectRatio>
              </Stack>
              <Stack w={"full"}>
                <Text>OOO</Text>
                <HStack align={"center"}>
                  <Text fontSize={"sm"}>00건 노출</Text>
                  <Text fontSize={"xs"} color={"rgba(0, 0, 0, 0.5)"}>
                    2024.05.01
                  </Text>
                </HStack>
                <AspectRatio ratio={9 / 16}>
                  <Image />
                </AspectRatio>
              </Stack>
              <Stack w={"full"}>
                <Text>OOO</Text>
                <HStack align={"center"}>
                  <Text fontSize={"sm"}>00건 노출</Text>
                  <Text fontSize={"xs"} color={"rgba(0, 0, 0, 0.5)"}>
                    2024.05.01
                  </Text>
                </HStack>
                <AspectRatio ratio={9 / 16}>
                  <Image />
                </AspectRatio>
              </Stack> */}
                  </HStack>
                  <Stack pt={{ base: 0, md: 16 }}>
                    <Button
                      size="lg"
                      variant={"secondary"}
                      h={{ base: "12", md: "full" }}
                    >
                      더보기
                    </Button>
                  </Stack>
                </Stack>
              ) : (
                <Center w={"full"} flex={1}>
                  <Text>검색점유율이 존재하지 않습니다.</Text>
                </Center>
              )}
              <Stack
                justify={"space-between"}
                direction={{ base: "column", md: "row" }}
                w={"full"}
                flex={1}
                align={"flex-start"}
              >
                <Stack
                  px={5}
                  spacing={6}
                  fontWeight="bold"
                  flex={{ md: 2 }}
                  w={"full"}
                >
                  <HStack
                    w={"full"}
                    justify={"space-between"}
                    borderBottom={"1px solid #D9D9D9"}
                    pb={1}
                  >
                    <Text fontSize={"lg"}>네이버 키워드 노출 순위</Text>
                    <Icon as={FaSearch} cursor={"pointer"} />
                  </HStack>

                  <Stack>
                    {rank.map((keyword, index) => (
                      <HStack w={"full"} justify={"space-between"} key={index}>
                        <Text>
                          {index + 1}. {keyword.relKeyword}
                        </Text>
                        <Text>
                          <strong style={{ color: "red" }}>
                            {keyword.monthlyPcQcCnt}
                          </strong>
                          건
                        </Text>
                      </HStack>
                    ))}
                  </Stack>
                  {/* <Stack spacing={3} flex="1">
                <HStack justify="space-between" align="center">
                  <HStack spacing={3}>
                    <Text>광교한우</Text>
                    <Circle size={5} background="#D96083" />
                  </HStack>
                  <HStack spacing={0}>
                    <Text color="cyan.500">186</Text>
                    <Text>건</Text>
                  </HStack>
                </HStack>
                <HStack justify="space-between" align="center">
                  <HStack spacing={3}>
                    <Text>광교룸 식당</Text>
                    <Circle size={5} background="#5082D0" />
                  </HStack>
                  <HStack spacing={0}>
                    <Text color="cyan.500">186</Text>
                    <Text>건</Text>
                  </HStack>
                </HStack>
                <HStack justify="space-between" align="center">
                  <HStack spacing={3}>
                    <Text>광교 한우</Text>
                    <Circle size={5} background="#66DD7D" />
                  </HStack>
                  <HStack spacing={0}>
                    <Text color="cyan.500">186</Text>
                    <Text>건</Text>
                  </HStack>
                </HStack>
                <HStack justify="space-between" align="center">
                  <HStack spacing={3}>
                    <Text>수원광교맛집</Text>
                    <Circle size={5} background="#E5D279" />
                  </HStack>
                  <HStack spacing={0}>
                    <Text color="cyan.500">186</Text>
                    <Text>건</Text>
                  </HStack>
                </HStack>
                <HStack justify="space-between" align="center">
                  <HStack spacing={3}>
                    <Text>수원광교한우맛집</Text>
                    <Circle size={5} background="#88CEC3" />
                  </HStack>
                  <HStack spacing={0}>
                    <Text color="cyan.500">186</Text>
                    <Text>건</Text>
                  </HStack>
                </HStack>
              </Stack> */}
                </Stack>
                {/* <Stack p={4} flex={{ md: 3 }} w={"full"}>
              <Box
                borderRadius="xl"
                border={"1px solid #D9D9D9"}
                overflow={"hidden"}
                h={200}
              >
                <Stack
                  w={"full"}
                  h={"full"}
                  bgColor={"gray"}
                  align={"center"}
                  justify={"center"}
                >

                </Stack>
              </Box>
            </Stack> */}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

const ReportCampain = (props) => {
  const [reportCampains, setReportCampains] = useState([]);
  useEffect(() => {
    setReportCampains([props.campain]);

    console.log("setTesterCnt", props.testerCnt);
  }, [props.campain]);

  // const reportCampains = [
  //   {
  //     id: 1,
  //     title: "OOO 체험단",
  //     startDate: "2024.04.01",
  //     endDate: "2024.05.01",
  //     state: "신청",
  //     state1: "마감",
  //     campains: "123",
  //     campains1: "56",
  //     tester: "45",
  //     campains2: "36",
  //     LastThirtyDaysView: "5653",
  //     totalView: "32103",
  //   },
  //   {
  //     id: 2,
  //     title: "OOO 체험단",
  //     startDate: "2024.04.01",
  //     endDate: "2024.05.01",
  //     state: "신청",
  //     state1: "마감",
  //     campains: "123",
  //     campains1: "56",
  //     tester: "45",
  //     campains2: "36",
  //     LastThirtyDaysView: "5653",
  //     totalView: "32103",
  //   },
  //   {
  //     id: 3,
  //     title: "OOO 체험단",
  //     startDate: "2024.04.01",
  //     endDate: "2024.05.01",
  //     state: "신청",
  //     state1: "마감",
  //     campains: "123",
  //     campains1: "56",
  //     tester: "45",
  //     campains2: "36",
  //     LastThirtyDaysView: "5653",
  //     totalView: "32103",
  //   },
  //   {
  //     id: 4,
  //     title: "OOO 체험단",
  //     startDate: "2024.04.01",
  //     endDate: "2024.05.01",
  //     state: "신청",
  //     state1: "마감",
  //     campains: "123",
  //     campains1: "56",
  //     tester: "45",
  //     campains2: "36",
  //     LastThirtyDaysView: "5653",
  //     totalView: "32103",
  //   },
  //   {
  //     id: 5,
  //     title: "OOO 체험단",
  //     startDate: "2024.04.01",
  //     endDate: "2024.05.01",
  //     state: "신청",
  //     state1: "마감",
  //     campains: "123",
  //     campains1: "56",
  //     tester: "45",
  //     campains2: "36",
  //     LastThirtyDaysView: "5653",
  //     totalView: "32103",
  //   },
  //   {
  //     id: 6,
  //     title: "OOO 체험단",
  //     startDate: "2024.04.01",
  //     endDate: "2024.05.01",
  //     state: "신청",
  //     state1: "마감",
  //     campains: "123",
  //     campains1: "56",
  //     tester: "45",
  //     campains2: "36",
  //     LastThirtyDaysView: "5653",
  //     totalView: "32103",
  //   },
  //   {
  //     id: 7,
  //     title: "OOO 체험단",
  //     startDate: "2024.04.01",
  //     endDate: "2024.05.01",
  //     state: "신청",
  //     state1: "마감",
  //     campains: "123",
  //     campains1: "56",
  //     tester: "45",
  //     campains2: "36",
  //     LastThirtyDaysView: "5653",
  //     totalView: "32103",
  //   },
  //   {
  //     id: 8,
  //     title: "OOO 체험단",
  //     startDate: "2024.04.01",
  //     endDate: "2024.05.01",
  //     state: "신청",
  //     state1: "마감",
  //     campains: "123",
  //     campains1: "56",
  //     tester: "45",
  //     campains2: "36",
  //     LastThirtyDaysView: "5653",
  //     totalView: "32103",
  //   },
  // ];

  const ismobile = useBreakpointValue({ base: true, md: false });
  return (
    <Stack
      w={"100%"}
      px={{ base: 4, lg: 8 }}
      pt={8}
      pb={20}
      spacing={8}
      background="white"
    >
      <Container>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Stack mb={4}>
                <Text fontWeight="bold" fontSize={{ base: "lg", lg: "xl" }}>
                  진행별 체험단
                </Text>
                {/* <Text fontWeight="medium" color="rgba(0, 0, 0, 0.5)">
                각 차수별로 자세한 내용을 들어가 볼 수 있습니다.
              </Text> */}
              </Stack>
            </Thead>

            <Tbody borderY={"1px solid black"}>
              <Tr>
                <Td w={{ base: "full", lg: "50%" }}>
                  <HStack spacing={4}>
                    <Stack
                      borderRadius="xl"
                      w={{ base: 12, lg: 14 }}
                      h={{ base: 12, lg: 14 }}
                      background="#203E59"
                      justify="center"
                    >
                      <Stack
                        align="center"
                        spacing={"0px"}
                        color="white"
                        fontWeight="bold"
                      >
                        <Text fontSize={{ base: "md", lg: "lg" }}>전체</Text>
                        <Text fontSize={{ base: "sm", lg: "md" }}>종합</Text>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Text
                        fontSize={{ base: "lg", lg: "xl" }}
                        fontWeight="bold"
                      >
                        전체 종합지수
                      </Text>
                      <Text
                        fontSize={{ base: "xs", lg: "sm" }}
                        fontWeight="bold"
                        color="rgba(0, 0, 0, 0.5)"
                      >
                        {props.campain.startDate}~{props.campain.endDate}
                      </Text>
                    </Stack>
                  </HStack>
                </Td>
                <Td>
                  <HStack justify={"space-between"} fontWeight="bold">
                    <Stack
                      align="center"
                      spacing={2}
                      fontSize={{ base: "md", lg: "lg" }}
                    >
                      <Text
                        color="rgba(0, 0, 0, 0.6)"
                        fontSize={{ base: "sm", lg: "md" }}
                      >
                        신청자
                      </Text>
                      <HStack spacing={0}>
                        <Text color="cyan.500">{props.testerCnt.register}</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack
                      fontSize={{ base: "md", lg: "lg" }}
                      align="center"
                      spacing={2}
                    >
                      <Text
                        fontSize={{ base: "sm", lg: "md" }}
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        선정자
                      </Text>
                      <HStack spacing={0}>
                        <Text color="cyan.500">{props.testerCnt.selecter}</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack
                      fontSize={{ base: "md", lg: "lg" }}
                      align="center"
                      spacing={2}
                    >
                      <Text
                        fontSize={{ base: "sm", lg: "md" }}
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        사용완료
                      </Text>
                      <HStack spacing={0}>
                        <Text color="cyan.500">{props.testerCnt.complete}</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack
                      fontSize={{ base: "md", lg: "lg" }}
                      align="center"
                      spacing={2}
                    >
                      <Text
                        fontSize={{ base: "sm", lg: "md" }}
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        리뷰완료
                      </Text>
                      <HStack spacing={0}>
                        <Text color="cyan.500">{props.testerCnt.reviewer}</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </Td>
                <Td>
                  <HStack
                    justify={"space-between"}
                    fontWeight="bold"
                    fontSize={{ base: "md", lg: "lg" }}
                  >
                    <Stack align="center" spacing={2}>
                      <Text
                        fontSize={{ base: "sm", lg: "md" }}
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        최근 30일 조회
                      </Text>
                      <HStack spacing={0}>
                        <Text color="cyan.500">{props.campain.views}</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing={2}>
                      <Text
                        fontSize={{ base: "sm", lg: "md" }}
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        총 조회 수
                      </Text>
                      <HStack spacing={0}>
                        <Text color="cyan.500">{props.campain.views}</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </Td>
              </Tr>
              {reportCampains.map((item) => (
                <Tr>
                  <Td w={{ base: "full", lg: "50%" }}>
                    <HStack spacing={4}>
                      <Stack
                        borderRadius="xl"
                        w={{ base: 12, lg: 14 }}
                        h={{ base: 12, lg: 14 }}
                        background="linear-gradient(270deg, #228d58 0%, #4585bf 100%)"
                        justify="center"
                      >
                        <Stack
                          align="center"
                          spacing={"0px"}
                          color="white"
                          fontWeight="bold"
                        >
                          <Text
                            fontSize={{ base: "md", lg: "lg" }}
                            whiteSpace={"pre-wrap"}
                          >
                            {calculateDday(item.endDate) < 0
                              ? "신청\n마감"
                              : "신청중"}
                            {/* {item.state} */}
                          </Text>
                        </Stack>
                      </Stack>
                      <Stack justify="center" spacing={1}>
                        <Text
                          fontWeight="bold"
                          fontSize={{ base: "lg", lg: "xl" }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          fontWeight="bold"
                          fontSize={{ base: "xs", lg: "sm" }}
                          color="rgba(0, 0, 0, 0.5)"
                        >
                          {item.startDate}~{item.endDate}
                        </Text>
                      </Stack>
                    </HStack>
                  </Td>
                  <Td>
                    <HStack
                      justify={"space-between"}
                      fontWeight="bold"
                      fontSize={{ base: "md", lg: "lg" }}
                    >
                      <Stack align="center" spacing={2}>
                        <Text
                          fontSize={{ base: "sm", lg: "md" }}
                          color="rgba(0, 0, 0, 0.6)"
                        >
                          신청자
                        </Text>
                        <HStack spacing={0}>
                          <Text color="cyan.500">
                            {props.testerCnt.register}
                          </Text>
                          <Text>명</Text>
                        </HStack>
                      </Stack>
                      <Stack align="center" spacing={2}>
                        <Text
                          fontSize={{ base: "sm", lg: "md" }}
                          color="rgba(0, 0, 0, 0.6)"
                        >
                          선정자
                        </Text>
                        <HStack spacing={0}>
                          <Text color="cyan.500">
                            {props.testerCnt.selecter}
                          </Text>
                          <Text>명</Text>
                        </HStack>
                      </Stack>
                      <Stack align="center" spacing={2}>
                        <Text
                          fontSize={{ base: "sm", lg: "md" }}
                          color="rgba(0, 0, 0, 0.6)"
                        >
                          사용완료
                        </Text>
                        <HStack spacing={0}>
                          <Text color="cyan.500">
                            {props.testerCnt.complete}
                          </Text>
                          <Text>명</Text>
                        </HStack>
                      </Stack>
                      <Stack align="center" spacing={2}>
                        <Text
                          fontSize={{ base: "sm", lg: "md" }}
                          color="rgba(0, 0, 0, 0.6)"
                        >
                          리뷰완료
                        </Text>
                        <HStack spacing={0}>
                          <Text color="cyan.500">
                            {props.testerCnt.reviewer}
                          </Text>
                          <Text>명</Text>
                        </HStack>
                      </Stack>
                    </HStack>
                  </Td>
                  <Td>
                    <HStack
                      justify={"space-between"}
                      fontWeight="bold"
                      fontSize={{ base: "md", lg: "lg" }}
                    >
                      <Stack align="center" spacing={2}>
                        <Text
                          fontSize={{ base: "sm", lg: "md" }}
                          color="rgba(0, 0, 0, 0.6)"
                        >
                          최근 30일 조회
                        </Text>
                        <HStack spacing={0}>
                          <Text color="cyan.500">
                            {item.views}
                            {/* {item.LastThirtyDaysView.toString().replace(
                              /\B(?=(\d{3})+(?!\d))/g,
                              ","
                            )} */}
                          </Text>
                          <Text>회</Text>
                        </HStack>
                      </Stack>
                      <Stack align="center" spacing={2}>
                        <Text
                          fontSize={{ base: "sm", lg: "md" }}
                          color="rgba(0, 0, 0, 0.6)"
                        >
                          총 조회 수
                        </Text>
                        <HStack spacing={0}>
                          <Text color="cyan.500">
                            {item.views}
                            {/* {item.totalView
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                          </Text>
                          <Text>회</Text>
                        </HStack>
                      </Stack>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </Stack>
  );
};

const ReportNotification = () => {
  return (
    <Stack
      w={"100%"}
      px={{ base: 4, lg: 8 }}
      pt={8}
      pb={20}
      spacing={8}
      background="white"
    >
      <Container>
        <Stack spacing={1}>
          <Text fontWeight="bold" fontSize={{ base: "lg", lg: "xl" }}>
            안내사항
          </Text>
          <Text color="rgba(0, 0, 0, 0.5)" fontSize={{ base: "sm", lg: "md" }}>
            전체 종합 조회 그래프를 보실 수 있습니다.
          </Text>
        </Stack>
        <Accordion allowMultiple defaultIndex={[0, 1, 2]}>
          <AccordionItem>
            <AccordionButton h={12}>
              <Text
                fontWeight="bold"
                fontSize={{ base: "md", lg: "lg" }}
                color="rgba(0, 0, 0, 0.8)"
                flex="1"
                textAlign="left"
              >
                체험단 리포트 간단 안내
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p={{ base: 2, lg: 4 }}>
              <Stack
                flex="1"
                fontWeight="regular"
                fontSize={{ base: "sm", lg: "md" }}
                color="rgba(0, 0, 0, 0.7)"
                spacing={2}
              >
                <Text>
                  ・ 각 회차별 세부 지표를 누르시면 당첨자 / 후기보기 / 리뷰분석
                  / 리뷰사진 / 검색점유율 / 유입키워드 / 모짐글보기를 확인하실
                  수 있습니다.
                </Text>
                <Text>
                  ・ 결과리포트는 회차별 체험기간이 완료 후 자동업데이트 됩니다.
                </Text>
                <Text>
                  ・ 리뷰작성은 초대권 체험기간에서 최대 7일이후까지 작성될 수
                  있습니다.
                </Text>
                <Text>
                  ・ 체험단 선정기준은 신청자 계정의 영향력에 따라 선정이 되며,
                  기준에 적합하지 않을 경우 해당 부족인원수는 재모집을 하여 보다
                  영향력있는 체험단으로 구성하여 진행하고 있습니다.
                </Text>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton h={12}>
              <Text
                fontWeight="bold"
                fontSize={{ base: "md", lg: "lg" }}
                color="rgba(0, 0, 0, 0.7)"
                flex="1"
                textAlign="left"
              >
                체험단 QnA
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p={{ base: 2, lg: 4 }}>
              <Stack
                fontWeight="bold"
                fontSize={{ base: "sm", lg: "md" }}
                color="rgba(0, 0, 0, 0.8)"
                flex="1"
                spacing={5}
              >
                <Stack>
                  <Text>
                    Q. 사실과 다른 리뷰가 올라왔습니다 어떻게 해야되나요?
                  </Text>
                  <Text color="rgba(0, 0, 0, 0.5)">
                    A. 해당 블로거의 닉네임 + 전화번호 뒷자리(4자리)를 댕댕뷰로
                    전화 주시면 해당 블로거와의 문제를 해결해드리겠습니다.
                  </Text>
                </Stack>
                <Stack>
                  <Text>Q. 리뷰에 스폰서배너가 꼭 들어가야 되나요?</Text>
                  <Text color="rgba(0, 0, 0, 0.5)">
                    A. 네, 반드시 들어가야합니다. 스폰서 배너를 게시하지 않거나
                    리뷰 작성 후 임의로 스폰서 배너를 삭제하는 경우, 관련 법규에
                    저촉되어 댕댕뷰, 광고주, 체험단에 참여한 회원 모두에게
                    법적인 제제가 가해질 수 있습니다. (공정위 심사지침 개정
                    2014.07)
                  </Text>
                </Stack>
                <Stack>
                  <Text>
                    Q. 제공되는 메뉴 이외 음식을 주문했는데 나머지 차액은 어떻게
                    해야되나요?
                  </Text>
                  <Text color="rgba(0, 0, 0, 0.5)">
                    A. 체험시 제공 내용(비용) 외 추가 비용 발생한 경우, 추가
                    비용은 체험단(블로거) 부담입니다. 추가 비용 요청하시면
                    됩니다.
                  </Text>
                </Stack>
                <Stack>
                  <Text>
                    Q. 체험 기간 내 블로거 방문이 어려운 경우, 체험 기간
                    연장해줘도 되나요?
                  </Text>
                  <Text color="rgba(0, 0, 0, 0.5)">
                    A. 네, 가능합니다. 업체(광고주) 권한으로 가능합니다. 단,
                    기간 연장은 최대 7일까지 가능합니다. 연장일정은 블로거와
                    업체 사장님께서 조율 후 카카오톡 댕댕뷰로 알려주세요.
                  </Text>
                </Stack>
                <Stack>
                  <Text>
                    Q. 블로거 리뷰 등록이 늦어지고 있어요. 언제까지 기다려야
                    되나요?
                  </Text>
                  <Text color="rgba(0, 0, 0, 0.5)">
                    A. 리뷰 마감일 이후, 최대 7일 이내, 리뷰가 게시되지 않을
                    경우, 해당 블로거에 패널티 및 음식비용 청구 등을 철저하게
                    관리하고 있습니다. (리뷰 마감일 이후 7일)
                  </Text>
                </Stack>
                <Stack>
                  <Text>
                    Q. 체험기간 중 체험신청 블로거가 정원에 차지 않는 경우?
                  </Text>
                  <Text color="rgba(0, 0, 0, 0.5)">
                    A. 간혹 블로거들이 개인 사정으로 방문하지 않을 경우가
                    있습니다. 결원은 다음 회차 모집 인원에 포함(이월) 진행되거나
                    마지막 회차 혹은 추가 회차를 진행해서라도 계약된 인원수는
                    보장해드리니 걱정 안 하셔도 됩니다.
                  </Text>
                </Stack>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton h={12} alignSelf="stretch">
              <Text
                fontWeight="bold"
                fontSize={{ base: "md", lg: "lg" }}
                color="rgba(0, 0, 0, 0.8)"
                flex="1"
                textAlign="left"
              >
                광고주 의견 쓰기
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p={{ base: 2, lg: 4 }}>
              <Stack spacing={8} flex="1">
                <Text color="#8C8C8C" fontSize="sm">
                  체험단 진행하면서 겪으셨던 불편사항이나 다음 체험에서 바라는
                  점을 적어주세요. 광고주 의견을 반영해서 더 나은 체험단이
                  진행될 수 있도록 노력하겠습니다.
                </Text>
                <Input
                  placeholder="메모를 입력하세요"
                  isInvalid={false}
                  isDisabled="Default"
                  w={"100%"}
                  h={20}
                  border={"1px solid #E5E5E5"}
                />
                <Button
                  size="lg"
                  // colorScheme={colorScheme}
                >
                  의견 제출 하기
                </Button>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Stack>
  );
};

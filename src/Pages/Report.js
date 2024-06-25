import {
  Stack,
  Text,
  Button,
  Icon,
  Box,
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
  Image,
  Container,
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
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { calculateTotalViews, getViewsArray } from "../Firebase/Util";

const Report = () => {
  const navigate = useNavigate();
  const [campainList, setCampainList] = useState([]);
  const [campain, setCampain] = useState({});
  const [testerCnt, setTesterCnt] = useState({
    register: 0,
    selecter: 0,
    complete: 0,
    reviewer: 0,
    totalviews: 0,
    total30views: 0,
  });
  useEffect(() => {
    const cid = window.location.pathname.split("/").pop();

    fetch(process.env.REACT_APP_SERVER_URL + "/campain/get/" + cid)
      .then((res) => res.json())
      .then((data) => {
        console.log("=>", data.company);
        fetch(process.env.REACT_APP_SERVER_URL + "/campain/search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            conditions: [
              { field: "company", operator: "==", value: data.company },
            ],
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("=>", data);
            setCampainList(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const calculateAnalysis = () => {
    // 오늘의 날짜
    const today = new Date();
    // 30일 전 날짜 계산
    const past30Days = new Date();
    past30Days.setDate(today.getDate() - 30);

    let totalAnalysis = {
      register: 0,
      selecter: 0,
      complete: 0,
      reviewer: 0,
      totalviews: 0,
      total30views: 0,
    };
    campainList.forEach((element) => {
      totalAnalysis.totalviews += parseInt(element.totalviews);
      totalAnalysis.total30views += calculateTotalViews(
        element?.views,
        past30Days,
        today
      );

      console.log("=> !!", element.analysis);
      if (element.analysis) {
        totalAnalysis.register += element.analysis?.register;
        totalAnalysis.selecter += element.analysis?.selecter;
        totalAnalysis.complete += element.analysis?.complete;
        totalAnalysis.reviewer += element.analysis?.reviewer;
      }

      setTesterCnt({
        register: totalAnalysis.register,
        selecter: totalAnalysis.selecter,
        complete: totalAnalysis.complete,
        reviewer: totalAnalysis.reviewer,
        totalviews: totalAnalysis.totalviews,
        total30views: totalAnalysis.total30views,
      });
    });
  };

  useEffect(() => {
    calculateAnalysis();
  }, [campainList]);

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
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontFamily={"Cafe24Ssurround"}
          >
            댕댕뷰
          </Text>
          {/* <Image src={require("../Assets/img/LogoText.png")} h={"30px"} /> */}
        </Container>
      </Flex>
      <Stack align="center" background="#f5f5f5" spacing={8}>
        <ReportMain campain={campain} testerCnt={testerCnt} />
        <ReportCampain
          campain={campain}
          testerCnt={testerCnt}
          campainList={campainList}
          updateAnalysis={calculateAnalysis}
        />
        <ReportNotification />
      </Stack>
    </>
  );
};

export default Report;

const ReportMain = (props) => {
  const navigate = useNavigate();

  const [keywords, setKeywords] = useState([]);
  const [result, setResult] = useState([]);
  const [rank, setRank] = useState([]);
  useEffect(() => {
    let cid = window.location.pathname.split("/").pop();

    fetch(process.env.REACT_APP_SERVER_URL + "/campain/get/" + cid)
      .then((res) => res.json())
      .then((data) => {
        let keywordList = [];
        if (data?.keywords) {
          data.keywords?.forEach((keyword) => {
            keywordList.push(keyword);
            setKeywords(keywordList);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (keywords?.length > 0) {
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
            return keywords?.includes(keyword.relKeyword);
          });
          // let newArray = originArray.slice(0, 20);
          // console.log(newArray);
          newArray.sort((a, b) => b.monthlyMobileQcCnt - a.monthlyMobileQcCnt);
          setRank(newArray);
          // console.log(newArray);
          setResult(originArray);
        });
    }
  }, [keywords]);

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
    const cid = window.location.pathname.split("/").pop();
    fetch(process.env.REACT_APP_SERVER_URL + "/campain/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conditions: [{ field: "id", operator: "==", value: cid }],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let totalCnt = 0;
        data.forEach((doc) => {
          totalCnt += parseInt(doc.count);
        });
        setTotalCnt(totalCnt);
        // 'name' 속성을 기준으로 객체를 그룹화
        const groupedObjectsByName = groupObjectsByProperty(data, "keyword");
        setSearchByKeyword(groupedObjectsByName);

        console.log(groupedObjectsByName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 오늘의 날짜
  const today = new Date();
  // 30일 전 날짜 계산
  const past30Days = new Date();
  past30Days.setDate(today.getDate() - 30);

  const [campain, setCampain] = useState({});

  useEffect(() => {
    setCampain(props.campain);
  }, [props.campain]);

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
              {props.campain?.name}
            </Text>
            <Button
              size="lg"
              onClick={() => navigate("/campain/" + props.campain.id)}
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
                {props.campain?.startDate}~{props.campain?.endDate}
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
                      {props.testerCnt.total30views}
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
                      {props.testerCnt.totalviews}
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
                  p={4}
                >
                  <LineChart views={campain?.views} diffDate={4} />
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
                  p={4}
                >
                  <LineChart views={campain?.views} diffDate={0} />
                </Box>
              </Stack>
            </Stack>
            <Button
              size="lg"
              // colorScheme={colorScheme}
              height={12}
              // alignSelf="stretch"

              onClick={
                () =>
                  window.open(
                    `/report/detail/` +
                      window.location.pathname.split("/").pop()
                  )
                // navigate(
                //   `/report/detail/` + window.location.pathname.split("/").pop()
                // )
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
                      onClick={
                        () =>
                          window.open(
                            `/report/detail/` +
                              window.location.pathname.split("/").pop()
                          )
                        // navigate(
                        //   `/report/detail/` + window.location.pathname.split("/").pop()
                        // )
                      }
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
  const [reportCampains, setReportCampains] = useState(props?.campainList);

  // 오늘의 날짜
  const today = new Date();
  // 30일 전 날짜 계산
  const past30Days = new Date();
  past30Days.setDate(today.getDate() - 30);

  const [campain, setCampain] = useState({});

  const [totalCnt, setTotalCnt] = useState({});

  useEffect(() => {
    setCampain(props.campain);
  }, [props.campain]);

  useEffect(() => {
    let tempList = props.campainList;
    setReportCampains(tempList);
    props.campainList?.map((element, index) => {
      let cid = element.id;
      let analysis = {
        register: 0,
        selecter: 0,
        complete: 0,
        reviewer: 0,
      };
      fetch(process.env.REACT_APP_SERVER_URL + "/tester/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conditions: [{ field: "cid", operator: "==", value: cid }],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          data.forEach((element) => {
            if (element.step >= 0) {
              analysis.register = analysis.register ? analysis.register + 1 : 1;
            }
            if (element.step >= 1) {
              analysis.selecter = analysis.selecter ? analysis.selecter + 1 : 1;
            }
            if (element.step >= 2) {
              analysis.complete = analysis.complete ? analysis.complete + 1 : 1;
            }
            if (element.step >= 3) {
              analysis.reviewer = analysis.reviewer ? analysis.reviewer + 1 : 1;
            }
            // console.log("=>", analysis);

            tempList[index].analysis = analysis;

            console.log("=>", tempList, cid);
            setReportCampains(tempList);
            props.updateAnalysis();
          });
        })
        .catch((error) => {
          console.log("신청자가 없음", error);
        });
    });
  }, [props.campainList]);

  useEffect(() => {
    console.log("=> debug ", reportCampains, props.testerCnt);
  }, [reportCampains]);

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
                        {props.campainList[0]?.startDate}~
                        {
                          props.campainList[props.campainList.length - 1]
                            ?.endDate
                        }
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
                        <Text color="cyan.500">
                          {props.testerCnt.total30views}
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
                          {props.testerCnt.totalviews}
                        </Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </Td>
              </Tr>
              {reportCampains.map((item, index) => (
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
                            {index + 1}차
                            {/* {calculateDday(item.endDate) < 0
                              ? "신청\n마감"
                              : "신청중"} */}
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
                            {item.analysis?.register
                              ? item.analysis?.register
                              : "0"}
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
                            {item.analysis?.selecter
                              ? item.analysis?.selecter
                              : "0"}
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
                            {item.analysis?.complete
                              ? item.analysis?.complete
                              : "0"}
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
                            {item.analysis?.reviewer
                              ? item.analysis?.reviewer
                              : "0"}
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
                            {calculateTotalViews(
                              item?.views,
                              past30Days,
                              today
                            )}
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
                          <Text color="cyan.500">{item?.totalviews}</Text>
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
                  / 리뷰사진 / 검색점유율 / 유입키워드 / 모집글보기를 확인하실
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

export function LineChart({ views, diffDate }) {
  // const [diffDate, setDiffDate] = useState(diffDate);
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
      <Line options={options} data={data} height={"100px"} />
    </Stack>
  );
}

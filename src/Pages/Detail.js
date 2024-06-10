import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Stack,
  Text,
  HStack,
  Button,
  Image,
  Tag,
  Box,
  Container,
  TagLeftIcon,
  Card,
  CardBody,
  useDisclosure,
  CheckboxGroup,
  Checkbox,
  StackDivider,
  Input,
  useToast,
  Avatar,
  Divider,
  WrapItem,
  Wrap,
  Center,
  Flex,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { calculateDday } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/_data";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import "../Component/Calendar.css";
import moment from "moment";
import { BsEyeFill, BsInstagram } from "react-icons/bs";
import {
  createDoc,
  getCollection,
  getDocument,
  multiQuery,
  searchDoc,
  updateDoc,
} from "../Firebase/Database";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AddressInput } from "../Component/MInput";
import { auth } from "../Firebase/Config";
import { where } from "firebase/firestore";
import { HiReceiptTax } from "react-icons/hi";
import { GridQuiteMinimalistic } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/App";
import { chakra } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Detail(props) {
  const navigate = useNavigate();
  const location = useLocation();
  // const campain = location.state;
  const [campain, setCampain] = useState(null);

  const [isOpen, onToggle] = React.useState(false);

  const [userList, setUserList] = useState([]);

  const [campains, setCampains] = useState([]);

  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleImageClick = (imageUrl) => {
    // console.log("이미지링크 이건디 : ", imageUrl);
    setSelectedImageUrl(imageUrl);
    setOpenModal(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // 조회수 업데이트

    console.log(window.location.pathname.split("/").pop());

    getDocument("Campain", window.location.pathname.split("/").pop()).then(
      (data) => {
        setCampain(data);
      }
    );

    getCollection("Campain").then((data) => {
      let tempList = [];
      data.forEach((doc) => {
        if (tempList.length < 4) {
          tempList.push({ ...doc, doc_id: doc.doc_id });
        }
      });
      setCampains(tempList);
    });
  }, []);

  useEffect(() => {
    if (campain?.doc_id) {
      console.log(new Date().toISOString().slice(0, 10));
      updateDoc("Campain", campain?.doc_id, {
        ...campain,
        views: {
          ...campain.views,
          [new Date().toISOString().slice(0, 10)]: campain?.views[
            new Date().toISOString().slice(0, 10)
          ]
            ? campain?.views[new Date().toISOString().slice(0, 10)] + 1
            : 1,
        },
      });

      let userList = [];
      searchDoc("Tester", where("cid", "==", campain?.doc_id)).then((data) => {
        data.forEach((doc) => {
          console.log(doc);
          getDocument("User", doc.uid).then((user) => {
            userList.push({ ...user, ...doc });
            setUserList(userList);
          });
        });
      });
    }
  }, [campain]);

  const scrollLeft = () => {
    const element = document.getElementById("container");
    const currentScroll = element.scrollLeft;
    const targetScroll = currentScroll - 316;
    element.scrollTo({
      left: targetScroll,
      behavior: "smooth", // 스무스한 스크롤을 위한 옵션
    });
  };

  const scrollRight = () => {
    const element = document.getElementById("container");
    const currentScroll = element.scrollLeft;
    const targetScroll = currentScroll + 316;
    element.scrollTo({
      left: targetScroll,
      behavior: "smooth", // 스무스한 스크롤을 위한 옵션
    });
  };

  return (
    <Stack spacing={4}>
      <Container
        minW={"280px"}
        maxW={{ base: "container.sm", md: "full", lg: "container.xl" }}
        px={{ base: "4", sm: "8" }}
        py={{ base: "4", sm: "8" }}
      >
        <HStack
          alignItems={"start"}
          divider={<StackDivider display={{ base: "none", md: "block" }} />}
        >
          <Stack w={"full"}>
            {/* <Tag w={"fit-content"} size={{ base: "sm", md: "md" }}>
            {"#"}
            {location.pathname.split("/").pop()?.substring(0, 8)}
          </Tag> */}
            <HStack zIndex={999} spacing={0}>
              {campain?.mozip?.includes("0") && (
                <Center
                  w={{ base: "28px", md: "36px" }}
                  h={{ base: "28px", md: "36px" }}
                  // rounded={"full"}
                  // bgColor={"#f5f5f5"}
                  // border={"1px solid #d9d9d9"}
                >
                  <Image
                    src={require("../Assets/img/style14.png")}
                    w={{ base: "20px", md: "28px" }}
                  />
                </Center>
              )}
              {campain?.mozip?.includes("1") && (
                <Center
                  w={{ base: "28px", md: "36px" }}
                  h={{ base: "28px", md: "36px" }}
                  // rounded={"full"}
                  // bgColor={"#f5f5f5"}
                  // border={"1px solid #d9d9d9"}
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                    w={{ base: "16px", md: "22px" }}
                  />
                </Center>
              )}
              {campain?.mozip?.includes("2") && (
                <Center
                  w={{ base: "28px", md: "36px" }}
                  h={{ base: "28px", md: "36px" }}
                  // rounded={"full"}
                  // bgColor={"#f5f5f5"}
                  // border={"1px solid #d9d9d9"}
                >
                  <HiReceiptTax
                    color="orange"
                    size={"24px"}
                    // size={isMobile ? "18px" : "24px"}
                  />
                  {/* <FiShoppingBag color="orange" size={isMobile ? "18px" : "24px"} /> */}
                </Center>
              )}
              <Tag
                size={{ base: "sm", md: "md" }}
                colorScheme={
                  calculateDday(campain?.endDate) > 0 ? "red" : "blue"
                }
              >
                {calculateDday(campain?.endDate) > 0
                  ? calculateDday(campain?.endDate) + "일 남음"
                  : Math.abs(calculateDday(campain?.endDate)) + "일 지남"}
              </Tag>
            </HStack>

            <Text pb={2} fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
              {campain?.name}
            </Text>
            {/* <HStack>
            <Tag
              w={"fit-content"}
              size={{ base: "sm", md: "md" }}
              colorScheme={"teal"}
            >
              {campain?.type}
            </Tag>
            <Tag
              colorScheme={calculateDday(campain?.endDate) < 0 ? "gray" : "red"}
            >
              {calculateDday(campain?.endDate) < 0
                ? "신청마감"
                : `D-${calculateDday(campain?.endDate)}`}
            </Tag>
          </HStack> */}
            <Stack display={{ base: "flex", md: "none" }}>
              <Card>
                <CardBody>
                  <Stack>
                    <HStack spacing={"6"}>
                      <Text fontWeight={"bold"} whiteSpace={"nowrap"}>
                        모집기간
                      </Text>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        spacing={{ base: 0, sm: 2 }}
                      >
                        <Text>
                          {campain?.startDate} {"~"}
                        </Text>
                        <Text>{campain?.endDate}</Text>
                      </Stack>
                    </HStack>
                    <HStack spacing={"6"}>
                      <Text fontWeight={"bold"} whiteSpace={"nowrap"}>
                        발표기간
                      </Text>
                      <Text>{campain?.endDate}</Text>
                    </HStack>
                    <HStack spacing={"6"}>
                      <Text fontWeight={"bold"} whiteSpace={"nowrap"}>
                        리뷰기간
                      </Text>
                      <HStack>
                        <Text>체험 후 3일 이내 작성이 원칙</Text>
                        {/* <Text>{campain?.reviewStart}</Text>
                      <Text>{"~"}</Text>
                      <Text>{campain?.reviewEnd}</Text> */}
                      </HStack>
                    </HStack>
                  </Stack>
                </CardBody>
              </Card>
              <RegisterButton
                cid={campain?.doc_id}
                isDisabled={calculateDday(campain?.endDate) < 0}
                onSubmit={(data) =>
                  createDoc("Tester", {
                    ...data,
                    cid: window.location.pathname.split("/").pop(),
                    step: 0,
                  })
                }
              >
                {calculateDday(campain?.endDate) < 0
                  ? "신청이 마감되었습니다."
                  : campain?.type + " 체험 신청하기"}
              </RegisterButton>
            </Stack>

            <Box
              w={"full"}
              // h={300}
              // overflowX={"scroll"}
              display={{ base: "none", md: "block" }}
              position={"relative"}
            >
              <HStack spacing={4} className="scroll" id="container">
                {campain?.images?.map((value, index) => (
                  <Image
                    onClick={() =>
                      handleImageClick(
                        process.env.REACT_APP_STORAGE +
                          "/campain" +
                          "%2F" +
                          value +
                          "?alt=media"
                      )
                    }
                    key={index}
                    borderRadius={"xl"}
                    w={300}
                    aspectRatio={1}
                    src={
                      process.env.REACT_APP_STORAGE +
                      "/campain" +
                      "%2F" +
                      value +
                      "?alt=media"
                    }
                  />
                ))}
                <IconButton
                  position={"absolute"}
                  onClick={() => scrollLeft()}
                  top={"48%"}
                  left={-4}
                  variant={"ghost"}
                  color={"black"}
                  bgColor={"gray.100"}
                  borderRadius={"full"}
                  size={"sm"}
                  icon={<BiChevronLeft />}
                />
                <IconButton
                  position={"absolute"}
                  onClick={() => scrollRight()}
                  top={"48%"}
                  right={-6}
                  variant={"ghost"}
                  color={"black"}
                  bgColor={"gray.100"}
                  borderRadius={"full"}
                  size={"sm"}
                  icon={<BiChevronRight />}
                />
              </HStack>
            </Box>
            <Stack
              overflow={"hidden"}
              spacing={0}
              display={{ base: "block", md: "none" }}
            >
              {isOpen ? (
                <>
                  {campain?.images?.map((value, index) => (
                    <Image
                      src={
                        process.env.REACT_APP_STORAGE +
                        "/campain" +
                        "%2F" +
                        value +
                        "?alt=media"
                      }
                    />
                  ))}
                </>
              ) : (
                <>
                  <Image
                    src={
                      process.env.REACT_APP_STORAGE +
                      "/campain" +
                      "%2F" +
                      campain?.images?.[0] +
                      "?alt=media"
                    }
                  />
                </>
              )}
              <Button
                w={"full"}
                colorScheme="gray"
                variant="outline"
                onClick={() => onToggle(!isOpen)}
                rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
              >
                {isOpen ? "내용 접기" : "펼쳐보기"}
              </Button>
            </Stack>

            <Tabs>
              <TabList>
                <Tab>리뷰정보</Tab>
                <Tab>신청현황</Tab>
              </TabList>

              <TabPanels>
                <TabPanel p={0}>
                  <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple>
                    <AccordionItem>
                      <AccordionButton {...accordionButtonStyle}>
                        <Box as="span" flex="1" textAlign="left">
                          리뷰어 제공
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel {...accordionPanelStyle}>
                        <Stack>
                          <HStack spacing={1}>
                            <Text>총</Text>
                            <Text
                              style={{ color: "#3182CE", fontWeight: "bold" }}
                            >
                              {campain?.targetCnt}명
                            </Text>
                            <Text> 모집</Text>
                          </HStack>
                          <Stack spacing={1}>
                            {campain?.product?.split("\n").map((value) => (
                              <Text>- {value}</Text>
                            ))}
                          </Stack>
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton {...accordionButtonStyle}>
                        <HStack as="span" flex="1" textAlign="left">
                          <Text>필수 키워드</Text>
                        </HStack>

                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel {...accordionPanelStyle}>
                        <Wrap>
                          {campain?.keywords?.map((value) => (
                            <WrapItem>
                              <Tag>{value}</Tag>
                            </WrapItem>
                          ))}
                        </Wrap>
                        <Box
                          bgColor={"gray.50"}
                          p={3}
                          my={3}
                          borderRadius={"lg"}
                          borderColor={"gray.300"}
                          borderWidth={1}
                        >
                          <Text>
                            - 위의 키워드 중 <strong>제목, 본문, #태그</strong>
                            에 아래와 같이 키워드를 기재해주세요.
                          </Text>
                          <Box ml={3}>
                            <Text>
                              <strong>제목</strong>: 상품명키워드(필수)+이외
                              키워드 택1개
                            </Text>
                            <Text>
                              <strong>본문</strong>: 제목에서 선택한 키워드
                              택1개를 본문에 3회 이상 언급
                            </Text>
                            <Text>
                              <strong>#해시태그</strong>: 제시된 키워드 모두
                              기재해주세요.
                            </Text>
                          </Box>
                          <Text>
                            - 키워드가 지켜지지 않으면 수정요청이 있을 수
                            있어요.
                          </Text>
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton {...accordionButtonStyle}>
                        <Box as="span" flex="1" textAlign="left">
                          리뷰어 미션
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel {...accordionPanelStyle}>
                        {/* <HStack>
                        {campain?.mission?.map((value) => (
                          <Text pb={2}>{value}</Text>
                        ))}
                      </HStack> */}
                        <Text whiteSpace={"pre-wrap"}>
                          {campain?.mission_description}
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                    {/* <AccordionItem>
                  <AccordionButton {...accordionButtonStyle}>
                    <Box as="span" flex="1" textAlign="left">
                      추가 안내사항
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel {...accordionPanelStyle}>
                    <Text whiteSpace={"pre-line"}>{campain?.etc}</Text>
                  </AccordionPanel>
                </AccordionItem> */}
                  </Accordion>
                </TabPanel>
                <TabPanel>
                  <Stack
                    alignItems={"start"}
                    direction={{ base: "column", md: "row" }}
                  >
                    <Text
                      minW={"200px"}
                      fontWeight={"bold"}
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      신청자 목록
                    </Text>
                    <Stack w={"100%"} spacing={2}>
                      <Text
                        fontWeight={"bold"}
                        fontSize={{ base: "md", md: "lg" }}
                      >
                        총{" "}
                        <span style={{ color: "#F56565" }}>
                          {userList ? userList?.length : "0"}
                        </span>
                        명 / {campain?.targetCnt}명
                      </Text>
                      <Stack
                        border={"1px solid #d9d9d9"}
                        borderRadius={"lg"}
                        p={2}
                      >
                        <HStack
                          w={"100%"}
                          justifyContent={"space-between"}
                          p={2}
                        >
                          <Text fontWeight={"bold"} fontSize={"md"}>
                            신청자
                          </Text>
                          <Text fontWeight={"bold"} fontSize={"md"}>
                            신청날짜
                          </Text>
                        </HStack>
                        <Divider />

                        {userList?.map((value) => (
                          <HStack
                            w={"100%"}
                            key={value.doc_id}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                          >
                            <HStack>
                              <Avatar src={value.image} />
                              <Text>
                                {(value.nickname
                                  ? value.nickname
                                  : value.name
                                ).substring(0, 1) + "****"}
                              </Text>
                            </HStack>
                            <Text>{value.createdAt.split("T")[0]}</Text>
                          </HStack>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
          <Stack
            w={"334px"}
            minW={"334px"}
            display={{ base: "none", md: "block" }}
          >
            <Box w={"100%"} pointerEvents={"none"}>
              <Stack>
                <Calendar
                  formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
                  value={[
                    campain?.startDate
                      ? new Date(campain?.startDate)
                      : new Date(),
                    campain?.endDate ? new Date(campain?.endDate) : new Date(),
                  ]}
                  selectRange={true}
                  navigationLabel={null}
                  nextLabel={null}
                  prevLabel={null}
                  prev2Label={null}
                  next2Label={null}
                  showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
                  style={{
                    width: "100%",
                    marginX: "auto",
                    fontSize: "12px",
                  }}
                  calendarType="gregory"
                />
                <Stack>
                  <Card>
                    <CardBody>
                      <Stack>
                        <HStack spacing={"6"}>
                          <Text fontWeight={"bold"} whiteSpace={"nowrap"}>
                            모집기간
                          </Text>
                          <HStack>
                            <Text whiteSpace={"nowrap"}>
                              {campain?.startDate}
                            </Text>
                            <Text>{"~"}</Text>
                            <Text whiteSpace={"nowrap"}>
                              {campain?.endDate}
                            </Text>
                          </HStack>
                        </HStack>
                        <HStack spacing={"6"}>
                          <Text whiteSpace={"nowrap"} fontWeight={"bold"}>
                            발표기간
                          </Text>
                          <Text whiteSpace={"nowrap"}>{campain?.endDate}</Text>
                        </HStack>
                        <HStack spacing={"6"}>
                          <Text whiteSpace={"nowrap"} fontWeight={"bold"}>
                            리뷰기간
                          </Text>
                          <HStack>
                            <Text whiteSpace={"nowrap"}>
                              체험 후 3일 이내 작성이 원칙
                            </Text>
                            {/* <Text>{campain?.reviewStart}</Text>
                          <Text>{"~"}</Text>
                          <Text>{campain?.reviewEnd}</Text> */}
                          </HStack>
                        </HStack>
                      </Stack>
                    </CardBody>
                  </Card>
                </Stack>
              </Stack>
            </Box>

            <RegisterButton
              mt={4}
              cid={campain?.doc_id}
              isDisabled={calculateDday(campain?.endDate) < 0}
              onSubmit={(data) => {
                createDoc("Tester", {
                  ...data,
                  cid: window.location.pathname.split("/").pop(),
                  step: 0,
                });
              }}
            >
              {calculateDday(campain?.endDate) < 0
                ? "신청이 마감되었습니다."
                : campain?.type + " 체험 신청하기"}
            </RegisterButton>
          </Stack>
        </HStack>
      </Container>
      <Stack bgColor={"gray.100"} mb={8} py={{ base: "4", md: "8" }}>
        <Container>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight={"bold"}>
            연관 체험단
          </Text>
        </Container>
        <>
          {campains?.length > 0 && (
            <GridQuiteMinimalistic
              campains={campains}
              ordertype={props.ordertype}
            />
          )}
        </>
      </Stack>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ModalOverlay />
        <ModalCloseButton />
        <ModalContent
          minW={"lg"}
          maxH={"80vh"}
          borderRadius="2xl"
          overflow={"hidden"}
        >
          {/* <ModalHeader /> */}
          <ModalCloseButton bgColor={"gray.50"} />
          <ModalBody p={0}>
            {selectedImageUrl && (
              <Image
                src={selectedImageUrl}
                objectFit="cover"
                w="full"
                h="full"
                alt=""
              />
            )}
          </ModalBody>
          {/* <ModalFooter>
            <Button w={"full"} onClose={() => setOpenModal(false)}>
              이미지 닫기
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Stack>
  );
}

function RegisterButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [checked, setChecked] = useState([]);
  const [formData, setFormData] = useState({});
  const toast = useToast();
  const navigate = useNavigate();

  const [uid, setUid] = React.useState(null);
  const [cid, setCid] = React.useState(null);
  const [userTester, setUserTester] = React.useState(false);

  useEffect(() => {
    let id = window.location.pathname.split("/").pop();
    setCid(id);
    if (uid && id) {
      console.log("--------->", uid, id);
      multiQuery("Tester", uid, where("cid", "==", id)).then((data) => {
        setUserTester(data.length > 0 ? true : false);
      });
    }
  }, [uid, cid]);

  useEffect(() => {
    let uid;
    // 유저 정보를 가지고 옵니다.
    if (localStorage.getItem("naver_id")) {
      // 네이버 로그인인 경우
      setUid(localStorage.getItem("naver_id"));
    } else {
      // 간편 회원가입의 경우
      // uid = auth.currentUser?.uid;
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }
  }, []);

  const handleSubmit = () => {
    const ret = false;
    if (checked.length < 9) {
      toast({
        title: "",
        description: "약관에 모두 동의 해야합니다.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return ret;
    }
    if (!formData.name) {
      toast({
        title: "",
        description: "수령인을 입력해야합니다.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return ret;
    }

    if (!formData.zonecode || !formData.street) {
      toast({
        title: "",
        description: "주소를 입력해야합니다.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return ret;
    }

    if (!formData.address) {
      toast({
        title: "",
        description: "상세 주소를 입력해야합니다.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return ret;
    }

    if (!formData.phone) {
      toast({
        title: "",
        description: "휴대폰 번호를 입력해야합니다.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return ret;
    }

    return true;
  };
  return (
    <>
      <Button
        {...props}
        isDisabled={
          userTester
            ? // || props.children === "신청이 마감되었습니다."
              true
            : false
        }
        size={"xl"}
        w={"100%"}
        onClick={() => {
          console.log(userTester, uid);
          if (uid) {
            onOpen();
          } else {
            toast({
              title: "로그인",
              description: "신청을 위해서 로그인을 해야합니다.",
              status: "info",
              duration: 3000,
              isClosable: true,
              position: "top-right",
            });
            window.location.replace("/login");
          }
        }}
      >
        {userTester ? "이미 신청한 체험단입니다." : props.children}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "7xl" }}
      >
        <ModalOverlay />
        <ModalContent
          m={{ base: "0", md: "auto" }}
          bgColor={"gray.50"}
          borderRadius={"xl"}
          overflow={"hidden"}
        >
          <ModalHeader bgColor={"white"} textAlign={"center"}>
            체험단 신청하기
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            bgColor={"white"}
            my={{ base: "2", md: "4" }}
            py={{ base: "4", md: "8" }}
          >
            <Stack
              w={"full"}
              direction={{ base: "column", md: "row" }}
              justifyContent={"space-around"}
              spacing={{ base: "8", md: "0" }}
            >
              <Stack
                maxW={"xl"}
                spacing={"4"}
                w={{ base: "full", md: "50%" }}
                divider={<StackDivider />}
              >
                <Stack>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                    1. 이용약관 동의하기
                  </Text>

                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                    체험단 진행을 위한 약관을 신청과정에서 동의해주세요.
                  </Text>
                </Stack>

                <Stack spacing={"4"}>
                  <CheckboxGroup
                    size={"lg"}
                    value={checked}
                    colorScheme="cyan"
                    onChange={(value) => setChecked(value)}
                  >
                    <Checkbox value="0">
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        opacity={0.8}
                        fontWeight={checked.includes("0") ? "bold" : "normal"}
                      >
                        리뷰를 작성하신 후 최소 180일 이상 '전체공개'를 유지해
                        주셔야합니다.
                      </Text>
                    </Checkbox>
                    <Checkbox value="1">
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        opacity={0.8}
                        fontWeight={checked.includes("1") ? "bold" : "normal"}
                      >
                        가이드라인 및 필수 키워드 양식에 맞춰 작성해주셔야
                        합니다.
                        <Text color={"red.500"}>
                          (조건 충족이 안될 경우 수정 요청이 발생할 수
                          있습니다.)
                        </Text>
                      </Text>
                    </Checkbox>
                    <Checkbox value="2">
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        opacity={0.8}
                        fontWeight={checked.includes("2") ? "bold" : "normal"}
                      >
                        댕댕뷰 스폰서 배너를 꼭 삽입해주셔야 합니다.
                        <Text color={"red.500"}>(블로거만 해당)</Text>
                      </Text>
                    </Checkbox>
                    <Checkbox value="3">
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        opacity={0.8}
                        fontWeight={checked.includes("3") ? "bold" : "normal"}
                      >
                        작성해주신 리뷰 및 리뷰에 포함된 사진 동의 이미지는
                        댕댕뷰 및 광고주에 의해 활용될 수 있습니다.
                      </Text>
                    </Checkbox>
                    <Checkbox value="4">
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        opacity={0.8}
                        fontWeight={checked.includes("4") ? "bold" : "normal"}
                      >
                        초대자 확인 및 제품 배송을 위해 개인 정보 일부를 해당
                        업체에 제공하는 것에 동의합니다.
                      </Text>
                    </Checkbox>
                    <Checkbox value="5">
                      <Text
                        whiteSpace={"pre-line"}
                        fontSize={{ base: "sm", md: "md" }}
                        opacity={0.8}
                        fontWeight={checked.includes("5") ? "bold" : "normal"}
                      >
                        {
                          "제공받은 제품은 리뷰 용도로만 사용가능하며, 재판매 등은 절대 불가합니다.\n(※ 재판매 건 적발 시 제품가격 환불 및 캠페인 참여가 제한됩니다.)"
                        }
                      </Text>
                    </Checkbox>
                    <Checkbox value="6">
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        opacity={0.8}
                        fontWeight={checked.includes("6") ? "bold" : "normal"}
                      >
                        리뷰 등록기간 내 리뷰 미등록 시 서비스 이용료 및
                        제품가격에 대한 비용이 청구 됩니다.
                      </Text>
                    </Checkbox>
                    <Checkbox value="7">
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        opacity={0.8}
                        fontWeight={checked.includes("7") ? "bold" : "normal"}
                      >
                        선정 이후에는 옵션 및 배송지 변경이 어려우니,
                        신청단계에서 한번 더 확인해 주세요.
                      </Text>
                    </Checkbox>
                    <Checkbox value="8">
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        opacity={0.8}
                        fontWeight={checked.includes("8") ? "bold" : "normal"}
                      >
                        과거 신청 내역을 바탕으로 매장 및 제품/서비스 추천
                        홍보(광고) 메일링 서비스를 제공해드립니다.
                      </Text>
                    </Checkbox>
                  </CheckboxGroup>
                </Stack>

                <Checkbox
                  size={"lg"}
                  isChecked={checked.length === 9}
                  onChange={(value) => {
                    if (value.target.checked)
                      setChecked(["0", "1", "2", "3", "4", "5", "6", "7", "8"]);
                    else setChecked([]);
                  }}
                >
                  모두 동의합니다.
                </Checkbox>
              </Stack>
              <Stack
                maxW={"xl"}
                w={{ base: "full", md: "50%" }}
                spacing={{ base: "4", md: "6" }}
              >
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                  2. 필수 작성 요소
                </Text>

                <Stack>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                    수령인(실명)
                  </Text>
                  <Input
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    w={"full"}
                    size={"xl"}
                    placeholder="수령인"
                  />
                </Stack>

                <Stack>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                    배송지 등록
                  </Text>
                  <AddressInput
                    onChange={(address) => {
                      console.log(address);
                      setFormData({
                        ...formData,
                        ...{
                          zonecode: address.zonecode,
                          street: address.street,
                          address: address.address,
                        },
                      });
                    }}
                    size={"xl"}
                  />
                  <Text color={"red.500"} fontSize={"sm"}>
                    *배송지 정보 오기입으로 인해 발생한 피해는 신청자 부담이오니
                    꼭 정확하게 입력해주세요.
                  </Text>
                </Stack>

                <Stack>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                    휴대폰 번호(번호만 입력)
                  </Text>
                  <Input
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    w={"full"}
                    size={"xl"}
                    placeholder="핸드폰 번호"
                  />
                  <Text color={"red.500"} fontSize={"sm"}>
                    *잘못된 핸드폰 번호가 입력되었을 시 초대권을 받지 못합니다.
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </ModalBody>

          <ModalFooter bgColor={"white"} justifyContent={"center"}>
            <Stack flexDirection={{ base: "column", md: "row" }} gap={"2"}>
              <Button
                w={{ base: "full", md: "auto" }}
                boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                bgColor={"rgba(22, 176, 112, 1)"}
                _hover={{ bgColor: "rgba(22, 176, 112, 0.8)" }}
                color={"white"}
                leftIcon={<Naver />}
                size={"xl"}
                onClick={() => {
                  if (handleSubmit()) {
                    if (
                      window.confirm("네이버 블로그 체험단을 신청하시겠습니까?")
                    ) {
                      props.onSubmit({
                        ...formData,
                        uid: uid,
                        mozip_type: "naver",
                      });
                      onClose();
                    } else {
                      return;
                    }
                  }
                }}
              >
                네이버 블로그 체험단 신청하기
              </Button>
              <Button
                w={{ base: "full", md: "auto" }}
                boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                _hover={{ bgColor: "gray.50" }}
                bgColor={"white"}
                color={"black"}
                m={0}
                leftIcon={<BsInstagram />}
                size={"xl"}
                onClick={() => {
                  if (handleSubmit()) {
                    if (
                      window.confirm("인스타그램 체험단을 신청하시겠습니까?")
                    ) {
                      props.onSubmit({
                        ...formData,
                        uid: uid,
                        mozip_type: "instagram",
                      });
                      onClose();
                    } else {
                      return;
                    }
                  }
                }}
              >
                인스타그램 체험단 신청하기
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export const accordionButtonStyle = {
  // borderTopColor: "gray.500",
  // borderTopWidth: 2,
  fontSize: "lg",
  fontWeight: "bold",
  bgColor: "gray.50",
};

export const accordionPanelStyle = {
  py: { base: "4", md: "8" },
};

export default Detail;

export const Naver = (props) => (
  <chakra.svg
    color="accent"
    height="8"
    width="auto"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6817 4.5V12.1271L9.31831 4.5H3.5625V19.5H9.31831V12L14.6817 19.5H20.4375V4.5H14.6817Z"
        fill="white"
      />
    </svg>
  </chakra.svg>
);

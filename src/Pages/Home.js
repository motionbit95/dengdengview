import React, { useEffect, useRef, useState } from "react";
import Campain from "./Campain";
import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Circle,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Tabs1 } from "../Application/Tabs/Tabs1";
import BlogCrawler from "../Component/BlogCrawler";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IoWarning } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { StepsWithAccent } from "../Component/Stepbar";

function Home(props) {
  const navigate = useNavigate();
  const [tab, setTab] = useState(
    localStorage.getItem("top_menu")
    // ? localStorage.getItem("top_menu")
    // : props.tab
  );
  const { keyword } = props;
  const isMobile = useBreakpointValue({ base: true, md: false });

  // useEffect(() => {
  //   console.log("필터링해줘!! " + props.tab);
  //   console.log(keyword);
  // }, [keyword]);

  const [popupOpen, setPopupOpen] = useState(false);
  const [type, setType] = useState(0);

  const handleClick = (order) => {
    window.location.replace("/view?order=" + order);
  };
  return (
    <Stack>
      {useBreakpointValue({ base: true, md: false }) && (
        <Tabs1
          onChange={(value) => {
            console.log(value);
            window.location.replace("/");
            // setTab(value.toString());
          }}
        />
      )}
      <Box py={{ base: "4", md: "8" }}>
        {/* <Carousel
          duration={2000}
          showArrows={true}
          centerMode={true}
          centerSlidePercentage={isMobile ? 100 : 40}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          showIndicators={false}
          infiniteLoop={true}
        >
          <Image
            px={{ base: "8", md: "4" }}
            src={require("../Assets/img/banner_mokup.png")}
          />
          <Image
            px={{ base: "8", md: "4" }}
            src={require("../Assets/img/banner_mokup.png")}
          />
          <Image
            px={{ base: "8", md: "4" }}
            src={require("../Assets/img/banner_mokup.png")}
          />
        </Carousel> */}
        {props.tab === "0" && (
          <Container>
            <Flex w={"full"} gap={4}>
              <Stack
                w={"100%"}
                cursor={"pointer"}
                direction={{ base: "column", md: "row" }}
                borderRadius={"xl"}
                bgColor={"#FFD60A"}
                p={{ base: 4, md: 8 }}
                align={"center"}
                justify={"space-between"}
                onClick={() => {
                  setPopupOpen(true);
                  setType("0");
                }}
              >
                <Stack spacing={6}>
                  <Text
                    fontFamily={"Cafe24Ssurround"}
                    fontSize={"calc(0.5em + 1vw)"}
                    fontWeight={"md"}
                  >
                    댕댕뷰가 처음이신가요?
                  </Text>
                  <Text
                    fontSize={{
                      base: "calc(0.8em + 0.8vw)",
                      lg: "calc(1.2em + 1.2vw)",
                    }}
                    fontWeight={"extrabold"}
                    fontFamily={"Cafe24Ssurround"}
                  >
                    신규 회원 가이드
                    <br />
                    보러가기
                  </Text>
                </Stack>
                <Box w={{ base: "50%", md: "40%" }}>
                  <Image src={require("../Assets/img/bannerImage1.png")} />
                </Box>
              </Stack>
              <Stack
                w={"100%"}
                cursor={"pointer"}
                direction={{ base: "column", md: "row" }}
                borderRadius={"xl"}
                bgColor={"#BF5AF2"}
                p={{ base: 4, md: 8 }}
                color={"white"}
                align={"center"}
                justify={"space-between"}
                onClick={() => {
                  setPopupOpen(true);
                  setType("1");
                }}
              >
                <Stack spacing={{ base: 3, md: 6 }}>
                  <Text
                    fontFamily={"Cafe24Ssurround"}
                    fontSize={"calc(0.5em + 1vw)"}
                    fontWeight={"md"}
                  >
                    체험을 완료하셨나요?
                  </Text>
                  <Text
                    fontSize={{
                      base: "calc(0.8em + 0.8vw)",
                      lg: "calc(1.4em + 1.2vw)",
                    }}
                    fontWeight={"extrabold"}
                    fontFamily={"Cafe24Ssurround"}
                  >
                    리뷰 등록 방법
                    <br />
                    보러가기
                  </Text>
                </Stack>
                <Box w={{ base: "50%", md: "40%" }}>
                  <Image src={require("../Assets/img/bannerImage2.png")} />
                </Box>
              </Stack>
            </Flex>
          </Container>
        )}
      </Box>
      <Box>
        <Container>
          <HStack py={4} justifyContent={"space-between"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              진행중인 체험단
            </Text>
            <Text
              cursor={"pointer"}
              fontSize={"md"}
              fontWeight={"bold"}
              onClick={() => handleClick("진행중인 체험단")}
            >
              더보기
            </Text>
          </HStack>
        </Container>
        <Campain tab={props.tab} keyword={keyword} ordertype={0} />
      </Box>
      <Box>
        <Container>
          <HStack py={4} justifyContent={"space-between"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              인기 체험단
            </Text>
            <Text
              cursor={"pointer"}
              fontSize={"md"}
              fontWeight={"bold"}
              onClick={() => handleClick("인기 체험단")}
            >
              더보기
            </Text>
          </HStack>
        </Container>
        <Campain tab={props.tab} keyword={keyword} ordertype={1} />
      </Box>
      <Box>
        <Container>
          <HStack py={4} justifyContent={"space-between"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              마감임박 체험단
            </Text>
            <Text
              cursor={"pointer"}
              fontSize={"md"}
              fontWeight={"bold"}
              onClick={() => handleClick("마감임박 체험단")}
            >
              더보기
            </Text>
          </HStack>
        </Container>
        <Campain tab={props.tab} keyword={keyword} ordertype={2} />
      </Box>
      <Box>
        <Container>
          <HStack py={4} justifyContent={"space-between"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              신규 체험단
            </Text>
            <Text
              cursor={"pointer"}
              fontSize={"md"}
              fontWeight={"bold"}
              onClick={() => handleClick("신규 체험단")}
            >
              더보기
            </Text>
          </HStack>
        </Container>
        <Campain tab={props.tab} keyword={keyword} ordertype={3} />
      </Box>

      <Box
        bgColor={"rgba(11, 197, 234, 1)"}
        mb={8}
        cursor={"pointer"}
        onClick={() => (window.location.href = "/ads")}
      >
        <Container>
          <HStack
            justify={"space-between"}
            align={"center"}
            py={{ base: "8", md: "12" }}
            position={"relative"}
          >
            <Stack
              color={"white"}
              // py={{ base: "16", lg: "0" }}
            >
              <Text fontSize={{ base: "xl", lg: "2xl" }}>광고주이신가요?</Text>
              <Text
                fontSize={{ base: "4xl", lg: "5xl" }}
                whiteSpace={{ base: "pre-line", md: "nowrap" }}
              >
                {`광고 제휴 
                문의 바로가기`}
              </Text>
            </Stack>
            <Box
              position={"absolute"}
              bottom={0}
              right={0}
              w={"50%"}
              display={{ base: "none", md: "flex" }}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Image
                w={{ base: "50%", md: "60%" }}
                src={require("../Assets/img/bottomBannerImage.png")}
              />
            </Box>
          </HStack>
        </Container>
      </Box>
      <PopupModal
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        type={type}
      />
    </Stack>
  );
}

const PopupModal = (props) => {
  const type = props.type;

  const [step, setStep] = useState(1);
  useEffect(() => {
    if (props.isOpen) {
      setStep(1);
    }
  }, [props.isOpen]);

  const handlePrevStep = () => {
    setStep(step - 1);
    console.log("이전스텝으로 이동!", step - 1);
    handleButtonClick();
  };
  const handleNextStep = () => {
    setStep(step + 1);
    console.log("다음스텝으로 이동!", step + 1);
    handleButtonClick();
  };

  const modalContentRef = useRef();

  const handleButtonClick = () => {
    // 버튼이 클릭될 때 모달 컨텐츠의 상단으로 스크롤 이동
    modalContentRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const guideContents2 = [
    {
      id: 1,
      title: "캠페인의 리뷰를 등록해주세요.",
      discription:
        "마이페이지 -> 나의 캠페인 -> 선정된 캠페인에서 캠페인을 진행상태를 사용완료로 변경해주시고, 리뷰 등록을 해주시면됩니다.",

      guideImage: require("../Assets/guide/review1.png"),
    },
    {
      id: 2,
      title: "링크를 공유하세요!",
      discription:
        "본인의 블로그에 게시한 URL을 추가하기 위해 아래의 진행방법을 통해 링크를 불러와주세요.",
      guideImage: require("../Assets/guide/review2.png"),
    },
    {
      id: 3,
      title: "블로그에서 링크 추가 버튼 찾기",
      discription: "블로그 글쓰기 화면에서 링크추가 버튼을 눌러주세요.",
      guideImage: require("../Assets/guide/review3.png"),
    },
    {
      id: 4,
      title: "복사된 스폰서링크 코드를 붙여넣기",
      discription: "복사된 스폰서 배너 코드를 링크에 붙이면배너가 생성됩니다.",
      guideImage: require("../Assets/guide/review4.png"),
    },
  ];
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
      size={{ base: "full", md: "5xl" }}
      // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
      // blockScrollOnMount={false}
      // trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent borderRadius="2xl" h={"80vh"} overflowY={"auto"}>
        <ModalHeader
          ref={modalContentRef}
          px={{ base: 8, md: 16 }}
          py={8}
          fontSize={"2xl"}
          fontWeight={"bold"}
        >
          {type === "0" ? "신규회원 가이드" : "쉽게하는 리뷰 등록 방법"}
        </ModalHeader>
        <ModalCloseButton size="lg" />
        {/* <Step */}

        <ModalBody px={{ base: 8, md: 16 }}>
          {type === "0" ? (
            <Stack>
              <StepsWithAccent currentStep={step} />
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              {step === 4 && <Step4 />}
              <ButtonGroup justifyContent={"center"} mb={8}>
                {step === 1 ? null : (
                  <Button
                    w={{ base: "50%", md: "20%" }}
                    onClick={handlePrevStep}
                    bgColor={"white"}
                    color={"gray.600"}
                    boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                  >
                    이전단계
                  </Button>
                )}
                {step === 4 ? (
                  <Button
                    w={{ base: "50%", md: "20%" }}
                    onClick={props.onClose}
                    boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                  >
                    완료
                  </Button>
                ) : (
                  <Button
                    w={{ base: "50%", md: "20%" }}
                    onClick={handleNextStep}
                    boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                  >
                    다음단계
                  </Button>
                )}
              </ButtonGroup>
            </Stack>
          ) : (
            <Stack>
              <Stack divider={<StackDivider />}>
                {guideContents2.map((content2) => (
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    justify={"space-between"}
                    key={content2.id}
                    py={12}
                    gap={6}
                  >
                    <Flex
                      align={"start"}
                      gap={3}
                      w={{ base: "100%", md: "50%" }}
                    >
                      <Stack>
                        <Text
                          fontSize={{ base: "xl", md: "2xl" }}
                          fontWeight={"bold"}
                          textDecoration={"underline"}
                          sx={{
                            textDecorationThickness: "10px",
                            textDecorationColor: "rgba(151, 211, 210, 0.7)", // 밑줄 색상 설정
                            textUnderlineOffset: "-4px",
                          }}
                        >
                          {content2.title}
                        </Text>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          color={"#57636C"}
                        >
                          {content2.discription}
                        </Text>
                      </Stack>
                    </Flex>
                    <Box
                      w={{ base: "100%", md: "50%" }}
                      // border={"1px solid #d9d9d9"}
                      p={2}
                      borderRadius={"xl"}
                      overflow={"hidden"}
                      shadow={"2xl"}
                    >
                      <Image src={content2.guideImage} />
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Home;

const Step1 = () => {
  return (
    <Stack divider={<StackDivider />}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        py={12}
        gap={6}
      >
        <Flex align={"start"} gap={3} w={{ base: "100%", md: "50%" }}>
          <Stack>
            <Box>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight={"bold"}
                textDecoration={"underline"}
                sx={{
                  textDecorationThickness: "10px",
                  textDecorationColor: "rgba(151, 211, 210, 0.7)", // 밑줄 색상 설정
                  textUnderlineOffset: "-4px",
                }}
              >
                회원가입
              </Text>
            </Box>
            <Text fontSize={{ base: "xs", md: "sm" }} color={"#57636C"}>
              댕댕뷰 회원가입 후, 이메일 혹은 네이버 아이디로 간편하게
              로그인해주세요!
            </Text>
          </Stack>
        </Flex>
        <Box
          w={{ base: "100%", md: "50%" }}
          // border={"1px solid #d9d9d9"}
          borderRadius={"xl"}
          p={2}
          overflow={"hidden"}
          shadow={"2xl"}
        >
          <Image src={require("../Assets/guide/guide1-1.png")} />
        </Box>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        py={12}
        gap={6}
      >
        <Flex align={"start"} gap={3} w={{ base: "100%", md: "50%" }}>
          <Stack>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={"bold"}
              textDecoration={"underline"}
              sx={{
                textDecorationThickness: "10px",
                textDecorationColor: "rgba(151, 211, 210, 0.7)", // 밑줄 색상 설정
                textUnderlineOffset: "-4px",
              }}
            >
              내정보 입력하기
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color={"#57636C"}>
              {`마이페이지 -> 내정보 수정 -> 기본정보 수정에서 회원
      정보를 입력해주세요!`}
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color={"#57636C"}>
              {`성별, 출생연도, 전화번호, 주소 SNS 주소 및 인플루언서 등록, 마케팅 수신 동의가 작성이 안되어있을 시 캠페인 신청이 불가할 수 있어요!`}
            </Text>
          </Stack>
        </Flex>
        <Box
          w={{ base: "100%", md: "50%" }}
          // border={"1px solid #d9d9d9"}
          borderRadius={"xl"}
          p={2}
          overflow={"hidden"}
          shadow={"2xl"}
        >
          <Image src={require("../Assets/guide/guide1-2.png")} />
        </Box>
      </Stack>
    </Stack>
  );
};

const Step2 = () => {
  return (
    <Stack divider={<StackDivider />}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        py={12}
        gap={6}
      >
        <Flex align={"start"} gap={3} w={{ base: "100%", md: "50%" }}>
          <Stack>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={"bold"}
              textDecoration={"underline"}
              sx={{
                textDecorationThickness: "10px",
                textDecorationColor: "rgba(151, 211, 210, 0.7)", // 밑줄 색상 설정
                textUnderlineOffset: "-4px",
              }}
            >
              캠페인을 선택하세요!
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color={"#57636C"}>
              블로그,인스타,구매평,인플루언서 페이지에서 원하는 캠페인을 확인후
              신청해주세요
            </Text>
          </Stack>
        </Flex>
        <Box
          w={{ base: "100%", md: "50%" }}
          // border={"1px solid #d9d9d9"}
          borderRadius={"xl"}
          p={2}
          overflow={"hidden"}
          shadow={"2xl"}
        >
          <Image src={require("../Assets/guide/guide2-1.png")} />
        </Box>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        py={12}
        gap={6}
      >
        <Flex align={"start"} gap={3} w={{ base: "100%", md: "50%" }}>
          <Stack>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={"bold"}
              textDecoration={"underline"}
              sx={{
                textDecorationThickness: "10px",
                textDecorationColor: "rgba(151, 211, 210, 0.7)", // 밑줄 색상 설정
                textUnderlineOffset: "-4px",
              }}
            >
              캠페인을 신청하세요!
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color={"#57636C"}>
              {`원하는 캠페인을 클릭해 필수키워드,캠페인 미션, 추가 안내사항을 필독해주시고 고지되어 있는 기간을 고려해 캠페인을 신청해주세요!`}
            </Text>
          </Stack>
        </Flex>
        <Box
          w={{ base: "100%", md: "50%" }}
          // border={"1px solid #d9d9d9"}
          borderRadius={"xl"}
          p={2}
          overflow={"hidden"}
          shadow={"2xl"}
        >
          <Image src={require("../Assets/guide/guide2-2.png")} />
        </Box>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        py={12}
        gap={6}
      >
        <Flex align={"start"} gap={3} w={{ base: "100%", md: "50%" }}>
          <Stack>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={"bold"}
              textDecoration={"underline"}
              sx={{
                textDecorationThickness: "10px",
                textDecorationColor: "rgba(151, 211, 210, 0.7)", // 밑줄 색상 설정
                textUnderlineOffset: "-4px",
              }}
            >
              캠페인 신청 확인
            </Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              color={"#57636C"}
              whiteSpace={"pre-line"}
            >
              {`마이페이지 - 나의 체험단 에서 신청한 캠페인을 확인!
          * 체험이 어려우실 경우엔 발표일전에 꼭 취소버튼을 클릭 해주세요!`}
            </Text>
          </Stack>
        </Flex>
        <Box
          w={{ base: "100%", md: "50%" }}
          // border={"1px solid #d9d9d9"}
          borderRadius={"xl"}
          p={2}
          overflow={"hidden"}
          shadow={"2xl"}
        >
          <Image src={require("../Assets/guide/guide2-3.png")} />
        </Box>
      </Stack>
    </Stack>
  );
};

const Step3 = () => {
  return (
    <Stack divider={<StackDivider />}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        py={12}
        gap={6}
      >
        <Flex align={"start"} gap={3} w={{ base: "100%", md: "50%" }}>
          <Stack>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={"bold"}
              textDecoration={"underline"}
              sx={{
                textDecorationThickness: "10px",
                textDecorationColor: "rgba(151, 211, 210, 0.7)", // 밑줄 색상 설정
                textUnderlineOffset: "-4px",
              }}
            >
              캠페인에 선정되었어요!
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color={"#57636C"}>
              캠페인에 당첨되면 댕댕뷰에서 카카오톡 으로 알림톡이 발송됩니다.
            </Text>
          </Stack>
        </Flex>
        <Box
          w={{ base: "100%", md: "50%" }}
          // border={"1px solid #d9d9d9"}
          borderRadius={"xl"}
          overflow={"hidden"}
          shadow={"2xl"}
          p={2}
        >
          {/* <Image src={require("../Assets/guide/guide2-3.png")} /> */}
          <Box h={"300px"} />
        </Box>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        py={12}
        gap={6}
      >
        <Flex align={"start"} gap={3} w={{ base: "100%", md: "50%" }}>
          <Stack>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={"bold"}
              textDecoration={"underline"}
              sx={{
                textDecorationThickness: "10px",
                textDecorationColor: "rgba(151, 211, 210, 0.7)", // 밑줄 색상 설정
                textUnderlineOffset: "-4px",
              }}
            >
              선정된 캠페인 확인
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color={"#57636C"}>
              {`마이페이지-선정된캠페인에서 당첨된 캠페인을 확인하실 수 있습니다.`}
            </Text>
          </Stack>
        </Flex>
        <Box
          w={{ base: "100%", md: "50%" }}
          // border={"1px solid #d9d9d9"}
          borderRadius={"xl"}
          overflow={"hidden"}
          p={2}
          shadow={"2xl"}
        >
          <Image src={require("../Assets/guide/guide3-2.png")} />
        </Box>
      </Stack>
    </Stack>
  );
};

const Step4 = () => {
  return (
    <Stack divider={<StackDivider />}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        py={12}
        gap={6}
      >
        <Flex align={"start"} gap={3} w={{ base: "100%", md: "50%" }}>
          <Stack>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={"bold"}
              textDecoration={"underline"}
              sx={{
                textDecorationThickness: "10px",
                textDecorationColor: "rgba(151, 211, 210, 0.7)", // 밑줄 색상 설정
                textUnderlineOffset: "-4px",
              }}
            >
              콘텐츠를 작성해 주세요.
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color={"#57636C"}>
              콘텐츠 작성 후 캠페인 미션과 제목 필수키워드가 캠페인에서 안내된
              내용에 따라 잘 적용이 되었는지 한번 더 확인후 리뷰를 등록해주세요
            </Text>
          </Stack>
        </Flex>
        <Box
          w={{ base: "100%", md: "50%" }}
          // border={"1px solid #d9d9d9"}
          borderRadius={"xl"}
          p={2}
          overflow={"hidden"}
          shadow={"2xl"}
        >
          <Image src={require("../Assets/guide/review2.png")} />
        </Box>
      </Stack>
      <Stack py={12} spacing={6}>
        <Stack align={"start"}>
          <Flex
            borderRadius={1000}
            py={2}
            px={6}
            bgColor={"#FC3227"}
            color={"white"}
            align={"center"}
            justify={"center"}
            gap={4}
          >
            <Icon as={IoWarning} boxSize={6} />
            <Text fontSize={"sm"} fontWeight={"bold"}>
              댕댕뷰의 올바른 캠페인 진행을 위하여 아래 내용을 확인해 주세요.
            </Text>
          </Flex>
        </Stack>
        <Stack spacing={3}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            캠페인 취소
          </Text>
          <Stack fontSize={{ base: "xs", md: "sm" }} color={"#57636C"}>
            <Text>∙ 캠페인 신청하실때 신중하게 신청해 주세요.</Text>
            <Text>
              ∙ 리뷰 기간 중 캠페인 취소 시 패널티가 부과됩니다. (신청 기간중
              취소는 무관)
            </Text>
          </Stack>
        </Stack>
        <Stack spacing={3}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            기간 내 리뷰등록
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color={"#57636C"}>
            ∙ 기간내 리뷰를 등록하지 않은 회원에게는 패널티가 부과 됩니다. (다른
            캠페인 선정 시 불리하게 적용됩니다.)
          </Text>
        </Stack>
        <Stack spacing={3}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            체험 후 리뷰미등록
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color={"#57636C"}>
            ∙ 해당 상품의 상품 가격 환불 및 블랙리스트 회원으로 등록
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

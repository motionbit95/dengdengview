import React, { useEffect, useState } from "react";
import Campain from "./Campain";
import {
  AspectRatio,
  Box,
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

  const guideContents = [
    {
      id: 1,
      title: "댕댕뷰 회원가입",
      discription: "댕댕뷰 회원가입을 sns로 간편하게 해주세요.",
      guideImage: require("../Assets/bannerGuide/guide_campain01.png"),
    },
    {
      id: 2,
      title: "캠페인을 확인하고 신청하세요!",
      discription:
        "기본 정보와 신청 정보를 꼼꼼하게 입력해 주세요. 정보를 확인하고 입력해 주세요.",
      guideImage: require("../Assets/bannerGuide/guide_campain02.png"),
    },
    {
      id: 3,
      title: "캠페인에 선정되었어요!",
      discription:
        "캠페인의 인플루언서로 선정되었어요~! 선정된 캠페인의 상세페이지에서 캠페인 예약 방법과 체험 기간, 콘텐츠 등록 기간을 다시 한번 확인해서 일정을 놓치지 않도록 유의해 주세요.",
      tips: "마이페이지 > 나의 캠페인 > 선정된 캠페인",
      guideImage: require("../Assets/bannerGuide/guide_campain04.png"),
    },
    {
      id: 4,
      title: "선정된 캠페인을 체험해 주세요.",
      discription:
        "방문형 캠페인이라면 미리 가게와 연락을 하여 예약을 잡고 제공 내역을 체험해 주세요. 배송형 캠페인이라면 상품이 배송된 후, 상품을 체험해주세요. 꼼꼼한 사진과 함께 영상까지 찍는다면 금상첨화!",
    },
    {
      id: 5,
      title: "콘텐츠를 작성해 주세요.",
      discription:
        "캠페인에서 안내된 내용에 따라 캠페인 미션과 제목 키워드, 본문 키워드, 스폰서 배너를 반드시 확인해 주세요.",
      guideImage: require("../Assets/bannerGuide/guide_campain05.png"),
    },
  ];

  const guideContents2 = [
    {
      id: 1,
      title: "캠페인의 리뷰를 등록해주세요.",
      discription:
        "캠페인을 진행상태를 사용완료로 변경해주시고, 리뷰 등록을 해주시면됩니다.",
      tips: "마이페이지 > 나의 캠페인 > 선정된 캠페인",
      guideImage: require("../Assets/bannerGuide/guide_campain03.png"),
    },
    {
      id: 2,
      title: "링크를 공유하세요!",
      discription:
        "본인의 블로그에 게시한 URL을 추가하기 위해 아래의 진행방법을 통해 링크를 불러와주세요.",
      guideImage: require("../Assets/bannerGuide/guide_campain05.png"),
    },
    {
      id: 3,
      title: "블로그에서 링크 추가 버튼 찾기",
      discription: "블로그 글쓰기 화면에서 링크추가 버튼을 눌러주세요.",
      guideImage: require("../Assets/guide/g1.jpeg"),
    },
    {
      id: 4,
      title: "복사된 스폰서링크 코드를 붙여넣기",
      discription: "복사된 스폰서 배너 코드를 링크에 붙이면배너가 생성됩니다.",
      guideImage: require("../Assets/guide/g2.jpeg"),
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
        <ModalHeader px={16} py={8} fontSize={"2xl"}>
          {type === "0"
            ? "신규회원을 위한 댕댕뷰 가이드"
            : "쉽게하는 리뷰 등록 방법"}
        </ModalHeader>
        <ModalCloseButton size="lg" />
        <ModalBody px={16}>
          {type === "0" ? (
            <Stack>
              <Stack spacing={3}>
                <Text fontSize={"lg"} fontWeight={"bold"}>
                  캠페인 체험 방법
                </Text>
                <AspectRatio ratio={32 / 9}>
                  <Image src={require("../Assets/img/guide_banner01.jpg")} />
                </AspectRatio>
              </Stack>
              <Stack divider={<StackDivider />}>
                {guideContents.map((content) => (
                  <Flex
                    justify={"space-between"}
                    key={content.id}
                    py={12}
                    gap={6}
                  >
                    <Flex align={"start"} gap={3} w={"50%"}>
                      <Circle
                        w={8}
                        h={8}
                        bgColor={"#FF5C00"}
                        color={"white"}
                        alignContent={"center"}
                        justifyContent={"center"}
                      >
                        {content.id}
                      </Circle>
                      <Stack>
                        <Text fontSize={"md"} fontWeight={"bold"}>
                          {content.title}
                        </Text>
                        <Text fontSize={"sm"} color={"rgba(0, 0, 0, 0.7)"}>
                          {content.discription}
                        </Text>
                        {content.tips && (
                          <Text fontSize={"sm"} fontWeight={"semibold"}>
                            {content.tips}
                          </Text>
                        )}
                      </Stack>
                    </Flex>
                    <Box w={"50%"}>
                      <Image src={content.guideImage} />
                    </Box>
                  </Flex>
                ))}
                <Stack py={12} spacing={3}>
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
                      <Icon as={IoWarning} h={10} w={10} />
                      <Text fontSize={"lg"} fontWeight={"bold"}>
                        댕댕뷰의 올바른 캠페인 진행을 위하여 아래 내용을 확인해
                        주세요.
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack spacing={1} fontSize={"sm"}>
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      캠페인 취소
                    </Text>
                    <Text>∙ 캠페인 신청하실때 신중하게 신청해 주세요.</Text>
                    <Text>
                      ∙ 리뷰 기간 중 캠페인 취소 시 패널티가 부과됩니다. (신청
                      기간중 취소는 무관)
                    </Text>
                  </Stack>
                  <Stack spacing={1} fontSize={"sm"}>
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      기간 내 리뷰등록
                    </Text>
                    <Text>
                      ∙ 기간내 리뷰를 등록하지 않은 회원에게는 패널티가 부과
                      됩니다. (다른 캠페인 선정 시 불리하게 적용됩니다.)
                    </Text>
                  </Stack>
                  <Stack spacing={1} fontSize={"sm"}>
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      체험 후 리뷰미등록
                    </Text>
                    <Text>
                      ∙ 해당 상품의 상품 가격 환불 및 블랙리스트 회원으로 등록
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          ) : (
            <Stack>
              <Stack spacing={3}>
                <Text fontSize={"lg"} fontWeight={"bold"}>
                  리뷰 등록 방법
                </Text>
                <AspectRatio ratio={32 / 9}>
                  <Image src={require("../Assets/img/guide_banner01.jpg")} />
                </AspectRatio>
              </Stack>
              <Stack divider={<StackDivider />}>
                {guideContents2.map((content2) => (
                  <Flex
                    justify={"space-between"}
                    key={content2.id}
                    py={12}
                    gap={6}
                  >
                    <Flex align={"start"} gap={3} w={"50%"}>
                      <Circle
                        w={8}
                        h={8}
                        bgColor={"#FF5C00"}
                        color={"white"}
                        alignContent={"center"}
                        justifyContent={"center"}
                      >
                        {content2.id}
                      </Circle>
                      <Stack>
                        <Text fontSize={"md"} fontWeight={"bold"}>
                          {content2.title}
                        </Text>
                        <Text fontSize={"sm"} color={"rgba(0, 0, 0, 0.7)"}>
                          {content2.discription}
                        </Text>
                        {content2.tips && (
                          <Text fontSize={"sm"} fontWeight={"semibold"}>
                            {content2.tips}
                          </Text>
                        )}
                      </Stack>
                    </Flex>
                    <Box w={"50%"}>
                      <Image src={content2.guideImage} />
                    </Box>
                  </Flex>
                ))}
                {/* <Stack py={12} spacing={3}>
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
                      <Icon as={IoWarning} h={10} w={10} />
                      <Text fontSize={"lg"} fontWeight={"bold"}>
                        댕댕뷰의 올바른 캠페인 진행을 위하여 아래 내용을 확인해
                        주세요.
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack spacing={1} fontSize={"sm"}>
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      캠페인 취소
                    </Text>
                    <Text>∙ 캠페인 신청하실때 신중하게 신청해 주세요.</Text>
                    <Text>
                      ∙ 리뷰 기간 중 캠페인 취소 시 패널티가 부과됩니다. (신청
                      기간중 취소는 무관)
                    </Text>
                  </Stack>
                  <Stack spacing={1} fontSize={"sm"}>
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      기간 내 리뷰등록
                    </Text>
                    <Text>
                      ∙ 기간내 리뷰를 등록하지 않은 회원에게는 패널티가 부과
                      됩니다. (다른 캠페인 선정 시 불리하게 적용됩니다.)
                    </Text>
                  </Stack>
                  <Stack spacing={1} fontSize={"sm"}>
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      체험 후 리뷰미등록
                    </Text>
                    <Text>
                      ∙ 해당 상품의 상품 가격 환불 및 블랙리스트 회원으로 등록
                    </Text>
                  </Stack>
                </Stack> */}
              </Stack>
            </Stack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Home;

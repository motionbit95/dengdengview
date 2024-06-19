import {
  Box,
  Button,
  Card,
  Center,
  Circle,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  VStack,
  useColorModeValue as mode,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  BiBarChart,
  BiBuoy,
  BiCog,
  BiCommentAdd,
  BiCreditCard,
  BiEnvelope,
  BiHome,
  BiLink,
  BiLogOut,
  BiNews,
  BiNotification,
  BiPieChart,
  BiPurchaseTagAlt,
  BiRecycle,
  BiRedo,
  BiUserCheck,
  BiUserCircle,
  BiUserPlus,
  BiWallet,
} from "react-icons/bi";
import { AccountSwitcher } from "./AccountSwitcher";
import { NavGroup } from "./NavGroup";
import { NavItem } from "./NavItem";
import { HiUserAdd } from "react-icons/hi";
import { MdReviews } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { BsCommand, BsHandThumbsUp } from "react-icons/bs";
import { AiFillPicture } from "react-icons/ai";
import { adminLogout } from "../../../Firebase/Auth";
import { useEffect, useState } from "react";
import Dashboard from "../../../Component/MDashboard";
import User from "../../../Component/MUser";
import Campain from "../../../Component/MCampain";
import TesterUser from "../../../Component/TesterUser";
import TotalView from "../../../Component/TotalView";
import SelectUser from "../../../Component/SelectUser";
import Review from "../../../Component/MReview";
import ReviewDetail from "../../../Component/MReviewDetail";
import Picture from "../../../Component/MPicture";
import Search from "../../../Pages/Search";
import Keyword from "../../../Pages/Keyword";
import { Advertise } from "../../Tables/AdTable/App";
import RegisterSearch from "../../../Component/RegisterSearch";
import RegisterReview from "../../../Component/RegisterReview";
import { createDoc, getCollection } from "../../../Firebase/Database";
import { updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const ShellWithGroupedMenu = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [menu, setMenu] = useState(
    Number(localStorage.getItem("ad_menu")) || 11
  );

  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [cid, setCid] = useState<any>("");

  const [reviewCampain, setReviewCampain] = useState("");
  const [campains, setCampains] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getCollection("Campain").then((data: any) => {
      setCampains(data);
    });
  }, []);

  useEffect(() => {
    setCid(window.location.pathname.split("/").pop());
  }, [menu]);

  const handleSubmit = async () => {
    if (window.confirm("리뷰를 등록하시겠습니까?")) {
      // fetch를 사용하여 POST 요청을 보냅니다.
      fetch(process.env.REACT_APP_SERVER_URL + "/crawl", {
        method: "POST", // 요청 메서드를 POST로 지정합니다.
        headers: {
          "Content-Type": "application/json", // 요청 헤더에 Content-Type을 JSON으로 지정합니다.
        },
        body: JSON.stringify({ url: url }), // 요청 본문에 데이터를 JSON 문자열로 변환하여 넣습니다.
      })
        .then((response) => {
          // 서버에서 응답을 받으면 JSON 형식으로 파싱합니다.
          return response.json();
        })
        .then((data) => {
          // 파싱된 응답 데이터를 이용하여 처리합니다.
          console.log("서버로부터 받은 데이터:", data);

          // 데이터를 저장합니다.
          createDoc("Review", {
            ...data,
            url: url,
            uid: "",
            cid: cid,
            name: name,
          });

          if (data.code === "error") {
            console.log("error");
          }
        })
        .catch((error) => {
          // 오류가 발생하면 오류를 콘솔에 출력합니다.
          console.error("데이터를 보내는 동안 오류 발생:", error);
        });
    }
  };

  return (
    <Box height="100vh" minW={"3xl"} overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box w="64" bg="gray.900" color="white" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <Stack spacing="8" flex="1" overflow="auto" mb={4}>
              {localStorage.getItem("dang_admin_id") &&
                window.location.pathname.includes("/admin/dashboard") && (
                  <NavGroup label="기본관리">
                    {/* <NavItem
                    active={
                      menu === 0 || localStorage.getItem("ad_menu") === "0"
                    }
                    icon={<BiHome />}
                    label="대시보드"
                    onClick={() => {
                      setMenu(0);
                      localStorage.setItem("ad_menu", "0");
                    }}
                  /> */}
                    <NavItem
                      active={
                        menu === 1 || localStorage.getItem("ad_menu") === "1"
                      }
                      icon={<BiCommentAdd />}
                      label="광고문의"
                      onClick={() => {
                        setMenu(1);
                        localStorage.setItem("ad_menu", "1");
                      }}
                    />
                    <NavItem
                      active={
                        menu === 2 || localStorage.getItem("ad_menu") === "2"
                      }
                      icon={<BiUserCircle />}
                      label="회원관리"
                      onClick={() => {
                        setMenu(2);
                        localStorage.setItem("ad_menu", "2");
                      }}
                    />
                    <NavItem
                      active={
                        menu === 3 || localStorage.getItem("ad_menu") === "3"
                      }
                      icon={<BiCreditCard />}
                      label="체험단관리"
                      onClick={() => {
                        setMenu(3);
                        localStorage.setItem("ad_menu", "3");
                      }}
                    />
                    {/* <NavItem
                  active={menu === 4 || localStorage.getItem("ad_menu") === "4"}
                  icon={<BiNotification />}
                  label="공지관리"
                  onClick={() => {
                    setMenu(4);
                    localStorage.setItem("ad_menu", "4");
                  }}
                /> */}
                    <NavItem
                      active={
                        menu === 7 || localStorage.getItem("ad_menu") === "7"
                      }
                      icon={<BsCommand />}
                      label="[크롤링] 네이버블로그 리뷰"
                      onClick={() => {
                        setMenu(7);
                        localStorage.setItem("ad_menu", "7");
                      }}
                    />
                    <NavItem
                      active={
                        menu === 6 || localStorage.getItem("ad_menu") === "6"
                      }
                      icon={<BsCommand />}
                      label="[수동] 리뷰등록"
                      onClick={() => {
                        setMenu(6);
                        localStorage.setItem("ad_menu", "6");
                      }}
                    />
                    <NavItem
                      active={
                        menu === 5 || localStorage.getItem("ad_menu") === "5"
                      }
                      icon={<BiBarChart />}
                      label="[수동] 검색점유율 등록"
                      onClick={() => {
                        setMenu(5);
                        localStorage.setItem("ad_menu", "5");
                      }}
                    />
                  </NavGroup>
                )}

              <NavGroup label="광고주관리">
                <NavItem
                  active={
                    menu === 11 || localStorage.getItem("ad_menu") === "11"
                  }
                  icon={<BiNews />}
                  label="종합상세보기"
                  onClick={() => {
                    setMenu(11);
                    localStorage.setItem("ad_menu", "11");
                  }}
                />
                <NavItem
                  active={
                    menu === 12 || localStorage.getItem("ad_menu") === "12"
                  }
                  icon={<BiUserPlus />}
                  label="신청자현황"
                  onClick={() => {
                    setMenu(12);
                    localStorage.setItem("ad_menu", "12");
                  }}
                />
                <NavItem
                  active={
                    menu === 13 || localStorage.getItem("ad_menu") === "13"
                  }
                  icon={<BiUserCheck />}
                  label="선정자현황"
                  onClick={() => {
                    setMenu(13);
                    localStorage.setItem("ad_menu", "13");
                  }}
                />
                <NavItem
                  active={
                    menu === 14 || localStorage.getItem("ad_menu") === "14"
                  }
                  icon={<BsCommand />}
                  label="리뷰모아보기"
                  onClick={() => {
                    setMenu(14);
                    localStorage.setItem("ad_menu", "14");
                  }}
                />
                <NavItem
                  active={
                    menu === 15 || localStorage.getItem("ad_menu") === "15"
                  }
                  icon={<BsHandThumbsUp />}
                  label="리뷰분석"
                  onClick={() => {
                    setMenu(15);
                    localStorage.setItem("ad_menu", "15");
                  }}
                />
                <NavItem
                  active={
                    menu === 16 || localStorage.getItem("ad_menu") === "16"
                  }
                  icon={<AiFillPicture />}
                  label="사진모아보기"
                  onClick={() => {
                    setMenu(16);
                    localStorage.setItem("ad_menu", "16");
                  }}
                />
                <NavItem
                  active={
                    menu === 17 || localStorage.getItem("ad_menu") === "17"
                  }
                  icon={<BiBarChart />}
                  label="검색점유율"
                  onClick={() => {
                    setMenu(17);
                    localStorage.setItem("ad_menu", "17");
                  }}
                />
                <NavItem
                  active={
                    menu === 18 || localStorage.getItem("ad_menu") === "18"
                  }
                  icon={<BiPieChart />}
                  label="유입키워드"
                  onClick={() => {
                    setMenu(18);
                    localStorage.setItem("ad_menu", "18");
                  }}
                />
                <NavItem
                  active={
                    menu === 19 || localStorage.getItem("ad_menu") === "19"
                  }
                  icon={<BiLink />}
                  label="모집글보기"
                  onClick={() => {
                    let cid = window.location.pathname.split("/").pop();
                    window.location.replace("/campain/" + cid);
                  }}
                />
              </NavGroup>
            </Stack>
            {/* <Box>
              <Stack spacing="1">
                <NavItem subtle icon={<BiCog />} label="설정" />
                <NavItem
                  subtle
                  icon={<BiBuoy />}
                  label="도움말 & 지원"
                  // endElement={<Circle size="2" bg="blue.400" />}
                />
                <NavItem
                  subtle
                  icon={<BiLogOut />}
                  label="로그아웃"
                  onClick={adminLogout}
                />
              </Stack>
            </Box> */}
          </Flex>
        </Box>

        <Box
          bg={mode("white", "gray.800")}
          flex="1"
          minW={"sm"}
          p={{ base: "4", lg: "6" }}
        >
          <Box
            w="full"
            h="full"
            overflow={"auto"}
            rounded="lg"
            // border="3px dashed"
            borderColor={mode("gray.200", "gray.700")}
          >
            {menu === 0 && <Dashboard />}
            {menu === 1 && <Advertise />}
            {menu === 2 && <User />}
            {menu === 3 && <Campain />}
            {menu === 5 && <RegisterSearch />}
            {menu === 6 && <RegisterReview />}

            {menu === 7 && (
              <Center minH={"100%"}>
                <Container>
                  <VStack spacing={{ base: "4", lg: "6" }}>
                    <Heading size="sm">
                      [크롤링] 네이버 블로그 리뷰 등록
                    </Heading>
                    <Card>
                      <Stack p={{ base: "4", lg: "6" }} minW={"md"}>
                        <FormControl isRequired>
                          <FormLabel>체험단 선택</FormLabel>
                          <Select
                            value={reviewCampain}
                            onChange={(e) => setReviewCampain(e.target.value)}
                          >
                            <option value="">
                              리뷰 등록할 체험단을 선택하세요.
                            </option>
                            {campains?.map((campain: any) => {
                              return (
                                <option value={campain.doc_id} key={campain.id}>
                                  {campain.name}
                                </option>
                              );
                            })}
                          </Select>
                          {/* <Input
                      onChange={(e) => setCid(e.target.value)}
                      placeholder="체험단 ID를 입력하세요."
                    /> */}
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel>이름</FormLabel>
                          <Input
                            onChange={(e) => setName(e.target.value)}
                            placeholder="리뷰 작성자를 입력해주세요."
                          />
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel>리뷰 URL</FormLabel>
                          <Input
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://blog.naver.com/블로그아이디/포스팅번호"
                          />
                        </FormControl>

                        <Button onClick={handleSubmit}>등록하기</Button>
                      </Stack>
                    </Card>
                  </VStack>
                </Container>
              </Center>
            )}

            {menu === 11 && <TotalView cid={cid} />}
            {menu === 12 && <TesterUser cid={cid} />}
            {menu === 13 && <SelectUser cid={cid} />}
            {menu === 14 && <Review cid={cid} />}
            {menu === 15 && <ReviewDetail cid={cid} />}
            {menu === 16 && <Picture cid={cid} />}
            {menu === 17 && <Search cid={cid} />}
            {menu === 18 && <Keyword cid={cid} />}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

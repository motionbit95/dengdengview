import {
  Box,
  Circle,
  Flex,
  Stack,
  useColorModeValue as mode,
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
import { useState } from "react";
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

export const ShellWithGroupedMenu = () => {
  const [menu, setMenu] = useState(
    Number(localStorage.getItem("ad_menu")) || 0
  );
  return (
    <Box height="100vh" minW={"3xl"} overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box w="64" bg="gray.900" color="white" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <Stack spacing="8" flex="1" overflow="auto" mb={4}>
              {localStorage.getItem("dang_admin_id") && (
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
                  {/* <NavItem
                  active={menu === 1 || localStorage.getItem("ad_menu") === "1"}
                  icon={<BiCommentAdd />}
                  label="광고문의"
                  onClick={() => {
                    setMenu(1);
                    localStorage.setItem("ad_menu", "1");
                  }}
                /> */}
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
                    window.open("http://localhost:3000/campain/" + cid);
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
            border="3px dashed"
            borderColor={mode("gray.200", "gray.700")}
          >
            {menu === 0 && <Dashboard />}
            {menu === 2 && <User />}
            {menu === 3 && <Campain />}

            {menu === 11 && <TotalView />}
            {menu === 12 && <TesterUser />}
            {menu === 13 && <SelectUser />}
            {menu === 14 && <Review />}
            {menu === 15 && <ReviewDetail />}
            {menu === 16 && <Picture />}
            {menu === 17 && <Search />}
            {menu === 18 && <Keyword />}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

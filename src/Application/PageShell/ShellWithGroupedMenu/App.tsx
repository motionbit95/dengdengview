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
              <NavGroup label="기본관리">
                <NavItem
                  active={menu === 0 || localStorage.getItem("ad_menu") === "0"}
                  icon={<BiHome />}
                  label="대시보드"
                  onClick={() => {
                    setMenu(0);
                    localStorage.setItem("ad_menu", "0");
                  }}
                />
                <NavItem
                  active={menu === 1 || localStorage.getItem("ad_menu") === "1"}
                  icon={<BiCommentAdd />}
                  label="광고문의"
                  onClick={() => {
                    setMenu(1);
                    localStorage.setItem("ad_menu", "1");
                  }}
                />
                <NavItem
                  active={menu === 2 || localStorage.getItem("ad_menu") === "2"}
                  icon={<BiUserCircle />}
                  label="회원관리"
                  onClick={() => {
                    setMenu(2);
                    localStorage.setItem("ad_menu", "2");
                  }}
                />
                <NavItem
                  active={menu === 3 || localStorage.getItem("ad_menu") === "3"}
                  icon={<BiCreditCard />}
                  label="체험단관리"
                  onClick={() => {
                    setMenu(3);
                    localStorage.setItem("ad_menu", "3");
                  }}
                />
                <NavItem
                  active={menu === 4 || localStorage.getItem("ad_menu") === "4"}
                  icon={<BiNotification />}
                  label="공지관리"
                  onClick={() => {
                    setMenu(4);
                    localStorage.setItem("ad_menu", "4");
                  }}
                />
              </NavGroup>

              <NavGroup label="광고주관리">
                <NavItem icon={<BiNews />} label="종합상세보기" />
                <NavItem icon={<BiUserPlus />} label="신청자현황" />
                <NavItem icon={<BiUserCheck />} label="선정자현황" />
                <NavItem icon={<BsCommand />} label="리뷰모아보기" />
                <NavItem icon={<BsHandThumbsUp />} label="리뷰분석" />
                <NavItem icon={<AiFillPicture />} label="사진모아보기" />
                <NavItem icon={<BiBarChart />} label="검색점유율" />
                <NavItem icon={<BiPieChart />} label="유입키워드" />
                <NavItem icon={<BiLink />} label="모집글보기" />
              </NavGroup>
            </Stack>
            <Box>
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
            </Box>
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
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

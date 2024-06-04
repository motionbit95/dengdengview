import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FiBookmark,
  FiClock,
  FiGrid,
  FiHelpCircle,
  FiLogOut,
  FiMoreVertical,
  FiPieChart,
  FiSearch,
  FiSettings,
} from "react-icons/fi";
import { DocumentCollapse } from "./DocumentCollapse";
import { Logo } from "./Logo";
import { SidebarButton } from "./SidebarButton";
import { CampainCollaspe } from "./CampainCollaspe";
import { BsMegaphone, BsPatchQuestion } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase/Config";

export const SidebarWithCollapsable = ({ ...props }) => {
  console.log(props.userInfo);
  const handleLogout = () => {
    // localStorage.clear();
    // 고객단에서 사용하는 로컬 저장 변수를 삭제합니다.
    signOut(auth).catch((error) => {
      // An error happened.
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("naver_id");
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <Flex as="section" {...props}>
      <Stack
        w={{ base: "full", sm: "xs" }}
        py={{ base: "16", md: "12" }}
        px={{ base: "4", sm: "6" }}
        // bg="bg.surface"
        // borderRightWidth="1px"
        justifyContent="space-between"
      >
        <Stack spacing="8" divider={<StackDivider />}>
          <HStack spacing="3" justify="space-between">
            <HStack spacing="3">
              {/* <Avatar boxSize="10" src={props.userInfo?.image} /> */}
              <Box>
                <Text textStyle="sm" fontWeight="medium">
                  {props.userInfo?.name}
                </Text>
                <Text textStyle="sm" color="fg.muted">
                  {props.userInfo?.email}
                </Text>
              </Box>
            </HStack>
            {/* <IconButton
            variant="tertiary"
            icon={<FiMoreVertical />}
            aria-label="Open Menu"
          /> */}
          </HStack>
          {!useBreakpointValue({ base: false, sm: true }) && (
            <Stack>
              <Button onClick={() => (window.location.href = "/ads")}>
                광고문의
              </Button>
            </Stack>
          )}
          <Stack spacing="1">
            <CampainCollaspe
              setItem={(index: string) => props.setItem(index)}
            />
            <DocumentCollapse
              setItem={(index: string) => props.setItem(index)}
            />
            <SidebarButton
              onClick={handleLogout}
              color={"gray.400"}
              leftIcon={<FiLogOut />}
            >
              로그아웃
            </SidebarButton>
            {/* <SidebarButton leftIcon={<FiPieChart />}>Analysis</SidebarButton>
          <SidebarButton leftIcon={<FiClock />}>History</SidebarButton>
          <SidebarButton leftIcon={<FiBookmark />}>Favorites</SidebarButton> */}
          </Stack>
        </Stack>
        <Stack spacing="4" divider={<StackDivider />}>
          <Box />
          <Stack spacing="1">
            {/* <SidebarButton
              leftIcon={<BsMegaphone />}
              onClick={() => props.setItem("공지사항")}
            >
              공지사항
            </SidebarButton> */}
            <SidebarButton
              leftIcon={<BsPatchQuestion />}
              onClick={() =>
                (window.location.href = "https://pf.kakao.com/_xbxnxnyxj")
              }
            >
              카카오톡 채널
            </SidebarButton>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

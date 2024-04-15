import {
  Avatar,
  Box,
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
} from "@chakra-ui/react";
import {
  FiBookmark,
  FiClock,
  FiGrid,
  FiHelpCircle,
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

export const SidebarWithCollapsable = ({ ...props }) => (
  <Flex as="section" minH="100vh" {...props}>
    <Stack
      flex="1"
      minH="100vh"
      maxW={{ base: "full", sm: "xs" }}
      py={{ base: "16", md: "12" }}
      px={{ base: "4", sm: "6" }}
      bg="bg.surface"
      borderRightWidth="1px"
      justifyContent="space-between"
    >
      <Stack spacing="8">
        <Stack spacing="1">
          <CampainCollaspe setItem={(index: string) => props.setItem(index)} />
          <DocumentCollapse setItem={(index: string) => props.setItem(index)} />

          {/* <SidebarButton leftIcon={<FiPieChart />}>Analysis</SidebarButton>
          <SidebarButton leftIcon={<FiClock />}>History</SidebarButton>
          <SidebarButton leftIcon={<FiBookmark />}>Favorites</SidebarButton> */}
        </Stack>
      </Stack>
      <Stack spacing="4" divider={<StackDivider />}>
        <Box />
        <Stack spacing="1">
          <SidebarButton
            leftIcon={<BsMegaphone />}
            onClick={() => props.setItem("공지사항")}
          >
            공지사항
          </SidebarButton>
          <SidebarButton
            leftIcon={<BsPatchQuestion />}
            onClick={() =>
              (window.location.href = "https://pf.kakao.com/_xbxnxnyxj")
            }
          >
            카카오톡 채널
          </SidebarButton>
        </Stack>
        <HStack spacing="3" justify="space-between">
          <HStack spacing="3">
            <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
            <Box>
              <Text textStyle="sm" fontWeight="medium">
                John Doe
              </Text>
              <Text textStyle="sm" color="fg.muted">
                john@chakra-ui.com
              </Text>
            </Box>
          </HStack>
          <IconButton
            variant="tertiary"
            icon={<FiMoreVertical />}
            aria-label="Open Menu"
          />
        </HStack>
      </Stack>
    </Stack>
  </Flex>
);

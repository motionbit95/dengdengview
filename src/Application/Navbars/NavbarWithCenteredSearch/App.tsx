import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FiBell, FiMenu, FiSearch } from "react-icons/fi";
import { Logo } from "./Logo";
import { useState } from "react";
import { SidebarWithCollapsable } from "../../Sidebars/SidebarWithCollapsable/App";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase/Config";

export const NavbarWithCenteredSearch = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleTabChange = (value: string) => {
    props.setTab(value);
  };

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
    <Box
      as="section"
      position={"sticky"}
      top={0}
      bgColor={"white"}
      zIndex={"sticky"}
    >
      <Drawer size={"xs"} placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <SidebarWithCollapsable
            userInfo={props.userInfo}
            setItem={(index: string) => {}}
          />
        </DrawerContent>
      </Drawer>
      <Box borderBottomWidth="1px" bg="bg.surface">
        <Container py="4">
          <HStack justify="space-between">
            <IconButton
              onClick={onOpen}
              variant="unstyled"
              aria-label="Open Menu"
              icon={<FiMenu />}
              display={{ base: "inline-flex", md: "none" }}
            />
            <HStack spacing={20}>
              <Box onClick={() => (window.location.href = "/")} minW={"100px"}>
                {/* <Logo /> */}
                {/* <Image
                  w={20}
                  src={require("../../../Assets/img/LogoText.png")}
                /> */}
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontFamily={"Cafe24Ssurround"}
                  // color={"#23E9AE"}
                >
                  댕댕뷰
                </Text>
              </Box>
              {useBreakpointValue({ base: false, md: true }) && (
                <ButtonGroup variant={"ghost"} colorScheme="gray" size={"lg"}>
                  <Button
                    fontWeight={"bold"}
                    onClick={() => handleTabChange("0")}
                    colorScheme={props.tab === "0" ? "cyan" : "gray"}
                  >
                    전체 체험단
                  </Button>
                  <Button
                    fontWeight={"bold"}
                    onClick={() => handleTabChange("1")}
                    colorScheme={props.tab === "1" ? "cyan" : "gray"}
                  >
                    인플루언서
                  </Button>
                  <Button
                    fontWeight={"bold"}
                    onClick={() => handleTabChange("2")}
                    colorScheme={props.tab === "2" ? "cyan" : "gray"}
                  >
                    구매평 체험단
                  </Button>
                </ButtonGroup>
              )}
            </HStack>
            {/* <InputGroup
              maxW={{ md: "sm", lg: "md" }}
              display={{ base: "none", md: "inline-flex" }}
            >
              <InputLeftElement>
                <Icon as={FiSearch} color="fg.muted" fontSize="lg" />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup> */}
            <HStack spacing={{ base: "2", md: "4" }}>
              <ButtonGroup variant="tertiary" spacing="1">
                {/* <IconButton
                  icon={<FiSearch />}
                  aria-label="Serach"
                  display={{ base: "flex", md: "none" }}
                  isRound
                /> */}
                {/* <IconButton
                  icon={<FiBell />}
                  aria-label="Show notification"
                  isRound
                /> */}
              </ButtonGroup>

              {useBreakpointValue({ base: false, md: true }) && (
                <ButtonGroup>
                  {!props.userInfo && (
                    <>
                      <Button
                        variant={"tertiary"}
                        onClick={() => (window.location.href = "/login")}
                      >
                        로그인
                      </Button>
                      {/* <Button
                      variant={"tertiary"}
                      onClick={() => (window.location.href = "/signup")}
                    >
                      회원가입
                    </Button> */}
                    </>
                  )}
                  <Button
                    onClick={() => (window.location.href = "/ads")}
                    borderRadius={"full"}
                  >
                    광고문의
                  </Button>
                  {/* {props.userInfo && (
                  <Avatar
                    onClick={() => {
                      if (!props.userInfo) {
                        window.location.href = "/login";
                      } else {
                        window.location.href = "/mypage";
                      }
                    }}
                    _hover={{ cursor: "pointer" }}
                    boxSize="10"
                    src={props.userInfo?.image}
                    // name={props.userInfo?.name}
                  />
                )} */}
                  <InputGroup
                    maxW={{ md: "sm", lg: "md" }}
                    display={{ base: "none", md: "inline-flex" }}
                  >
                    <InputLeftElement>
                      <Icon as={FiSearch} color="fg.muted" fontSize="lg" />
                    </InputLeftElement>
                    <Input placeholder="검색" onChange={props.handleSearch} />
                  </InputGroup>
                  {props.userInfo && (
                    <>
                      <Button
                        variant={"tertiary"}
                        onClick={() => (window.location.href = "/mypage")}
                      >
                        마이페이지
                      </Button>
                      <Button variant={"tertiary"} onClick={handleLogout}>
                        로그아웃
                      </Button>
                    </>
                  )}
                </ButtonGroup>
              )}
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

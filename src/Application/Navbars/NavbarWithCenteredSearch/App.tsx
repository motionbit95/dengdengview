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

export const NavbarWithCenteredSearch = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleTabChange = (value: string) => {
    props.setTab(value);
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
          <SidebarWithCollapsable setItem={(index: string) => {}} />
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
              <Box onClick={() => (window.location.href = "/")}>
                {/* <Logo /> */}
                <Image
                  w={20}
                  src={require("../../../Assets/img/LogoText.png")}
                />
              </Box>
              <ButtonGroup variant={"ghost"} colorScheme="gray" size={"lg"}>
                <Button
                  fontWeight={"bold"}
                  onClick={() => handleTabChange("0")}
                >
                  전체 체험단
                </Button>
                <Button
                  fontWeight={"bold"}
                  onClick={() => handleTabChange("1")}
                >
                  인플루언서
                </Button>
                <Button
                  fontWeight={"bold"}
                  onClick={() => handleTabChange("2")}
                >
                  구매평 체험단
                </Button>
              </ButtonGroup>
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
              {props.userInfo ? (
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
              ) : (
                <ButtonGroup>
                  <Button
                    variant={"tertiary"}
                    onClick={() => (window.location.href = "/login")}
                  >
                    로그인
                  </Button>
                  <Button
                    variant={"tertiary"}
                    onClick={() => (window.location.href = "/signup")}
                  >
                    회원가입
                  </Button>
                  <Button
                    onClick={() => (window.location.href = "/ads")}
                    borderRadius={"full"}
                  >
                    광고문의
                  </Button>
                </ButtonGroup>
              )}
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

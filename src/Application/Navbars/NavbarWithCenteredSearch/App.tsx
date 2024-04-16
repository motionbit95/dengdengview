import {
  Avatar,
  Box,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  IconButton,
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
  return (
    <Box as="section" position={"sticky"} top={0} zIndex={"tooltip"}>
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
            <Box onClick={() => (window.location.href = "/")}>
              <Logo />
            </Box>
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
                <IconButton
                  icon={<FiSearch />}
                  aria-label="Serach"
                  display={{ base: "flex", md: "none" }}
                  isRound
                />
                {/* <IconButton
                  icon={<FiBell />}
                  aria-label="Show notification"
                  isRound
                /> */}
              </ButtonGroup>
              <Avatar
                onClick={() => {
                  window.location.href = "/mypage";
                }}
                _hover={{ cursor: "pointer" }}
                boxSize="10"
                src={props.userInfo?.image}
                // name={props.userInfo?.name}
              />
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

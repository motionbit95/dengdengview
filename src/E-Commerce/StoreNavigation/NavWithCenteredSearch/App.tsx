import {
  Box,
  Center,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { RiHeartLine, RiShoppingCartLine } from "react-icons/ri";
import { CurrencySelect } from "./CurrencySelect";
import { Logo } from "./Logo";
import { CartCount } from "./CartCount";
import { MobileBottomNav } from "./MobileBottomNav";
import { NavAction } from "./NavAction";
import { NavCategoryMenu } from "./NavCategoryMenu";
import { NavCategorySubmenu } from "./NavCategorySubmenu";
import { SearchInput } from "./SearchInput";

export const NavWithCenteredSearch = () => (
  <>
    <Flex
      direction="column"
      pb="4.5rem"
      overflow="hidden"
      display={{ base: "flex", lg: "none" }}
    >
      <Box px="4" py="4" borderBottomWidth="1px" overflow="auto">
        <Flex
          align="center"
          justify="space-between"
          mb="3"
          display={{ base: "flex", lg: "none" }}
        >
          <HStack spacing="3">
            <Center w="8" h="8" as="button" type="button">
              <VisuallyHidden>Toggle Menu</VisuallyHidden>
              <Box as={MdMenu} fontSize="3xl" />
            </Center>
            <Logo h="3" />
          </HStack>
          <Box>
            <CurrencySelect />
          </Box>
        </Flex>
        <SearchInput />
      </Box>

      <Flex flex="1" fontSize="sm" overflow="auto">
        <NavCategoryMenu.Mobile />
        <NavCategorySubmenu.Mobile />
      </Flex>
      <MobileBottomNav />
    </Flex>

    <Box minH="100vh" display={{ base: "none", lg: "block" }}>
      <Box px="8" bg={mode("white", "gray.800")}>
        <Flex height="4.5rem" align="center" maxW="8xl" mx="auto">
          <HStack flex="24rem" spacing="32px">
            <Logo h="3" />
            <Box flexShrink={0}>
              <CurrencySelect />
            </Box>
          </HStack>
          <Box width="full" mx="8">
            <SearchInput />
          </Box>
          <HStack spacing="8" flexShrink={0}>
            <NavAction.Desktop label="Wishlist" icon={RiHeartLine} />
            <NavAction.Desktop label="Sign in" icon={AiOutlineUser} />
            <Box position="relative">
              <NavAction.Desktop label="Cart" icon={RiShoppingCartLine} />
              <CartCount>1</CartCount>
            </Box>
          </HStack>
        </Flex>
      </Box>
      <NavCategoryMenu.Desktop />
      <NavCategorySubmenu.Desktop />
      <Box bg="blackAlpha.400" pos="fixed" zIndex="-1" inset="0" />
    </Box>
  </>
);

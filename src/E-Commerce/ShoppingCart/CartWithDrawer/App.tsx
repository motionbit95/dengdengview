import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiPackage } from "react-icons/fi";
import { cartData } from "./_data";
import { CartItem } from "./CartItem";

export const CartWithDrawer = () => (
  <Box height="100vh">
    <Drawer
      isOpen
      onClose={() => void 0}
      size="md"
      /*`trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly. */
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent
        bg={useColorModeValue("white", "gray.800")}
        overflowY="auto"
      >
        <DrawerCloseButton
          size="lg"
          right={{ base: "4", md: "8" }}
          top="4"
          bg="inherit"
        />
        <Stack
          padding={{ base: "6", md: "10" }}
          height="full"
          spacing="8"
          overflowY="auto"
        >
          <Heading size="md">Shopping Cart ({cartData.length} items)</Heading>
          <Stack spacing={{ base: "8", md: "10" }}>
            {cartData.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>
        <Stack
          borderTopWidth="1px"
          px={{ base: "6", md: "10" }}
          py="4"
          spacing="5"
        >
          <Stack>
            <HStack fontSize="xl" fontWeight="semibold">
              <Text flex="1">Subtotal:</Text>
              <Text>£597.00</Text>
            </HStack>
            <HStack
              spacing="2"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              <Icon as={FiPackage} />
              <Text>Shipping + taxes calculated at checkout</Text>
            </HStack>
          </Stack>
          <Button colorScheme="blue" size="lg" fontSize="md">
            Checkout
          </Button>
        </Stack>
      </DrawerContent>
    </Drawer>
  </Box>
);

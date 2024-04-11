import { Box, Button, Icon, LightMode, Stack, Text } from "@chakra-ui/react";
import { VscChromeClose } from "react-icons/vsc";
import { Timer } from "./Timer";

export const CountdownOnColoredBackground = () => (
  <Box as="section" pt="8" pb="12">
    <Box bg="blue.600" color="white" position="relative">
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "3", md: "2.5" }}
        pr={{ md: "16" }}
      >
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          justify={{ base: "space-between", lg: "center" }}
          spacing={{ base: "2", lg: "7.5rem" }}
        >
          <Timer />
          <Text fontWeight="medium" fontSize="xl" textAlign="center">
            Sale ends soon! 50% off shoes
          </Text>
          <LightMode>
            <Button
              colorScheme="blue"
              variant="tertiary"
              bg="white"
              px="8"
              display={{ base: "none", md: "inline-block" }}
              _focus={{ boxShadow: "none" }}
              _focusVisible={{ boxShadow: "outline" }}
            >
              Shop now
            </Button>
          </LightMode>
          <Box
            as="button"
            aria-label="Close banner"
            position="absolute"
            right={{ base: "2", md: "4", lg: "6" }}
            top={{ base: "2", md: "unset" }}
          >
            <Icon as={VscChromeClose} boxSize={{ base: "5", md: "6" }} />
          </Box>
        </Stack>
      </Box>
    </Box>
  </Box>
);

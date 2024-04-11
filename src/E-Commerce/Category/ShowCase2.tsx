import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export const ShowCase2 = () => (
  <Box position="relative">
    <Image
      src="https://images.unsplash.com/photo-1486308510493-aa64833637bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1829&q=80"
      alt="Lovely Image"
      objectFit="cover"
      width="100%"
      height="md"
    />
    <Box position="absolute" boxSize="full" inset="0" zIndex="1">
      <Flex
        direction="column-reverse"
        height="full"
        maxW="7xl"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Box
          bg={useColorModeValue("white", "gray.800")}
          alignSelf={{ md: "start" }}
          p={{ base: "5", md: "8" }}
          minW={{ md: "lg" }}
        >
          <Stack spacing="5">
            <Stack spacing="1">
              <Heading
                size="lg"
                color={useColorModeValue("gray.500", "gray.400")}
              >
                Denim essentials
              </Heading>
              <Heading size="lg" color={useColorModeValue("black", "white")}>
                Buy now, wear forever
              </Heading>
            </Stack>
            <Link fontWeight="bold" textDecoration="underline">
              Dicover now
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Box>
  </Box>
);

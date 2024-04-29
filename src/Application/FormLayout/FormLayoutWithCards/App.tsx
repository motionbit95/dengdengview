import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { PersonalInfoCard } from "./AddressCard";
import { ProfileCard } from "./ProfileCard";

export const FormLayoutWithCards = () => (
  <Container py={{ base: "4", md: "8" }}>
    <Stack
      spacing="5"
      divider={<StackDivider />}
      direction={{ base: "column", lg: "row" }}
    >
      <Stack
        w={"full"}
        spacing={{ base: "5", lg: "8" }}
        // justify="space-between"
      >
        <Box flexShrink={0}>
          <Text textStyle="lg" fontWeight="medium">
            체험단 모집 정보
          </Text>
        </Box>
        <PersonalInfoCard maxW={{ lg: "3xl" }} />
      </Stack>

      <Stack
        w={"full"}
        spacing={{ base: "5", lg: "8" }}
        // justify="space-between"
      >
        <Box flexShrink={0}>
          <Text textStyle="lg" fontWeight="medium">
            체험 제품 정보
          </Text>
        </Box>
        <ProfileCard maxW={{ lg: "3xl" }} />
      </Stack>
    </Stack>

    <Flex direction="row-reverse" py="4">
      <HStack>
        <Button colorScheme="gray" variant="outline">
          취소
        </Button>
        <Button type="submit">저장</Button>
      </HStack>
    </Flex>
  </Container>
);

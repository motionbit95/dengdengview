import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { reviews } from "./_data";
import { ReviewItem } from "./ReviewItem";
import { Rating } from "../Rating/Rating";

export const ReviewOverview = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <Stack spacing="12">
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="4"
        justifyContent="space-between"
        alignItems={{ base: "start", md: "center" }}
      >
        <Stack>
          <Heading
            fontSize={{ base: "1.25rem", md: "1.5rem" }}
            fontWeight="semibold"
            color={useColorModeValue("black", "white")}
          >
            Customer reviews
          </Heading>
          <HStack>
            <Rating defaultValue={4} size="sm" />
            <Text color={useColorModeValue("gray.600", "gray.400")}>
              Based on 12 reviews
            </Text>
          </HStack>
        </Stack>
        <Button size="lg" colorScheme="blue">
          Write a review
        </Button>
      </Stack>
      <Divider display={{ base: "none", md: "flex" }} />
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        columnGap="12"
        rowGap={{ base: "10", md: "12" }}
      >
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </SimpleGrid>
      <Button size="lg" variant="outline" alignSelf="center" px="16">
        Load more
      </Button>
    </Stack>
  </Box>
);

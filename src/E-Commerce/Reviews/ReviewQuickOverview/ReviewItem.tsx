import { Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Review } from "./_data";
import { Rating } from "../Rating/Rating";

interface Props {
  review: Review;
}

export const ReviewItem = (props: Props) => {
  const { review } = props;
  return (
    <Stack spacing="2.5">
      <Stack direction="row" spacing="3">
        <Rating defaultValue={review.rating} size="sm" />
        <Heading
          size="sm"
          fontWeight="medium"
          color={useColorModeValue("black", "white")}
        >
          {review.title}
        </Heading>
      </Stack>
      <Text>{review.comment}</Text>
      <Text color={useColorModeValue("gray.600", "gray.400")} fontSize="sm">
        by {review.author}, {review.createdAt}
      </Text>
    </Stack>
  );
};

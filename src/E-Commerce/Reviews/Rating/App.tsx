import { Box, Stack } from "@chakra-ui/react";
import { Rating } from "./Rating";

export const RatingComponent = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <Stack spacing="4">
      <Rating defaultValue={3} size="sm" />
      <Rating defaultValue={3} />
      <Rating defaultValue={3} size="lg" />
    </Stack>
  </Box>
);

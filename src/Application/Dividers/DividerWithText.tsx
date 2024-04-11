import { Box, Container, Divider, HStack, Text } from "@chakra-ui/react";

export const DividerWithText = () => (
  <Box bg="bg.surface">
    <Container py={{ base: "4", md: "8" }}>
      <HStack>
        <Divider />
        <Text textStyle="md" fontWeight="medium" whiteSpace="nowrap">
          Members
        </Text>
        <Divider />
      </HStack>
    </Container>
  </Box>
);

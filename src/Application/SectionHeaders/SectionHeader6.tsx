import { Box, Container, Divider, Stack, Text } from "@chakra-ui/react";

export const SectionHeader6 = () => (
  <Box
    as="section"
    bg="bg.surface"
    pt={{ base: "4", md: "8" }}
    pb={{ base: "12", md: "24" }}
  >
    <Container>
      <Stack spacing="5">
        <Text textStyle="lg" fontWeight="medium">
          Member overview
        </Text>
        <Divider />
      </Stack>
    </Container>
  </Box>
);

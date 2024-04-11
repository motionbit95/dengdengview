import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export const PageHeader1 = () => (
  <Box
    as="section"
    bg="bg.surface"
    pt={{ base: "4", md: "8" }}
    pb={{ base: "12", md: "24" }}
  >
    <Container>
      <Stack spacing="1">
        <Heading size={{ base: "xs", md: "sm" }} fontWeight="medium">
          Member overview
        </Heading>
        <Text color="fg.muted">All registered users in the overview</Text>
      </Stack>
    </Container>
  </Box>
);

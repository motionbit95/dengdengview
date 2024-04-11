import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";

export const CardWithTwoButtons = () => (
  <Box as="section" py={{ base: "4", md: "8" }}>
    <Container maxW="3xl">
      <Box
        bg="bg.surface"
        boxShadow="sm"
        borderRadius="lg"
        p={{ base: "4", md: "6" }}
      >
        <Stack spacing="5">
          <Stack spacing="1">
            <Text textStyle="lg" fontWeight="medium">
              Updates Available
            </Text>
            <Text textStyle="sm" color="fg.muted">
              A new version is available. Please upgrade for the best
              experience.
            </Text>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing="3">
            <Button variant="secondary">Skip</Button>
            <Button>Download</Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </Box>
);

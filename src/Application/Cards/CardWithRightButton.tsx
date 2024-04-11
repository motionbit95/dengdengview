import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";

export const CardWithRightButton = () => (
  <Box as="section" py={{ base: "4", md: "8" }}>
    <Container maxW="3xl">
      <Box
        bg="bg.surface"
        boxShadow="sm"
        borderRadius="lg"
        p={{ base: "4", md: "6" }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "5", md: "6" }}
          justify="space-between"
        >
          <Stack spacing="1">
            <Text textStyle="lg" fontWeight="medium">
              Updates Available
            </Text>
            <Text textStyle="sm" color="fg.muted">
              A new version is available. Please upgrade for the best
              experience.
            </Text>
          </Stack>
          <Box>
            <Button>Download</Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  </Box>
);

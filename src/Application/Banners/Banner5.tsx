import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";

export const BannerWithTwoButtons = () => (
  <Box as="section" pb={{ base: "12", md: "24" }}>
    <Box borderBottomWidth="1px" bg="bg.surface">
      <Container py={{ base: "4", md: "3.5" }}>
        <Stack
          spacing="4"
          justify={{ base: "start", md: "space-between" }}
          direction={{ base: "column", md: "row" }}
        >
          <Box pe={{ base: "4", md: "0" }}>
            <Text fontWeight="medium">Stay Ahead with our Newsletter</Text>
            <Text color="fg.muted">
              Embrace trends, industry insights, and actionable advice.
            </Text>
          </Box>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="3"
            align={{ base: "stretch", md: "center" }}
          >
            <Button>Sign Up</Button>
            <Button variant="secondary">No, Thanks</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  </Box>
);

import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

export const PageHeader2 = () => (
  <Box
    as="section"
    bg="bg.surface"
    pt={{ base: "4", md: "8" }}
    pb={{ base: "12", md: "24" }}
  >
    <Container>
      <Stack
        spacing="4"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
      >
        <Stack spacing="1">
          <Heading size={{ base: "xs", md: "sm" }} fontWeight="medium">
            Member overview
          </Heading>
          <Text color="fg.muted">All registered users in the overview</Text>
        </Stack>
        <Stack direction="row" spacing="3">
          <Button variant="secondary">Invite</Button>
          <Button>Create</Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

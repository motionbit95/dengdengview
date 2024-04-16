import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export const PageHeader1 = ({ ...props }) => (
  <Box
    as="section"
    // bg="bg.surface"
    pt={{ base: "4", md: "8" }}
    // pb={{ base: "12", md: "24" }}
  >
    <Container>
      <Stack spacing="1">
        <Heading size={{ base: "xs", md: "sm" }} fontWeight="medium">
          {props.title}
        </Heading>
        {props.description.includes("체험단") && (
          <Text color="fg.muted">{props.description}</Text>
        )}
      </Stack>
    </Container>
  </Box>
);

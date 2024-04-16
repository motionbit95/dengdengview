import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

export const PageHeader2 = (props: any) => (
  <Box
    as="section"
    bg="bg.surface"
    pt={{ base: "4", md: "8" }}
    // pb={{ base: "12", md: "24" }}
  >
    <Container>
      <Stack
        spacing="4"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
      >
        <Stack spacing="1">
          <Heading size={{ base: "xs", md: "sm" }} fontWeight="medium">
            {props.title}
          </Heading>
          <Text color="fg.muted">{props.discription}</Text>
        </Stack>
        <Stack direction="row" spacing="3">
          {props.leftButton && (
            <Button variant="secondary">{props.leftButton}</Button>
          )}
          {props.rightButton && <Button>{props.rightButton}</Button>}
        </Stack>
      </Stack>
    </Container>
  </Box>
);

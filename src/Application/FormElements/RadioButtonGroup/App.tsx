import { Box, Container, Stack } from "@chakra-ui/react";
import { RadioButton, RadioButtonGroup } from "./RadioButtonGroup";

export const RadioButtonGroupContainer = () => (
  <Box as="section" bg="bg.surface" py={{ base: "4", md: "8" }}>
    <Container maxW="lg">
      <Stack spacing="5">
        {["md", "lg"].map((size) => (
          <RadioButtonGroup key={size} defaultValue="left" size={size}>
            <RadioButton value="left">Left</RadioButton>
            <RadioButton value="center">Center</RadioButton>
            <RadioButton value="right">Right</RadioButton>
          </RadioButtonGroup>
        ))}
      </Stack>
    </Container>
  </Box>
);

import { Box, Container, Divider, HStack } from "@chakra-ui/react";
import { RadioButton, RadioButtonGroup } from "./RadioButtonGroup";

export const DividerWithRadioButtonGroup = () => (
  <Box bg="bg.surface">
    <Container py={{ base: "4", md: "8" }}>
      <HStack>
        <Divider />
        <RadioButtonGroup defaultValue="left">
          <RadioButton value="left">Show all</RadioButton>
          <RadioButton value="center">Active</RadioButton>
          <RadioButton value="right">Inactive</RadioButton>
        </RadioButtonGroup>
        <Divider />
      </HStack>
    </Container>
  </Box>
);

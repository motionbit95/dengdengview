import { Box, Container, Stack } from "@chakra-ui/react";
import { FiAlignCenter, FiAlignLeft, FiAlignRight } from "react-icons/fi";
import { RadioIconButton, RadioIconButtonGroup } from "./RadioIconButtonGroup";

export const RadioIconButtonGroupContainer = () => (
  <Box as="section" bg="bg.surface" py={{ base: "4", md: "8" }}>
    <Container maxW="lg">
      <Stack spacing="5">
        {["md", "lg"].map((size) => (
          <RadioIconButtonGroup key={size} defaultValue="left" size={size}>
            <RadioIconButton
              value="left"
              aria-label="Align left"
              icon={<FiAlignLeft />}
            />
            <RadioIconButton
              value="center"
              aria-label="Align center"
              icon={<FiAlignCenter />}
            />
            <RadioIconButton
              value="right"
              aria-label="Align right"
              icon={<FiAlignRight />}
            />
          </RadioIconButtonGroup>
        ))}
      </Stack>
    </Container>
  </Box>
);

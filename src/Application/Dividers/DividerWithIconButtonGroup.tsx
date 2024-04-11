import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight, FiPlus } from "react-icons/fi";

export const DividerWithIconButtonGroup = () => (
  <Box bg="bg.surface">
    <Container py={{ base: "4", md: "8" }}>
      <HStack>
        <Divider />
        <ButtonGroup isAttached variant="secondary">
          <IconButton
            value="left"
            aria-label="Show previous"
            icon={<FiArrowLeft />}
          />
          <IconButton
            value="center"
            aria-label="Add"
            icon={<FiPlus />}
            mx="-px"
          />
          <IconButton
            value="right"
            aria-label="Show next"
            icon={<FiArrowRight />}
          />
        </ButtonGroup>
        <Divider />
      </HStack>
    </Container>
  </Box>
);

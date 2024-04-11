import { Box, Container, Divider, HStack, IconButton } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export const DividerWithIconButton = () => (
  <Box bg="bg.surface">
    <Container py={{ base: "4", md: "8" }}>
      <HStack>
        <Divider />
        <IconButton variant="tertiary" icon={<FiPlus />} aria-label="Add" />
        <Divider />
      </HStack>
    </Container>
  </Box>
);

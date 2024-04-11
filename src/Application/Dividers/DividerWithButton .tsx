import { Box, Button, Container, Divider, HStack } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export const DividerWithButton = () => (
  <Box bg="bg.surface">
    <Container py={{ base: "4", md: "8" }}>
      <HStack>
        <Divider />
        <Button variant="secondary" leftIcon={<FiPlus />}>
          Create
        </Button>
        <Divider />
      </HStack>
    </Container>
  </Box>
);

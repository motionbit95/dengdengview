import { Box, Container, HStack, IconButton, Text } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

export const CardHeader2 = () => (
  <Box as="section" pt={{ base: "4", md: "8" }} pb={{ base: "12", md: "24" }}>
    <Container>
      <Box
        bg="bg.surface"
        px={{ base: "4", md: "6" }}
        py="5"
        boxShadow="sm"
        borderRadius="lg"
      >
        <HStack spacing="4" justify="space-between">
          <Text textStyle="lg" fontWeight="medium">
            Member overview
          </Text>
          <IconButton
            size={{ base: "sm", sm: "md" }}
            variant="tertiary"
            icon={<FiMoreVertical />}
            aria-label="Open context menu"
          />
        </HStack>
      </Box>
    </Container>
  </Box>
);

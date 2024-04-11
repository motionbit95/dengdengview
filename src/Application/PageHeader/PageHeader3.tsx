import {
  Box,
  Container,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export const PageHeader3 = () => (
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
        <InputGroup maxW={{ sm: "xs" }}>
          <InputLeftElement pointerEvents="none">
            <Icon as={FiSearch} color="fg.muted" boxSize="5" />
          </InputLeftElement>
          <Input placeholder="Search" />
        </InputGroup>
      </Stack>
    </Container>
  </Box>
);

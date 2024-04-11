import {
  Box,
  Container,
  Divider,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export const SectionHeader5 = () => (
  <Box
    as="section"
    bg="bg.surface"
    pt={{ base: "4", md: "8" }}
    pb={{ base: "12", md: "24" }}
  >
    <Container>
      <Stack spacing="5">
        <Stack
          spacing="4"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
        >
          <Box>
            <Text textStyle="lg" fontWeight="medium">
              Member overview
            </Text>
            <Text color="fg.muted" textStyle="sm">
              All registered users in the overview
            </Text>
          </Box>
          <InputGroup maxW={{ sm: "xs" }}>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="fg.muted" boxSize="5" />
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup>
        </Stack>
        <Divider />
      </Stack>
    </Container>
  </Box>
);

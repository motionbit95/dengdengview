import {
  Avatar,
  Box,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiBell, FiSearch } from "react-icons/fi";
import { Logo } from "./Logo";

export const NavbarWithCentredSearchOnAccent = () => (
  <Box as="section" minH="md">
    <Box bg="bg.accent.default">
      <Container py="4">
        <HStack justify="space-between">
          <Logo />
          <InputGroup
            maxW={{ md: "sm", lg: "md" }}
            display={{ base: "none", md: "inline-flex" }}
          >
            <InputLeftElement>
              <Icon as={FiSearch} color="fg.accent.muted" fontSize="lg" />
            </InputLeftElement>
            <Input placeholder="Search" variant="filled.accent" />
          </InputGroup>
          <HStack spacing={{ base: "2", md: "4" }}>
            <ButtonGroup variant="tertiary.accent" spacing="1">
              <IconButton
                icon={<FiSearch />}
                aria-label="Search"
                display={{ base: "flex", md: "none" }}
                isRound
              />
              <IconButton
                icon={<FiBell />}
                aria-label="Show notification"
                isRound
              />
            </ButtonGroup>
            <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
          </HStack>
        </HStack>
      </Container>
    </Box>
  </Box>
);

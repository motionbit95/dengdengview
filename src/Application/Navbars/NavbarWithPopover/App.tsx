import {
  Avatar,
  Box,
  Button,
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
import { DocumentPopover } from "./DocumentPopover";
import { Logo } from "./Logo";
import { MobileDrawer } from "./MobileDrawer";

export const NavbarWithPopover = () => (
  <Box as="section" minH="lg">
    <Box
      borderBottomWidth="1px"
      bg="bg.surface"
      position="relative"
      zIndex="tooltip"
    >
      <Container py="4">
        <HStack justify="space-between" spacing="8">
          <HStack spacing="10">
            <HStack spacing="3">
              <MobileDrawer />
              <Logo />
            </HStack>
            <ButtonGroup
              size="lg"
              variant="text"
              colorScheme="gray"
              spacing="8"
              display={{ base: "none", lg: "flex" }}
            >
              <Button>Dashbaord</Button>
              <Button>Analysis</Button>
              <DocumentPopover />
              <Button>History</Button>
            </ButtonGroup>
          </HStack>
          <HStack spacing={{ base: "2", md: "4" }}>
            <InputGroup
              maxW="2xs"
              display={{ base: "none", md: "inline-flex" }}
            >
              <InputLeftElement>
                <Icon as={FiSearch} color="fg.muted" fontSize="lg" />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup>
            <ButtonGroup variant="tertiary" spacing="1">
              <IconButton
                icon={<FiSearch />}
                aria-label="Serach"
                display={{ base: "flex", lg: "none" }}
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

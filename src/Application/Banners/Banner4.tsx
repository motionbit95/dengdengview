import {
  Box,
  Button,
  Container,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";

export const BannerWithSlide = () => (
  <Box as="section" pb={{ base: "12", md: "24" }}>
    <Box borderBottomWidth="1px" bg="bg.surface" position="relative">
      <Container py={{ base: "4", md: "3.5" }}>
        <IconButton
          display={{ base: "inline-flex", md: "none" }}
          icon={<FiX />}
          variant="tertiary"
          aria-label="Close banner"
          position="absolute"
          right="3"
          top="2"
        />
        <Stack
          spacing="4"
          justify={{ base: "start", md: "space-between" }}
          direction={{ base: "column", md: "row" }}
        >
          <Box pe={{ base: "4", md: "0" }}>
            <Text fontWeight="medium">Stay Ahead with our Newsletter</Text>
            <Text color="fg.muted">
              Embrace trends, industry insights, and actionable advice.
            </Text>
          </Box>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="3"
            align={{ base: "stretch", md: "center" }}
          >
            <Input placeholder="Enter your E-Mail" minW="2xs" />
            <Button>Sign Up</Button>
            <IconButton
              icon={<FiX />}
              variant="tertiary"
              aria-label="Close banner"
              display={{ base: "none", md: "inline-flex" }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  </Box>
);

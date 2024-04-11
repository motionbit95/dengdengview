import {
  Button,
  Container,
  Divider,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { GoogleIcon } from "./ProviderIcons";

export const LoginWithGoogleOrEmail = () => (
  <Container maxW="md" py={{ base: "12", md: "24" }}>
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Logo />
        <Heading size={{ base: "xs", md: "sm" }}>
          Log in to your account
        </Heading>
      </Stack>
      <Stack spacing="6">
        <Button variant="secondary" leftIcon={<GoogleIcon />}>
          Continue with Google
        </Button>
        <Divider />
        <Stack spacing="4">
          <Input placeholder="Enter your email" />
          <Button>Continue with email</Button>
        </Stack>
      </Stack>
      <Button variant="text" size="sm">
        Continue using Single Sign-on (SSO)
      </Button>
    </Stack>
  </Container>
);

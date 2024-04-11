import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { GoogleIcon } from "./ProviderIcons";

export const LoginWithGradient = () => (
  <Box
    bgGradient={{ sm: "linear(to-r, blue.600, blue.400)" }}
    py={{ base: "12", md: "24" }}
  >
    <Container
      maxW="md"
      py={{ base: "0", sm: "8" }}
      px={{ base: "4", sm: "10" }}
      bg={{ base: "transparent", sm: "bg.surface" }}
      boxShadow={{ base: "none", sm: "xl" }}
      borderRadius={{ base: "none", sm: "xl" }}
    >
      <Stack spacing="8">
        <Stack spacing="6" align="center">
          <Logo />
          <Stack spacing="3" textAlign="center">
            <Heading size="xs">Log in to your account</Heading>
            <Text color="fg.muted">Start making your dreams come true</Text>
          </Stack>
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
        <Text textStyle="sm" color="fg.muted" textAlign="center">
          Having trouble logging in? <Link href="#">Contact us</Link>
        </Text>
        <Text textStyle="xs" color="fg.subtle" textAlign="center">
          By continuing, you acknowledge that you have read, understood, and
          agree to our terms and condition
        </Text>
      </Stack>
    </Container>
  </Box>
);

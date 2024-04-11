import {
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { GitHubIcon, GoogleIcon, TwitterIcon } from "./ProviderIcons";

export const LoginWithEmailOrProvider = () => (
  <Container maxW="md" py={{ base: "12", md: "24" }}>
    <Stack spacing="8">
      <Stack spacing="6">
        <Logo />
        <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
          <Heading size={{ base: "xs", md: "sm" }}>
            Log in to your account
          </Heading>
          <Text color="fg.muted">Start making your dreams come true</Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="4">
          <Input placeholder="Enter your email" />
          <Button>Continue with email</Button>
        </Stack>
        <HStack>
          <Divider />
          <Text textStyle="sm" color="fg.muted">
            OR
          </Text>
          <Divider />
        </HStack>
        <Stack spacing="3">
          <Button variant="secondary" leftIcon={<GoogleIcon />}>
            Continue with Google
          </Button>
          <Button variant="secondary" leftIcon={<TwitterIcon />}>
            Continue with Twitter
          </Button>
          <Button variant="secondary" leftIcon={<GitHubIcon />}>
            Continue with GitHub
          </Button>
        </Stack>
      </Stack>
      <HStack spacing="1" justify="center">
        <Text textStyle="sm" color="fg.muted">
          Having issues? <Link href="#">Contact us</Link>
        </Text>
      </HStack>
    </Stack>
  </Container>
);

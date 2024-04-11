import {
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { GitHubIcon, GoogleIcon, TwitterIcon } from "./ProviderIcons";

export const LoginWithFloatingLabel = () => (
  <Container maxW="md" py={{ base: "12", md: "24" }}>
    <Stack spacing="8">
      <Stack spacing="6">
        <Logo />
        <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
          <Heading size={{ base: "xs", md: "sm" }}>
            Log in to your account
          </Heading>
          <Text color="fg.muted">
            Don't have an account? <Link href="#">Sign up</Link>
          </Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="4" pt="4">
          <FormControl>
            <Input id="email" type="email" placeholder=" " data-peer />
            <FormLabel htmlFor="email" variant="floating">
              Email
            </FormLabel>
          </FormControl>
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
    </Stack>
  </Container>
);

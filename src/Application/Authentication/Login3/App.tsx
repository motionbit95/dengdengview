import {
  Button,
  Checkbox,
  Container,
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
import { GoogleIcon } from "./ProviderIcons";

export const LoginWithEmailPasswordOrGoogle = () => (
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
        <Stack spacing="5">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" placeholder="Enter your email" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" placeholder="********" type="password" />
          </FormControl>
        </Stack>
        <HStack justify="space-between">
          <Checkbox defaultChecked>Remember me</Checkbox>
          <Button variant="text" size="sm">
            Forgot password
          </Button>
        </HStack>
        <Stack spacing="4">
          <Button>Sign in</Button>
          <Button variant="secondary" leftIcon={<GoogleIcon />}>
            Sign in with Google
          </Button>
        </Stack>
      </Stack>
      <Text textStyle="sm" color="fg.muted">
        Don't have an account? <Link href="#"> Sign up</Link>
      </Text>
    </Stack>
  </Container>
);

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

export const LoginWithFlushedInput = () => (
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
        <Stack spacing="-px">
          <FormControl id="email">
            <FormLabel srOnly>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              roundedBottom="0"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel srOnly>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              roundedTop="0"
            />
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
    </Stack>
  </Container>
);

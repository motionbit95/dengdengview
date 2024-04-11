import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { GoogleIcon } from "./ProviderIcons";

export const SignUpForm = () => (
  <Container maxW="md" py={{ base: "12", md: "24" }}>
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Logo />
        <Stack spacing="3" textAlign="center">
          <Heading size={{ base: "xs", md: "sm" }}>Create an account</Heading>
          <Text color="fg.muted">Start making your dreams come true</Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" />
            <FormHelperText color="fg.muted">
              At least 8 characters long
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack spacing="4">
          <Button>Create account</Button>
          <Button variant="secondary" leftIcon={<GoogleIcon />}>
            Sign up with Google
          </Button>
        </Stack>
      </Stack>
      <Text textStyle="sm" color="fg.muted" textAlign="center">
        Already have an account? <Link href="#">Log in</Link>
      </Text>
    </Stack>
  </Container>
);

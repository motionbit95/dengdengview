import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { GoogleIcon } from "./ProviderIcons";
import { NaverLogin } from "../../../Component/MButton";

export const SignUpForm = () => (
  <Container maxW="md" py={{ base: "12", md: "24" }}>
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Logo />
        <Stack spacing="3" textAlign="center">
          <Heading size={{ base: "xs", md: "sm" }}>회원가입하기</Heading>
          <Text color="fg.muted">
            반려동물들을 위한 프리미엄 체험단 댕댕뷰🐶🐱
          </Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl isRequired>
            <FormLabel htmlFor="name">이름</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">이메일</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">비밀번호</FormLabel>
            <Input id="password" type="password" />
            <FormHelperText color="fg.muted">
              8자 이상으로 작성해주세요.
            </FormHelperText>
          </FormControl>
        </Stack>
        <HStack spacing="4">
          <Button fontSize={"lg"} width={"50%"} height={"48px"}>
            회원가입하기
          </Button>
          <NaverLogin />
          {/* <Button variant="secondary" leftIcon={<GoogleIcon />}>
            Sign up with Google
          </Button> */}
        </HStack>
      </Stack>
      <Text textStyle="sm" color="fg.muted" textAlign="center">
        이미 회원이신가요? <Link href="/login">로그인하기</Link>
      </Text>
    </Stack>
  </Container>
);

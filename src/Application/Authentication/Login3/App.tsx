import {
  Box,
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
import { NaverLogin } from "../../../Component/MButton";

export const LoginWithEmailPasswordOrNaver = ({ ...props }) => (
  <Box bgColor="bg.surface">
    <Container maxW="md" py={{ base: "12", md: "24" }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              댕댕뷰 통합 로그인
            </Heading>
            <Text color="fg.muted">
              모든 반려동물이 행복해지는 그날까지 댕댕뷰는 반려인분들과 함께 할
              것을 약속드리겠습니다💑
            </Text>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">이메일</FormLabel>
              <Input
                id="email"
                placeholder="이메일을 입력해주세요"
                type="email"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">비밀번호</FormLabel>
              <Input id="password" placeholder="********" type="password" />
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>자동로그인</Checkbox>
            <Button variant="text" size="sm">
              비밀번호 찾기
            </Button>
          </HStack>
          <HStack spacing="4">
            <Button
              fontSize={"lg"}
              width={"50%"}
              height={"48px"}
              onClick={props.handleSignIn}
            >
              로그인
            </Button>
            {/* <Button variant="secondary" leftIcon={<GoogleIcon />}>
            Sign in with Google
          </Button> */}
            <NaverLogin />
          </HStack>
        </Stack>
        <Text textStyle="sm" color="fg.muted">
          아직 회원이 아니신가요? <Link href="/signup"> 회원가입하기</Link>
        </Text>
      </Stack>
    </Container>
  </Box>
);

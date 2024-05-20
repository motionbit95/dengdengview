import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NaverLogin } from "../../../Component/MButton";
import { signInUser } from "../../../Firebase/Auth";
import React from "react";
import { debug } from "../../../Firebase/Util";

export const LoginWithEmailPasswordOrNaver = ({ ...props }) => {
  const toast = useToast();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    debug("LoginWithEmailPasswordOrNaver", formData);
    signInUser(formData).then(async (response) => {
      if (response.code === "error") {
        toast({
          title: response.message,
          status: response.code,
          duration: 2000,
          isClosable: true,
        });
      } else if (response.code === "success") {
        window.location.href = "/";
      }
    });
  };
  return (
    <Box>
      <Container maxW="md" py={{ base: "12", md: "24" }}>
        <Stack spacing="8">
          <Stack spacing="6">
            {/* <Logo /> */}
            <Center>
              <Image w={20} src={require("../../../Assets/img/LogoText.png")} />
            </Center>
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>통합 로그인</Heading>
              <Text color="fg.muted">
                모든 반려동물이 행복해지는 그날까지 댕댕뷰는 반려인분들과 함께
                할 것을 약속드리겠습니다💑
              </Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">이메일</FormLabel>
                <Input
                  name="email"
                  placeholder="이메일을 입력해주세요"
                  type="email"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">비밀번호</FormLabel>
                <Input
                  name="password"
                  placeholder="********"
                  type="password"
                  onChange={handleChange}
                />
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
                onClick={handleLogin}
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
            아직 회원이 아니신가요?{" "}
            <Link href="/signup"> 간편회원가입하기</Link>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

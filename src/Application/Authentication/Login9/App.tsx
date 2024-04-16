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
  useToast,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { GoogleIcon } from "./ProviderIcons";
import { NaverLogin } from "../../../Component/MButton";
import React from "react";
import { createUser } from "../../../Firebase/Auth";

export const SignUpForm = () => {
  const toast = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const addUser = () => {
    console.log(formData);

    // 회원을 생성합니다.
    createUser(formData).then((response: any) => {
      console.log(response);
      toast({
        title: response.message,
        status: response.code,
        duration: 2000,
        isClosable: true,
      });

      if (response.code === "success") {
        window.location.href = "/login";
      }
    });
  };

  return (
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
              <Input
                name="name"
                type="text"
                placeholder="실명을 입력해주세요(추후 변경이 어렵습니다)"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">이메일</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="유효한 이메일을 입력해주세요(추후 변경이 어렵습니다)"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">비밀번호</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={handleChange}
              />
              <FormHelperText color="fg.muted">
                8자 이상으로 작성해주세요.
              </FormHelperText>
            </FormControl>
          </Stack>
          {/* <HStack spacing="4"> */}
          <Button fontSize={"lg"} height={"48px"} onClick={addUser}>
            간편 회원가입 완료
          </Button>
          {/* <NaverLogin /> */}
          {/* <Button variant="secondary" leftIcon={<GoogleIcon />}>
            Sign up with Google
          </Button> */}
          {/* </HStack> */}
        </Stack>
        <Text textStyle="sm" color="fg.muted" textAlign="center">
          이미 회원이신가요? <Link href="/login">로그인하기</Link>
        </Text>
      </Stack>
    </Container>
  );
};

import {
  Button,
  Center,
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
  useToast,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { GoogleIcon } from "./ProviderIcons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../../Firebase/Auth";

export const LoginWithFlushedInput = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const signIn = () => {
    console.log(formData);
    adminLogin(formData).then((response: any) => {
      console.log(response);
      if (response.code === "error") {
        toast({
          title: response.message,
          status: response.code,
          duration: 2000,
          isClosable: true,
        });
      } else if (response.code === "success") {
        navigate("/admin/dashboard");
      }
    });
  };
  return (
    <Container maxW="md">
      <Center minH={"100vh"}>
        <Stack spacing="8">
          <Stack spacing="6">
            <Logo />
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>
                관리자 페이지입니다.
              </Heading>
              <Text color="fg.muted">댕댕뷰 제휴 광고주만 접속가능합니다.</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="-px">
              <FormControl id="email">
                <FormLabel srOnly>아이디</FormLabel>
                <Input
                  defaultValue={localStorage
                    .getItem("dang_admin_id")
                    ?.toString()}
                  name="email"
                  type="email"
                  placeholder="아이디"
                  roundedBottom="0"
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel srOnly>패스워드</FormLabel>
                <Input
                  defaultValue={localStorage
                    .getItem("dang_admin_pw")
                    ?.toString()}
                  name="password"
                  type="password"
                  placeholder="패스워드"
                  roundedTop="0"
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                />
              </FormControl>
            </Stack>
            {/* 추후 기능 추가 */}
            {/* <HStack justify="space-between">
          <Button variant="text" size="sm">
            비밀번호 찾기
          </Button>
        </HStack> */}
            <Stack spacing="4">
              <Button onClick={signIn}>관리자 페이지 로그인하기</Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </Container>
  );
};

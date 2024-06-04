import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
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
import { IoClose } from "react-icons/io5";

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
    <Box height={"100vh"}>
      <Container py={{ base: "12", md: "24" }} height={"full"}>
        <Box
          w={"full"}
          display={{ base: "flex", md: "none" }}
          justifyContent={"end"}
        >
          <IconButton
            size={"lg"}
            icon={<IoClose />}
            onClick={() => (window.location.href = "/")}
            aria-label="closeButton"
            bgColor={"transparent"}
            color={"black"}
          />
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          align={"center"}
          spacing={{ base: "8", md: "16" }}
          height={"full"}
        >
          <Stack
            h={"full"}
            // align={{ base: "center", md: "start" }}
            spacing={{ base: "8", md: "16" }}
            maxW={"xl"}
            w={{ base: "auto", md: "xl" }}
          >
            <Stack spacing="6">
              {/* <Logo /> */}
              {/* <Image w={20} src={require("../../../Assets/img/LogoText.png")} /> */}
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                fontFamily={"Cafe24Ssurround"}
              >
                댕댕뷰
              </Text>
            </Stack>
            <Stack spacing="6">
              <Stack spacing={{ base: "2", md: "3" }}>
                <Heading size={{ base: "xs", md: "sm" }}>로그인</Heading>
                <Text color="fg.muted" whiteSpace={"pre-line"}>
                  {`모든 반려동물이 행복해지는 그날까지 댕댕뷰는 
                  반려인분들과 함께 할 것을 약속드리겠습니다💑`}
                </Text>
              </Stack>
              <Stack spacing="5">
                <FormControl>
                  {/* <FormLabel htmlFor="email">이메일</FormLabel> */}
                  <Input
                    name="email"
                    bg={"gray.50"}
                    fontSize={"sm"}
                    placeholder="이메일을 입력해주세요"
                    type="email"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  {/* <FormLabel htmlFor="password">비밀번호</FormLabel> */}
                  <Input
                    name="password"
                    bg={"gray.50"}
                    fontSize={"sm"}
                    placeholder="비밀번호를 입력해주세요"
                    type="password"
                    onChange={handleChange}
                  />
                </FormControl>
              </Stack>
              <HStack justify="flex-end">
                {/* <Checkbox defaultChecked>자동로그인</Checkbox> */}
                <Button variant="text" size="sm">
                  비밀번호 찾기
                </Button>
              </HStack>
              <HStack justifyContent={"space-between"} w={"full"}>
                <Button
                  flex={1}
                  fontSize={"lg"}
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
            <Box mb={24} textAlign={"center"}>
              <Text textStyle="sm" color="fg.muted">
                아직 회원이 아니신가요?{" "}
                <Link href="/signup"> 간편회원가입하기</Link>
              </Text>
            </Box>
          </Stack>
          <Box
            borderRadius={"2xl"}
            bgImage="linear-gradient(to top right,  rgba(11, 197, 234, 1), rgba(25, 219, 138, 1))"
            display={{ base: "none", md: "block" }}
            w={{ base: "md", md: "full" }}
            h={"full"}
            // h={"524px"}
          />
        </Stack>
      </Container>
    </Box>
  );
};

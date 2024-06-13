import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  IconButton,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { IoClose } from "react-icons/io5";

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
    fetch(process.env.REACT_APP_SERVER_URL + "/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        console.log(res);
        return await res.json();
      })
      .then((data) => {
        console.log(data);
        toast({
          title: data.message,
          status: data.code,
          duration: 2000,
          isClosable: true,
        });

        console.log("계정 생성 완료", data.id);

        fetch(process.env.REACT_APP_SERVER_URL + "/auth/add/" + data.id, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            id: data.id,
            createdAt: new Date(),
            channel: "password",
          }),
        })
          .then(async (res) => {
            console.log(res);
            return await res.json();
          })
          .then(async (data) => {
            console.log(data);
            window.location.href = "/login";
          })
          .catch(async (error) => {
            console.error("Failed to fetch:", error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to fetch:", error.message);
      });
  };

  return (
    <Container py={{ base: "12", md: "24" }} h={"100vh"}>
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
        h={"full"}
      >
        <Stack h={"full"} maxW={"xl"} w={{ base: "auto", md: "xl" }}>
          <Stack spacing="6" mb={16}>
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
            {/* <Logo /> */}
            <Stack spacing="3">
              <Heading size={{ base: "xs", md: "sm" }}>회원가입하기</Heading>
              <Text color="fg.muted">
                반려동물들을 위한 프리미엄 체험단 댕댕뷰🐶🐱
              </Text>
            </Stack>
            <Stack spacing="5">
              <FormControl isRequired>
                {/* <FormLabel htmlFor="name">이름</FormLabel> */}
                <Input
                  name="name"
                  type="text"
                  bg={"gray.50"}
                  fontSize={"sm"}
                  placeholder="실명을 입력해주세요"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                {/* <FormLabel htmlFor="email">이메일</FormLabel> */}
                <Input
                  name="email"
                  type="email"
                  bg={"gray.50"}
                  fontSize={"sm"}
                  placeholder="유효한 이메일을 입력해주세요"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                {/* <FormLabel htmlFor="password">비밀번호</FormLabel> */}
                <Input
                  name="password"
                  type="password"
                  bg={"gray.50"}
                  fontSize={"sm"}
                  placeholder="비밀번호를 입력해주세요"
                  onChange={handleChange}
                />
                {/* <FormHelperText color="fg.muted">
                  8자 이상으로 작성해주세요.
                </FormHelperText> */}
              </FormControl>
            </Stack>
            <Stack spacing="6">
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
          </Stack>
          <Box pt={{ base: "8", md: "16" }}>
            <Text textStyle="sm" color="fg.muted" textAlign="center">
              이미 회원이신가요? <Link href="/login">로그인하기</Link>
            </Text>
          </Box>
        </Stack>
        <Box
          borderRadius={"2xl"}
          bgImage="linear-gradient(to top right,  rgba(11, 197, 234, 1), rgba(25, 219, 138, 1))"
          display={{ base: "none", md: "block" }}
          w={"full"}
          h={"full"}
        />
      </Stack>
    </Container>
  );
};

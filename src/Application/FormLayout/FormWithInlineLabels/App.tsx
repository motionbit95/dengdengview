import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Stack,
  StackDivider,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Dropzone } from "./Dropzone";
import {
  RadioButton,
  RadioButtonGroup,
} from "../../FormElements/RadioButtonGroup/RadioButtonGroup";
import { AddressInput } from "../../../Component/MInput";
import { CheckboxCardGroupContainer } from "../../FormElements/CheckboxCardGroup/App";

export const FormWithInlineLabels = () => (
  <Container>
    <Stack spacing="5">
      <Stack
        spacing="4"
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
      >
        <Box>
          <Text textStyle="lg" fontWeight="medium">
            기본정보수정
          </Text>
        </Box>
        <Button alignSelf="start">수정</Button>
      </Stack>
      <Divider />
      <Stack spacing="5" divider={<StackDivider />}>
        <FormControl id="picture">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "4" }}
            justify="space-between"
          >
            <FormLabel variant="inline">프로필 사진</FormLabel>
            <Stack
              spacing={{ base: "3", md: "5" }}
              direction={{ base: "column", sm: "row" }}
              width="full"
              maxW={{ md: "3xl" }}
            >
              <Avatar size="2xl" bg={"gray.300"} />
              <Dropzone width="full" />
            </Stack>
          </Stack>
        </FormControl>
        <FormControl id="name">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "4" }}
            justify="space-between"
          >
            <FormLabel variant="inline">성함</FormLabel>
            <Input maxW={{ md: "3xl" }} placeholder="실명 입력" />
          </Stack>
        </FormControl>
        <FormControl id="nickname">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "4" }}
            justify="space-between"
          >
            <FormLabel variant="inline">닉네임</FormLabel>
            <Input maxW={{ md: "3xl" }} placeholder="닉네임 입력" />
          </Stack>
        </FormControl>
        <FormControl id="gender">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "4" }}
            // justify="space-between"
          >
            <FormLabel variant="inline">성별</FormLabel>
            <RadioButtonGroup defaultValue="남">
              <RadioButton value="남">남성</RadioButton>
              <RadioButton value="여">여성</RadioButton>
            </RadioButtonGroup>
          </Stack>
        </FormControl>
        <FormControl id="gender">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "4" }}
            // justify="space-between"
          >
            <FormLabel variant="inline">출생연도</FormLabel>
            <Select>
              {[
                Array.from({ length: 100 }).map((_, index) => (
                  <option key={new Date().getFullYear() - index}>
                    {new Date().getFullYear() - index}
                  </option>
                )),
              ]}
            </Select>
          </Stack>
        </FormControl>
        <FormControl id="phone">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "4" }}
            justify="space-between"
          >
            <FormLabel variant="inline">휴대폰번호</FormLabel>
            <Stack w={"full"} maxW={{ md: "3xl" }} spacing={0}>
              <Input
                maxW={{ md: "3xl" }}
                type="tel"
                placeholder="휴대폰번호 입력"
              />
              {/* <FormHelperText>
                일부 체험단 신청 시 휴대폰 인증이 필요합니다.
              </FormHelperText> */}
            </Stack>
          </Stack>
        </FormControl>
        <FormControl id="email">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "4" }}
            justify="space-between"
          >
            <FormLabel variant="inline">이메일</FormLabel>
            <Input
              type="email"
              maxW={{ md: "3xl" }}
              placeholder="이메일 입력"
            />
          </Stack>
        </FormControl>
        <FormControl id="website">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "4" }}
            justify="space-between"
          >
            <FormLabel variant="inline">네이버 블로그 주소</FormLabel>
            <InputGroup maxW={{ md: "3xl" }}>
              <InputLeftAddon>https://blog.naver.com/</InputLeftAddon>
              <Input placeholder="네이버 아이디 입력" />
            </InputGroup>
          </Stack>
        </FormControl>
        <FormControl id="address">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "4" }}
            justify="space-between"
          >
            <FormLabel variant="inline">주소</FormLabel>
            <AddressInput setValue={(value: string) => console.log(value)} />
          </Stack>
        </FormControl>

        <FormControl id="agree">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "4" }}
            justify="space-between"
          >
            <FormLabel variant="inline">마케팅 수신동의</FormLabel>
            <CheckboxCardGroupContainer
              list={[
                {
                  title:
                    "마케팅 및 설문조사, 이벤트 정보의 이메일 및 문자(카카오톡 문자 포함) 수신 동의합니다.",
                  description: "",
                },
              ]}
            />
          </Stack>
        </FormControl>

        <Flex direction="row-reverse">
          <Button>수정</Button>
        </Flex>
      </Stack>
    </Stack>
  </Container>
);

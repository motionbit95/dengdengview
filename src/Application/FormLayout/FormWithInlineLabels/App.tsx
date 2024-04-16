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
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Stack,
  StackDivider,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Dropzone } from "./Dropzone";
import {
  RadioButton,
  RadioButtonGroup,
} from "../../FormElements/RadioButtonGroup/RadioButtonGroup";
import { AddressInput } from "../../../Component/MInput";
import { CheckboxCardGroupContainer } from "../../FormElements/CheckboxCardGroup/App";
import React, { useEffect, useRef, useState } from "react";
import { IoWarning } from "react-icons/io5";
import { updateDoc } from "../../../Firebase/Database";
import { CheckboxCard } from "../../FormElements/CheckboxCardGroup/CheckboxCardGroup";

interface UserData {
  userInfo: {
    id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    nickname: string;
    gender: string;
    image: string;
    blog: string;
    address: string;
    zonecode: string;
    street: string;
    birthyear: string;
    agree: boolean;
  };
}

export const FormWithInlineLabels = (props: UserData) => {
  const toast = useToast();
  const { userInfo } = props;

  const [profileImage, setProfileImage] = useState("");
  const [gender, setGender] = useState("");
  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log(userInfo);
    setFormData(userInfo);

    setProfileImage(userInfo.image);
    setGender(userInfo.gender);
  }, [userInfo]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = () => {
    console.log(formData);
    updateDoc("User", userInfo.id, formData).then(() => {
      toast({
        title: "프로필이 수정 되었습니다.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    });
    // console.log(formData);
  };

  return (
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
          <Button alignSelf="start" onClick={submit}>
            수정
          </Button>
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
                <Avatar
                  size={"2xl"}
                  src={profileImage}
                  // alt="profile"  // 이미지일 경우 아래 사용
                  // fallback={<Skeleton />}
                  // aspectRatio={1}
                  // rounded={"full"}
                  // objectFit="cover"
                  // flex="1"
                />
                <Dropzone
                  width="full"
                  setUrl={(data: string) => {
                    setProfileImage(data);
                    setFormData({ ...formData, image: data });
                  }}
                />
              </Stack>
            </Stack>
          </FormControl>
          <FormControl id="name">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "4" }}
              justify="space-between"
            >
              <FormLabel variant="inline">
                <Stack spacing={0}>
                  <Text>성함</Text>
                  <FormHelperText color="fg.muted">
                    <HStack>
                      <Icon as={IoWarning} boxSize="4" />
                      <Text>변경 불가능 합니다.</Text>
                    </HStack>
                  </FormHelperText>
                </Stack>
              </FormLabel>
              <Input
                maxW={{ md: "3xl" }}
                placeholder="실명 입력"
                defaultValue={userInfo.name}
                isDisabled
              />
            </Stack>
          </FormControl>
          <FormControl id="nickname">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "4" }}
              justify="space-between"
            >
              <FormLabel variant="inline">닉네임</FormLabel>
              <Input
                name="nickname"
                maxW={{ md: "3xl" }}
                placeholder="닉네임 입력"
                defaultValue={userInfo.nickname}
                onChange={handleChange}
              />
            </Stack>
          </FormControl>
          <FormControl id="gender">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "4" }}
              // justify="space-between"
            >
              <FormLabel variant="inline">성별</FormLabel>
              {/* <RadioGroup
                name="gender"
                colorScheme="brand"
                defaultValue={userInfo.gender}
                onChange={(value: string) => {
                  setFormData({ ...formData, gender: value });
                }}
              >
                <HStack>
                  <Radio value="남">남성</Radio>
                  <Radio value="여">여성</Radio>
                </HStack>
              </RadioGroup> */}
              <RadioButtonGroup
                defaultValue={gender}
                onChange={(value: string) => {
                  setFormData({ ...formData, gender: value });
                }}
              >
                <RadioButton value="남">남성</RadioButton>
                <RadioButton value="여">여성</RadioButton>
              </RadioButtonGroup>
            </Stack>
          </FormControl>
          <FormControl id="birthyear">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "4" }}
              // justify="space-between"
            >
              <FormLabel variant="inline">출생연도</FormLabel>
              <Select
                defaultValue={new Date().getFullYear().toString()}
                onChange={(e) => {
                  setFormData({ ...formData, birthyear: e.target.value });
                }}
              >
                {[
                  Array.from({ length: 100 }).map((_, index) => (
                    <option
                      key={index}
                      value={new Date().getFullYear() - index}
                    >
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
                  defaultValue={userInfo.phone}
                  name="phone"
                  onChange={handleChange}
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
              <FormLabel variant="inline">
                <Stack spacing={0}>
                  <Text>이메일</Text>
                  <FormHelperText color="fg.muted">
                    <HStack>
                      <Icon as={IoWarning} boxSize="4" />
                      <Text>변경 불가능 합니다.</Text>
                    </HStack>
                  </FormHelperText>
                </Stack>
              </FormLabel>
              <Input
                type="email"
                maxW={{ md: "3xl" }}
                placeholder="이메일 입력"
                defaultValue={userInfo.email}
                isDisabled
                name="email"
                onChange={handleChange}
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
                <Input
                  defaultValue={userInfo.blog}
                  placeholder="네이버 아이디 입력"
                  name="blog"
                  onChange={handleChange}
                />
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
              <AddressInput
                onChange={(address: any) => {
                  setFormData({
                    ...formData,
                    ...{ zonecode: address.zonecode, street: address.street },
                  });
                }}
                street={userInfo.street}
                zonecode={userInfo.zonecode}
                address={userInfo.address}
              />
            </Stack>
          </FormControl>

          <FormControl id="agree">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "4" }}
              justify="space-between"
            >
              <FormLabel variant="inline">마케팅 수신동의</FormLabel>
              <CheckboxCard
                value={"marketing"}
                checkboxProps={{ isChecked: userInfo.agree }}
              >
                <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
                  {
                    "마케팅 및 설문조사, 이벤트 정보의 이메일 및 문자(카카오톡 문자 포함) 수신 동의합니다."
                  }
                </Text>
              </CheckboxCard>
            </Stack>
          </FormControl>

          <Flex direction="row-reverse">
            <Button onClick={submit}>수정</Button>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};

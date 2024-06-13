import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputAddon,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
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
import { auth } from "../../../Firebase/Config";
import PhoneAuth from "../../../Component/PhoneAuth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

interface UserData {
  userInfo: {
    id: string;
    name: string;
    email: string;
    phone: string;
    nickname: string;
    gender: string;
    image: string;
    blog: string;
    address: string;
    zonecode: string;
    street: string;
    birthyear: string;
    agree: boolean;
    instagram: string;
    influence: string;
  };
}

export const FormWithInlineLabels = (props: UserData) => {
  const toast = useToast();
  const { userInfo } = props;

  const [profileImage, setProfileImage] = useState("");
  const [gender, setGender] = useState("");
  const [formData, setFormData] = useState<any>({});
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [isEditPhoneNumber, setIsEditPhoneNumber] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(userInfo);
  //   setFormData(userInfo);

  //   setProfileImage(userInfo?.image);
  //   setGender(userInfo?.gender);
  // }, [userInfo]);

  const deleteUser = async () => {
    if (window.confirm("탈퇴하시겠습니까?")) {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fetch(process.env.REACT_APP_SERVER_URL + "/auth/delete/" + user.uid, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(async (res) => {
              console.log(res);
            })
            .catch((error) => {
              console.error("Failed to fetch:", error.message);
            });

          fetch(process.env.REACT_APP_SERVER_URL + "/auth/delete/" + user.uid, {
            method: "DELETE",
          })
            .then(async (res) => {
              console.log(res);
            })
            .then(async (data) => {
              console.log("data", data);

              signOut(auth).catch((error) => {
                console.log(error);
              });
              navigate("/login");
            })
            .catch((error) => {
              console.error("Failed to fetch:", error.message);
            });
        }
      });
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fetch(process.env.REACT_APP_SERVER_URL + "/auth/get/" + user.uid)
          .then(async (res) => {
            console.log(res);
            return await res.json();
          })
          .then(async (data) => {
            console.log("data", data);
            // setFormData(data);
            // setProfileImage(data?.image);
            // setGender(data?.gender);
          })
          .catch(async (error) => {
            console.error("Failed to fetch:", error.message);
          });
      }
    });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  const submit = () => {
    console.log(formData);
    if (window.confirm("유저 정보를 수정하시겠습니까?")) {
      fetch(process.env.REACT_APP_SERVER_URL + "/auth/update/" + userInfo?.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(async (res) => {
          console.log(res);

          // window.location.reload();
        })
        .catch((error) => {
          console.error("Failed to fetch:", error.message);
        });
    }
    // updateDoc("User", userInfo?.id, formData).then(() => {
    //   toast({
    //     title: "프로필이 수정 되었습니다.",
    //     status: "success",
    //     duration: 2000,
    //     isClosable: true,
    //   });
    // });
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
            <Text textStyle={{ base: "2xl", md: "3xl" }} fontWeight="medium">
              기본정보수정
            </Text>
          </Box>
          {/* <Button alignSelf="start" onClick={submit}>
            수정
          </Button> */}
        </Stack>
        <Divider />
        <Stack spacing="5" divider={<StackDivider />}>
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
                      {/* <Icon as={IoWarning} boxSize="4" /> */}
                      <Text>변경 불가능 합니다.</Text>
                    </HStack>
                  </FormHelperText>
                </Stack>
              </FormLabel>
              <Input
                maxW={{ md: "3xl" }}
                placeholder="실명 입력"
                defaultValue={userInfo?.name}
                isDisabled
                fontSize={{ base: "sm", md: "md" }}
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
                defaultValue={userInfo?.nickname}
                onChange={handleChange}
                fontSize={{ base: "sm", md: "md" }}
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
                defaultValue={userInfo?.gender}
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
                defaultValue={userInfo?.gender}
                value={formData?.gender ? formData?.gender : userInfo?.gender}
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
                w={"50%"}
                fontSize={{ base: "sm", md: "md" }}
                defaultValue={userInfo?.birthyear}
                value={
                  formData?.birthyear
                    ? formData?.birthyear
                    : userInfo?.birthyear
                }
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
              <FormLabel variant="inline">전화번호</FormLabel>
              <Stack
                direction={"row"}
                w={"full"}
                maxW={{ md: "3xl" }}
                spacing={2}
              >
                {!isEditPhoneNumber && (
                  <>
                    <Input
                      maxW={{ md: "3xl" }}
                      type="tel"
                      isDisabled={true}
                      _disabled={{ bgColor: "gray.50" }}
                      placeholder="전화번호 입력"
                      defaultValue={userInfo?.phone}
                      // value={formData?.phone}
                      name="phone"
                      onChange={handleChange}
                      fontSize={{ base: "sm", md: "md" }}
                    />
                    <Button onClick={() => setIsEditPhoneNumber(true)}>
                      변경하기
                    </Button>
                  </>
                )}
                {isEditPhoneNumber && (
                  <PhoneAuth
                    setPhoneVerify={(uid: string) => {
                      console.log(uid);
                      setIsEditPhoneNumber(false);
                    }}
                  />
                )}
                {/* <FormHelperText>
                일부 체험단 신청 시 휴대폰 인증이 필요합니다.
              </FormHelperText> */}
              </Stack>
            </Stack>
          </FormControl>
          <Stack spacing={3}>
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
                        {/* <Icon as={IoWarning} boxSize="4" /> */}
                        <Text>변경 불가능 합니다.</Text>
                      </HStack>
                    </FormHelperText>
                  </Stack>
                </FormLabel>
                <Input
                  fontSize={{ base: "sm", md: "md" }}
                  type="email"
                  maxW={{ md: "3xl" }}
                  placeholder="이메일 입력"
                  defaultValue={userInfo?.email}
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
                {isMobile ? (
                  <InputGroup flexDirection={"column"} gap={1}>
                    <InputAddon
                      fontSize={"sm"}
                      borderRadius={"lg"}
                      border={"1px solid #d9d9d9"}
                      px={3}
                      overflow={"hidden"}
                    >
                      https://blog.naver.com/
                    </InputAddon>
                    <Input fontSize={"sm"} defaultValue={userInfo?.blog} />
                  </InputGroup>
                ) : (
                  <InputGroup maxW={{ md: "3xl" }}>
                    <InputLeftAddon>https://blog.naver.com/</InputLeftAddon>
                    <Input
                      defaultValue={userInfo?.blog}
                      placeholder="네이버 아이디 입력"
                      name="blog"
                      onChange={handleChange}
                    />
                  </InputGroup>
                )}
              </Stack>
            </FormControl>
            <FormControl id="instagram">
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={{ base: "1.5", md: "4" }}
                justify="space-between"
              >
                <FormLabel variant="inline">인스타그램 주소</FormLabel>
                {isMobile ? (
                  <InputGroup flexDirection={"column"} gap={1}>
                    <InputAddon
                      fontSize={"sm"}
                      borderRadius={"lg"}
                      border={"1px solid #d9d9d9"}
                      px={3}
                      overflow={"hidden"}
                    >
                      https://www.instagram.com/
                    </InputAddon>
                    <Input fontSize={"sm"} defaultValue={userInfo?.instagram} />
                  </InputGroup>
                ) : (
                  <InputGroup maxW={{ md: "3xl" }}>
                    <InputLeftAddon>https://www.instagram.com/</InputLeftAddon>
                    <Input
                      defaultValue={userInfo?.instagram}
                      placeholder="인스타그램 아이디 입력"
                      name="instagram"
                      onChange={handleChange}
                    />
                  </InputGroup>
                )}
              </Stack>
            </FormControl>
            <FormControl id="influence">
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={{ base: "1.5", md: "4" }}
                justify="space-between"
              >
                <FormLabel variant="inline">네이버 인플루언서 등록</FormLabel>
                {/* <InputGroup maxW={{ md: "3xl" }}>
                   <InputLeftAddon>https://www.instagram.com/</InputLeftAddon>
                  <Input
                    defaultValue={userInfo?.influence}
                    placeholder="네이버 인플루언서 정보 등록"
                    name="influence"
                    onChange={handleChange}
                    fontSize={{ base: "sm", md: "md" }}
                  />
                </InputGroup> */}
                <Stack w={"full"} maxW={{ md: "3xl" }} spacing={0}>
                  {isMobile ? (
                    <InputGroup flexDirection={"column"} gap={1}>
                      <InputAddon
                        fontSize={"sm"}
                        borderRadius={"lg"}
                        border={"1px solid #d9d9d9"}
                        px={3}
                        overflow={"hidden"}
                      >
                        https://in.naver/
                      </InputAddon>
                      <Input
                        fontSize={"sm"}
                        defaultValue={userInfo?.influence}
                      />
                    </InputGroup>
                  ) : (
                    <InputGroup maxW={{ md: "3xl" }}>
                      <InputLeftAddon>https://in.naver/</InputLeftAddon>
                      <Input
                        defaultValue={userInfo?.influence}
                        placeholder="네이버 인플루언서 정보 등록"
                        name="influence"
                        onChange={handleChange}
                        fontSize={{ base: "sm", md: "md" }}
                      />
                    </InputGroup>
                  )}
                  <FormHelperText
                    color="fg.muted"
                    fontSize={{ base: "xs", md: "sm" }}
                  >
                    <Text>
                      https://in.naver 로 시작되는 본인 소유의 네이버 인플루언서
                      홈 주소를 오타 없이 입력해 주세요.
                    </Text>
                  </FormHelperText>
                </Stack>
              </Stack>
            </FormControl>
          </Stack>
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
                street={userInfo?.street}
                zonecode={userInfo?.zonecode}
                address={userInfo?.address}
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
                value={"agree"}
                checkboxProps={{ isChecked: userInfo?.agree }}
                onClick={() => {
                  setFormData({
                    ...formData,
                    ...{ agree: !formData?.agree },
                  });
                }}
              >
                <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
                  {
                    "마케팅 및 설문조사, 이벤트 정보의 이메일 및 문자(카카오톡 문자 포함) 수신 동의합니다."
                  }
                </Text>
              </CheckboxCard>
            </Stack>
          </FormControl>

          <Stack>
            <Flex cursor={"pointer"} onClick={deleteUser}>
              <Text
                fontWeight="bold"
                opacity={0.5}
                fontSize={{ base: "sm", md: "md" }}
              >
                탈퇴하기
              </Text>
            </Flex>
            <Flex direction="row-reverse">
              <Button onClick={submit}>수정하기</Button>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

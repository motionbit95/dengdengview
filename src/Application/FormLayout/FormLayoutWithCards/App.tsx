import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Stack,
  StackDivider,
  Text,
  useToast,
} from "@chakra-ui/react";
import { PersonalInfoCard } from "./AddressCard";
import { ProfileCard } from "./ProfileCard";
import { useEffect, useState } from "react";
import ConfirmBox from "../../../Component/ConfirmBox";
import { isExist } from "../../../Firebase/Util";

export const FormLayoutWithCards = ({ ...props }) => {
  const { campain } = props?.campain ? props?.campain : null;
  const [formData, setFormData] = useState(campain);
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const alert = (errorMsg: string) => {
    toast({
      title: errorMsg,
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    });
  };

  const handleChange = (value: any) => {
    setFormData({ ...formData, ...value });
  };

  const confirmData = () => {
    if (!isExist("name", formData)) {
      alert("체험단명을 입력하세요.");
      return;
    }

    if (!isExist("startDate", formData) || !isExist("endDate", formData)) {
      alert("모집일정을 입력하세요.");
      return;
    }

    if (!isExist("openDate", formData)) {
      alert("발표일을 입력하세요.");
      return;
    }

    if (!isExist("reviewStart", formData) || !isExist("reviewEnd", formData)) {
      alert("리뷰일정을 입력하세요.");
      return;
    }

    if (!isExist("targetCnt", formData)) {
      alert("모집인원을 입력하세요.");
      return;
    }

    if (!isExist("type", formData)) {
      alert("모집구분을 입력하세요.");
      return;
    }

    if (!isExist("images", formData)) {
      alert("상세 이미지를 1장 이상 업로드해주세요.");
      return;
    }

    if (!isExist("product", formData)) {
      alert("제품 설명을 입력하세요.");
      return;
    }

    if (!isExist("mission_description", formData)) {
      alert("리뷰어 미션을 입력하세요.");
      return;
    }

    if (!isExist("keywords", formData)) {
      alert("필수 키워드를 입력하세요.");
      return;
    }

    setIsOpen(true);
  };
  return (
    <Container py={{ base: "4", md: "8" }}>
      <Stack
        spacing="5"
        divider={<StackDivider />}
        direction={{ base: "column", lg: "row" }}
      >
        <Stack
          w={"full"}
          spacing={{ base: "5", lg: "8" }}
          // justify="space-between"
        >
          <Box flexShrink={0}>
            <Text textStyle="lg" fontWeight="medium">
              체험단 모집 정보
            </Text>
          </Box>
          <PersonalInfoCard
            onChange={(value: any) => {
              console.log(value);
              handleChange(value);
            }}
            campain={campain}
            maxW={{ lg: "3xl" }}
          />
        </Stack>

        <Stack
          w={"full"}
          spacing={{ base: "5", lg: "8" }}
          // justify="space-between"
        >
          <Box flexShrink={0}>
            <Text textStyle="lg" fontWeight="medium">
              체험 제품 정보
            </Text>
          </Box>
          <ProfileCard
            onChange={(value: any) => {
              console.log(value);
              handleChange(value);
            }}
            campain={campain}
            maxW={{ lg: "3xl" }}
          />
        </Stack>
      </Stack>

      <Flex direction="row-reverse" py="4">
        <HStack>
          <Button
            colorScheme="gray"
            variant="outline"
            onClick={() => props.onCancel()}
          >
            취소
          </Button>
          {/* <Button type="submit" onClick={() => props.onSave(formData)}>
            저장
          </Button> */}
          <ConfirmBox
            onClick={() => {
              confirmData();
            }}
            isOpen={isOpen}
            onConfirm={() => {
              props.onSave(formData);
            }}
            onClose={() => setIsOpen(false)}
            title={"확인"}
            buttonText={"저장"}
            discription={"체험단를 저장하시겠습니까?"}
          >
            저장
          </ConfirmBox>
        </HStack>
      </Flex>
    </Container>
  );
};

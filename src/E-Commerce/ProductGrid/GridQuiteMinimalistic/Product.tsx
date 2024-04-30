import {
  AspectRatio,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  Skeleton,
  Stack,
  StackDivider,
  Tag,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Campain, calculateDday, campains } from "./_data";
import { useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { MdCheck, MdReviews } from "react-icons/md";
import { createDoc, updateDoc } from "../../../Firebase/Database";
import { formattedDate } from "../../../Firebase/Util";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ClipboardInput } from "@ark-ui/react";
import { BiClipboard, BiCopy } from "react-icons/bi";
import { useState } from "react";
import { addDoc } from "firebase/firestore";

interface Props {
  campain: Campain;
}

export const Product = ({ ...props }) => {
  const { campain } = props;
  const { onOpen, isOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();
  const [url, setUrl] = useState<string>("");

  // 텍스트를 클립보드에 복사하는 함수
  function copyToClipboard(text: string) {
    // 지원되는 브라우저에서는 navigator.clipboard.writeText()를 사용하여 클립보드에 텍스트를 복사합니다.
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast({
            title: "",
            description: "텍스트가 클립보드에 복사되었습니다.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
        })
        .catch((err) => {
          console.error(
            "텍스트를 클립보드에 복사하는 동안 오류가 발생했습니다:",
            err
          );
        });
    } else {
      // 지원되지 않는 브라우저에서는 document.execCommand()를 사용하여 텍스트를 클립보드에 복사합니다.
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast({
        title: "",
        description: "텍스트가 클립보드에 복사되었습니다.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  // 예시 텍스트
  const textToCopy =
    "https://firebasestorage.googleapis.com/v0/b/dangdangview.appspot.com/o/dangdang_banner.png?alt=media";

  const handleSubmit = async () => {
    console.log(url);
    console.log(campain);

    // fetch를 사용하여 POST 요청을 보냅니다.
    fetch("http://localhost:3001/crawl", {
      method: "POST", // 요청 메서드를 POST로 지정합니다.
      headers: {
        "Content-Type": "application/json", // 요청 헤더에 Content-Type을 JSON으로 지정합니다.
      },
      body: JSON.stringify({ url: url }), // 요청 본문에 데이터를 JSON 문자열로 변환하여 넣습니다.
    })
      .then((response) => {
        // 서버에서 응답을 받으면 JSON 형식으로 파싱합니다.
        return response.json();
      })
      .then((data) => {
        // 파싱된 응답 데이터를 이용하여 처리합니다.
        console.log("서버로부터 받은 데이터:", data);

        // 데이터를 저장합니다.
        createDoc("Review", {
          ...data,
          url: url,
          uid: campain.uid,
          cid: campain.cid,
        }).then(async () => {
          onClose();
        });

        if (data.code === "error") {
          console.log("error");
          toast({
            title: "",
            description: data.message,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
        }
      })
      .catch((error) => {
        // 오류가 발생하면 오류를 콘솔에 출력합니다.
        console.error("데이터를 보내는 동안 오류 발생:", error);
      });
  };
  return (
    <HStack
      // spacing="4"
      justifyContent="space-between"
    >
      <HStack
        _hover={{ opacity: 0.7, cursor: "pointer" }}
        onClick={() => {
          navigate(`/campain/${campain.doc_id}`);
        }}
      >
        <Box position="relative" className="group" p={4}>
          <AspectRatio ratio={1} w={100} h={100}>
            <Image
              src={campain.images?.[0]}
              alt={campain.name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius="lg"
            />
          </AspectRatio>
          {/* <Tag size={"sm"} position="absolute" top="2" left="2">
          #{campain.doc_id.substring(0, 8)}
        </Tag> */}
        </Box>
        <Stack spacing="1">
          <Stack justifyContent="space-between">
            <Tag
              colorScheme={"green"}
              w={"fit-content"}
              size={{ base: "sm", md: "md" }}
            >
              {campain.step === 0 ? "신청중" : "선정완료"}
            </Tag>
            <Text
              textOverflow={"ellipsis"}
              overflow="hidden"
              wordBreak={"break-word"}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
              color={useColorModeValue("black", "white")}
              fontSize="lg"
              fontWeight="semibold"
              letterSpacing="wider"
              textTransform="uppercase"
            >
              {campain.name}
            </Text>
          </Stack>
          <Text opacity={0.5}>{campain.endDate.replaceAll("-", ".")}</Text>
        </Stack>
      </HStack>
      <Stack>
        {(campain.step === 1 || campain.step === 2) && (
          <Button
            isDisabled={campain.step === 2}
            colorScheme="black"
            variant={"outline"}
            h={{ base: "4rem", md: "2.5rem" }}
            onClick={() => {
              if (window.confirm("사용등록 하시겠습니까?")) {
                updateDoc("Tester", campain.testerId, {
                  step: 2,
                  useDate: formattedDate(new Date()),
                });
              }
            }}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              direction={{ base: "column", md: "row" }}
              spacing={2}
            >
              <MdCheck />
              <Text>{campain.step === 1 ? "사용등록" : "사용완료"}</Text>
            </Stack>
          </Button>
        )}
        {campain.step !== 1 && (
          <Button
            colorScheme="black"
            variant={"outline"}
            h={{ base: "4rem", md: "2.5rem" }}
            onClick={() => {
              if (campain.step === 2) {
                onOpen();
              }
            }}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              direction={{ base: "column", md: "row" }}
              spacing={2}
            >
              {campain.step === 0 ? <ImCancelCircle /> : <MdReviews />}
              <Text>{campain.step === 0 ? "신청취소" : "리뷰등록"}</Text>
            </Stack>
          </Button>
        )}
      </Stack>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>리뷰등록</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                <FormControl>
                  <FormLabel>리뷰 URL</FormLabel>
                  <Input
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://blog.naver.com/블로그아이디/포스팅번호"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>
                    <HStack w={"full"} justifyContent={"space-between"}>
                      <Text>배너등록</Text>
                      <IconButton
                        variant={"ghost"}
                        icon={<BiCopy />}
                        aria-label="Clipboard"
                        onClick={() => copyToClipboard(textToCopy)}
                      />
                    </HStack>
                  </FormLabel>
                  <FormHelperText>
                    아래 배너 링크를 블로그 글에 반드시 첨부해주세요.
                  </FormHelperText>
                  <Textarea
                    readOnly
                    value="https://firebasestorage.googleapis.com/v0/b/dangdangview.appspot.com/o/dangdang_banner.png?alt=media"
                  />
                </FormControl>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button onClick={handleSubmit}>리뷰등록</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </HStack>
  );
};

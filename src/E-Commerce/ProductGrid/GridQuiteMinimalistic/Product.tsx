import {
  AspectRatio,
  Box,
  Button,
  Center,
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
  useBreakpointValue,
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
import { HiReceiptTax } from "react-icons/hi";

interface Props {
  campain: Campain;
}

export const Product = ({ ...props }) => {
  const { campain } = props;
  const { onOpen, isOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();
  const [url, setUrl] = useState<string>("");
  const [cnt, setCnt] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

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
    if (window.confirm("리뷰를 등록하시겠습니까?")) {
      console.log(url);
      console.log(campain);

      // fetch를 사용하여 POST 요청을 보냅니다.
      fetch(process.env.REACT_APP_SERVER_URL + "/crawl", {
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

      // 리뷰 상태 변경
      updateDoc("Tester", campain.testerId, {
        step: 3,
        reviewDate: formattedDate(new Date()),
      });
    }
  };
  return (
    <Stack>
      <Box
        border={"1px solid #E2E8F0"}
        borderRadius="lg"
        overflow={"hidden"}
        bgImage={`url(${process.env.REACT_APP_STORAGE}/campain%2F${campain.images?.[0]}?alt=media)`}
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        _hover={{ cursor: "pointer", opacity: 0.9 }}
        onClick={() => {
          navigate(`/campain/${campain.doc_id}`);
        }}
        aspectRatio={`1`}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-end"}
      >
        {/* <Box position="relative" className="group">
          <AspectRatio ratio={1} w={100} h={100}>
            <Image
              // src={campain.images?.[0]}
              src={
                process.env.REACT_APP_STORAGE +
                "/campain" +
                "%2F" +
                campain.images?.[0] +
                "?alt=media"
              }
              alt={campain.name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius="lg"
            />
          </AspectRatio>
        </Box> */}
        <Stack
          p={{ base: 1, sm: 4 }}
          spacing={{ base: 1, sm: 2 }}
          sx={{
            "@media (width: 768px)": {
              padding: "4px",
              gap: "4px",
            },
          }}
        >
          {(campain.step === 1 || campain.step === 2) && (
            <Button
              size={{ base: "2xs", sm: "md" }}
              sx={{
                "@media (width: 768px)": {
                  height: "1.5rem",
                },
              }}
              isDisabled={campain.step === 2}
              _disabled={{ opacity: 1, cursor: "not-allowed" }}
              // colorScheme="black"
              // variant={"outline"}
              style={{
                // 기본 스타일
                backgroundColor:
                  campain.step === 2
                    ? "rgba(241, 244, 248, 1)"
                    : "rgba(11, 197, 234, 1)", // 배경색 변경
                color: campain.step === 2 ? "#57636C" : "white", // 배경색 변경
              }}
              h={{ base: "3rem", md: "2rem" }}
              onClick={(event) => {
                event.stopPropagation();
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
                direction={{ base: "row", md: "row" }}
                spacing={2}
              >
                <MdCheck />
                <Text>{campain.step === 1 ? "사용등록" : "사용완료"}</Text>
              </Stack>
            </Button>
          )}
          {campain.step !== 1 && (
            <Button
              size={{ base: "2xs", sm: "md" }}
              sx={{
                "@media (width: 768px)": {
                  height: "1.5rem",
                },
              }}
              isDisabled={campain.step === 3}
              style={{
                // 기본 스타일
                backgroundColor:
                  campain.step === 3
                    ? "rgba(241, 244, 248, 1)"
                    : "rgba(11, 197, 234, 1)", // 배경색 변경
                color: campain.step === 3 ? "#57636C" : "white", // 배경색 변경
              }}
              // colorScheme="black"
              // variant={"outline"}
              h={{ base: "2.5rem", md: "2rem" }}
              onClick={(event) => {
                event.stopPropagation();
                if (campain.step === 2) {
                  // 리뷰 등록
                  onOpen();
                }
                if (campain.step === 0) {
                  // 신청 취소
                  alert("신청취소입니다!");
                }
              }}
            >
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                direction={{ base: "row", md: "row" }}
                spacing={2}
              >
                {campain.step === 0 ? <ImCancelCircle /> : <MdReviews />}
                <Text>
                  {campain.step === 0
                    ? "신청취소"
                    : campain.step === 2
                    ? "리뷰등록"
                    : "리뷰완료"}
                </Text>
              </Stack>
            </Button>
          )}
        </Stack>
      </Box>
      <Stack>
        {campain?.type !== "이벤트" && (
          <Stack
            direction={{ base: "column", md: "row" }}
            sx={{
              "@media (width: 768px)": {
                flexDirection: "column",
              },
            }}
            spacing={2}
          >
            <HStack zIndex={999} spacing={0}>
              {campain?.mozip?.includes("0") && (
                <Center
                  w={{ base: "36px", md: "24px" }}
                  h={{ base: "36px", md: "24px" }}
                  // rounded={"full"}
                  // bgColor={"#f5f5f5"}
                  // border={"1px solid #d9d9d9"}
                >
                  <Image
                    src={require("../../../Assets/img/style14.png")}
                    w={{ base: "28px", md: "22px" }}
                  />
                </Center>
              )}
              {campain?.mozip?.includes("1") && (
                <Center
                  w={{ base: "36px", md: "24px" }}
                  h={{ base: "36px", md: "24px" }}
                  // rounded={"full"}
                  // bgColor={"#f5f5f5"}
                  // border={"1px solid #d9d9d9"}
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                    w={{ base: "24px", md: "18px" }}
                  />
                </Center>
              )}
              {campain?.mozip?.includes("2") && (
                <Center
                  w={{ base: "36px", md: "24px" }}
                  h={{ base: "36px", md: "24px" }}
                  // rounded={"full"}
                  // bgColor={"#f5f5f5"}
                  // border={"1px solid #d9d9d9"}
                >
                  <HiReceiptTax
                    color="orange"
                    size={isMobile ? "28px" : "20px"}
                  />
                  {/* <FiShoppingBag color="orange" size={isMobile ? "18px" : "24px"} /> */}
                </Center>
              )}
            </HStack>
            <HStack spacing={2}>
              <Tag
                size={{ base: "sm", md: "md" }}
                colorScheme={
                  calculateDday(campain.endDate) > 0 ? "red" : "blue"
                }
              >
                {calculateDday(campain.endDate) > 0
                  ? calculateDday(campain.endDate) + "일 남음"
                  : Math.abs(calculateDday(campain.endDate)) + "일 지남"}
              </Tag>
            </HStack>
          </Stack>
        )}
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
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight="semibold"
          letterSpacing="wider"
          textTransform="uppercase"
        >
          {campain.name}
        </Text>
        {campain?.type !== "이벤트" && (
          <Text fontSize={"sm"} opacity={0.7}>
            신청 {cnt} / {campain.targetCnt}명
          </Text>
        )}
      </Stack>
      <>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={{ base: "full", md: "xl" }}
        >
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
                  <Stack>
                    <FormLabel>
                      <HStack w={"full"} justifyContent={"space-between"}>
                        <Text>배너등록</Text>
                        {/* <IconButton
                        variant={"ghost"}
                        icon={<BiCopy />}
                        aria-label="Clipboard"
                        onClick={() => copyToClipboard(textToCopy)}
                      /> */}
                      </HStack>
                    </FormLabel>
                    <FormHelperText>
                      아래 배너 링크를 블로그 글에 반드시 첨부해주세요.
                    </FormHelperText>
                    <Image
                      border={"1px solid #d9d9d9"}
                      p={2}
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/dangdangview.appspot.com/o/dangdang_banner.png?alt=media"
                      }
                    />
                    <Button
                      w={"full"}
                      onClick={() => copyToClipboard(textToCopy)}
                    >
                      링크 복사하기
                    </Button>
                  </Stack>
                  {/* <Textarea
                    height={"120px"}
                    readOnly
                    value="https://firebasestorage.googleapis.com/v0/b/dangdangview.appspot.com/o/dangdang_banner.png?alt=media"
                  /> */}
                </FormControl>

                <Stack spacing={0} mt={4}>
                  <Text fontSize={"lg"} fontWeight={"bold"}>
                    블로그에서 링크 추가 버튼 찾기
                  </Text>
                  <Text>
                    블로그 글쓰기 화면에서{" "}
                    <strong style={{ color: "red" }}>링크추가 버튼</strong>을
                    눌러주세요.
                  </Text>
                  <Text fontSize={"sm"} opacity={0.5}>
                    {
                      "(반드시 PC 웹 화면이나, 네이버 블로그 앱)을 사용하셔야합니다."
                    }
                  </Text>
                  <Image src={require("../../../Assets/guide/g1.jpeg")} />
                </Stack>
                <Stack spacing={0}>
                  <Text fontSize={"lg"} fontWeight={"bold"}>
                    복사된 스폰서링크 코드를 붙여넣기
                  </Text>
                  <Text>
                    복사된{" "}
                    <strong style={{ color: "red" }}>
                      스폰서 배너 코드를 링크에 붙이면
                    </strong>
                    배너가 생성됩니다,
                  </Text>
                  <Image src={require("../../../Assets/guide/g2.jpeg")} />
                </Stack>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button onClick={handleSubmit}>리뷰등록</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Stack>
  );
};

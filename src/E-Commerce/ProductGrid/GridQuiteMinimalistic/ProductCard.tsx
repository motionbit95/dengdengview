import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Image,
  Skeleton,
  Stack,
  Tag,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Campain, calculateDday, campains } from "./_data";
import { useNavigate } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { Naver } from "../../../Application/Tables/UserTable/Logo";
import { FiShoppingBag } from "react-icons/fi";
import { HiReceiptTax } from "react-icons/hi";
import { useEffect, useState } from "react";

interface Props {
  campain: Campain;
}

export const ProductCard = (props: Props) => {
  const { campain } = props;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate();
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL + "/tester/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conditions: [{ field: "cid", operator: "==", value: campain.id }],
      }),
    })
      .then(async (res) => {
        return await res.json();
      })
      .then(async (data) => {
        console.log(data);

        setCnt(data.length);
      })
      .catch(async (err) => {
        console.log(err);
      });
  }, [campain]);

  return (
    <Stack
      spacing="2"
      _hover={{ opacity: 0.7, cursor: "pointer" }}
      onClick={() => {
        console.log(campain);
        navigate(`/campain/${campain.id}`);
        window.location.reload();
        window.scrollTo(0, 0);
      }}
    >
      <Box
        position="relative"
        className="group"
        bgGradient={
          campain.type === "이벤트" ? "linear(45deg, #19DB8A, #0BC5EA)" : "none"
        }
        borderRadius={{ base: "md", md: "xl" }}
        p={2}
      >
        <AspectRatio ratio={1}>
          <Image
            src={
              campain.images?.[0]?.includes("firebase")
                ? campain.images?.[0]
                : process.env.REACT_APP_STORAGE +
                  "/campain" +
                  "%2F" +
                  campain.images?.[0] +
                  "?alt=media"
            }
            alt={campain.name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{ base: "md", md: "xl" }}
          />
        </AspectRatio>
      </Box>
      {campain?.type !== "이벤트" && (
        <Stack direction={{ base: "column", md: "row" }} spacing={2}>
          <HStack zIndex={999} spacing={0}>
            {campain?.mozip?.includes("0") && (
              <Center
                w={{ base: "28px", md: "36px" }}
                h={{ base: "28px", md: "36px" }}
                // rounded={"full"}
                // bgColor={"#f5f5f5"}
                // border={"1px solid #d9d9d9"}
              >
                <Image
                  src={require("../../../Assets/img/style14.png")}
                  w={{ base: "20px", md: "28px" }}
                />
              </Center>
            )}
            {campain?.mozip?.includes("1") && (
              <Center
                w={{ base: "28px", md: "36px" }}
                h={{ base: "28px", md: "36px" }}
                // rounded={"full"}
                // bgColor={"#f5f5f5"}
                // border={"1px solid #d9d9d9"}
              >
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  w={{ base: "16px", md: "22px" }}
                />
              </Center>
            )}
            {campain?.mozip?.includes("2") && (
              <Center
                w={{ base: "28px", md: "36px" }}
                h={{ base: "28px", md: "36px" }}
                // rounded={"full"}
                // bgColor={"#f5f5f5"}
                // border={"1px solid #d9d9d9"}
              >
                <HiReceiptTax
                  color="orange"
                  size={isMobile ? "18px" : "24px"}
                />
                {/* <FiShoppingBag color="orange" size={isMobile ? "18px" : "24px"} /> */}
              </Center>
            )}
          </HStack>
          <HStack spacing={2}>
            <Tag
              size={{ base: "sm", md: "md" }}
              colorScheme={calculateDday(campain.endDate) > 0 ? "red" : "blue"}
            >
              {calculateDday(campain.endDate) > 0
                ? calculateDday(campain.endDate) + "일 남음"
                : Math.abs(calculateDday(campain.endDate)) + "일 지남"}
            </Tag>
          </HStack>
        </Stack>
      )}
      <Stack spacing={"2px"}>
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
          fontSize="sm"
          fontWeight="semibold"
          letterSpacing="wider"
          textTransform="uppercase"
        >
          {campain.name}
        </Text>
        <Text
          textOverflow={"ellipsis"}
          overflow="hidden"
          wordBreak={"break-word"}
          whiteSpace={"pre-wrap"}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
          // color={useColorModeValue("black", "white")}
          fontSize="xs"
          letterSpacing="wider"
          textTransform="uppercase"
          color={"#57636C"}
        >
          {campain.product}
        </Text>
      </Stack>
      {campain?.type !== "이벤트" && (
        <Text fontSize={"sm"} opacity={0.7}>
          신청 {cnt} / {campain.targetCnt}명
        </Text>
      )}
    </Stack>
  );
};

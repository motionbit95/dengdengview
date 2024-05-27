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

interface Props {
  campain: Campain;
}

export const ProductCard = (props: Props) => {
  const { campain } = props;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate();
  return (
    <Stack
      spacing="4"
      _hover={{ opacity: 0.7, cursor: "pointer" }}
      onClick={() => {
        navigate(`/campain/${campain.doc_id}`);
      }}
    >
      <Box position="relative" className="group">
        <AspectRatio ratio={1}>
          <Image
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
            borderRadius="md"
          />
        </AspectRatio>
        {/* <Tag size={"sm"} position="absolute" top="2" left="2">
          #{campain.doc_id.substring(0, 8)}
        </Tag> */}
      </Box>
      <HStack zIndex={999}>
        {campain?.mozip?.includes("0") && (
          <Center
            w={{ base: "36px", md: "48px" }}
            h={{ base: "36px", md: "48px" }}
            rounded={"full"}
            bgColor={"#f5f5f5"}
            // border={"1px solid #d9d9d9"}
          >
            <Image
              src={require("../../../Assets/img/style14.png")}
              w={{ base: "24px", md: "32px" }}
            />
          </Center>
        )}
        {campain?.mozip?.includes("1") && (
          <Center
            w={{ base: "36px", md: "48px" }}
            h={{ base: "36px", md: "48px" }}
            rounded={"full"}
            bgColor={"#f5f5f5"}
            // border={"1px solid #d9d9d9"}
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              w={{ base: "24px", md: "32px" }}
            />
          </Center>
        )}
        {campain?.mozip?.includes("2") && (
          <Center
            w={{ base: "36px", md: "48px" }}
            h={{ base: "36px", md: "48px" }}
            rounded={"full"}
            bgColor={"#f5f5f5"}
            // border={"1px solid #d9d9d9"}
          >
            <FiShoppingBag color="orange" size={isMobile ? "24px" : "32px"} />
          </Center>
        )}
      </HStack>
      <Stack spacing="1">
        <Stack justifyContent="space-between">
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
        </Stack>
        <HStack spacing={2}>
          <Tag
            size={{ base: "sm", md: "md" }}
            colorScheme={calculateDday(campain.endDate) > 0 ? "red" : "gray"}
          >
            {calculateDday(campain.endDate) > 0
              ? calculateDday(campain.endDate) + "일 남음"
              : Math.abs(calculateDday(campain.endDate)) + "일 지남"}
          </Tag>
          <Tag size={{ base: "sm", md: "md" }} colorScheme={"teal"}>
            {campain.type}
          </Tag>
        </HStack>
      </Stack>
    </Stack>
  );
};

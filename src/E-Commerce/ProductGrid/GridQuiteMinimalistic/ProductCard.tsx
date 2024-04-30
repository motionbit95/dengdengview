import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Skeleton,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Campain, calculateDday, campains } from "./_data";
import { useNavigate } from "react-router-dom";

interface Props {
  campain: Campain;
}

export const ProductCard = (props: Props) => {
  const { campain } = props;
  const navigate = useNavigate();
  return (
    <Stack
      spacing="4"
      _hover={{ opacity: 0.7, cursor: "pointer" }}
      onClick={() => {
        navigate(`/campain/${campain.doc_id}`, { state: campain });
      }}
    >
      <Box position="relative" className="group">
        <AspectRatio ratio={1}>
          <Image
            src={campain.images?.[0]}
            alt={campain.name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius="md"
          />
        </AspectRatio>
        <Tag size={"sm"} position="absolute" top="2" left="2">
          #{campain.doc_id.substring(0, 8)}
        </Tag>
      </Box>
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

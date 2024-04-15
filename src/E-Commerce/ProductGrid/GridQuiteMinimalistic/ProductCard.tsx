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

interface Props {
  campain: Campain;
}

export const ProductCard = (props: Props) => {
  const { campain } = props;
  return (
    <Stack spacing="4" _hover={{ opacity: 0.7, cursor: "pointer" }}>
      <Box position="relative" className="group">
        <AspectRatio ratio={1}>
          <Image
            src={campain.imageUrl}
            alt={campain.name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius="md"
          />
        </AspectRatio>
        <Tag size={"sm"} position="absolute" top="2" left="2">
          #{campain.id}
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
            colorScheme={calculateDday(campain.expireDate) > 3 ? "gray" : "red"}
          >
            {calculateDday(campain.expireDate) > 0
              ? calculateDday(campain.expireDate) + "일 남음"
              : "일 지남"}
          </Tag>
          <Tag colorScheme={"teal"}>{campain.type}</Tag>
        </HStack>
      </Stack>
    </Stack>
  );
};

import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiClock, FiHeart } from "react-icons/fi";
import { RiRulerLine } from "react-icons/ri";
import { ColorPicker } from "./ColorPicker";
import { PriceTag } from "./PriceTag";
import { ProductBadge } from "./ProductBadge";
import { Promos } from "./Promos";
import { QuantityPicker } from "./QuantityPicker";
import { Share } from "./Share";
import { SizePicker } from "./SizePicker";
import { Rating } from "./Rating";

export const ProductWithLargeImages = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack direction={{ base: "column", md: "row" }} spacing="16">
        <Box maxW="sm">
          <Stack spacing="8">
            <Stack spacing="4">
              <Stack>
                <ProductBadge
                  bg={useColorModeValue("gray.500", "gray.600")}
                  color="white"
                >
                  New In
                </ProductBadge>
                <Heading size="lg" fontWeight="medium">
                  Classic Black
                </Heading>
              </Stack>
              <Stack spacing="1">
                <PriceTag
                  price={229}
                  salePrice={199}
                  currency="GBP"
                  rootProps={{ fontSize: "xl" }}
                />
                <HStack spacing="2" alignSelf="baseline">
                  <Rating defaultValue={4} size="sm" />
                  <Link
                    href="#"
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    12 Reviews
                  </Link>
                </HStack>
              </Stack>
              <Text color={useColorModeValue("gray.600", "gray.400")}>
                With a sleek design and a captivating essence, this is a modern
                Classic made for every occasion.
              </Text>
            </Stack>
            <Stack>
              <SizePicker
                defaultValue="32"
                options={[
                  { label: "32mm", value: "32" },
                  { label: "36mm", value: "36" },
                  { label: "40mm", value: "40" },
                ]}
              />
              <HStack
                spacing="1"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                <Icon as={RiRulerLine} />
                <Link
                  href="#"
                  fontSize="xs"
                  fontWeight="medium"
                  textDecoration="underline"
                >
                  View our sizing guide
                </Link>
              </HStack>
            </Stack>
            <Stack>
              <ColorPicker
                defaultValue="Black"
                options={[
                  { label: "Black", value: "#000" },
                  { label: "Dark Gray", value: "#666" },
                  { label: "Light Gray", value: "#BBB" },
                ]}
              />
              <HStack
                spacing="1"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                <Icon as={FiClock} />
                <Text fontSize="xs" fontWeight="medium">
                  Low stock
                </Text>
              </HStack>
            </Stack>
            <HStack
              spacing={{ base: "4", md: "8" }}
              align="flex-end"
              justify="space-evenly"
            >
              <Box flex="1">
                <QuantityPicker defaultValue={1} max={3} />
              </Box>
              <Box flex="1">
                <Button
                  variant="outline"
                  size="lg"
                  fontSize="md"
                  width="full"
                  leftIcon={<Icon as={FiHeart} boxSize="4" />}
                >
                  Favorite
                </Button>
              </Box>
            </HStack>
            <Button colorScheme="blue" size="lg">
              Add to cart
            </Button>
            <Promos />
            <Share />
          </Stack>
        </Box>
        <Box flex="1">
          <Stack spacing="8">
            <AspectRatio ratio={4 / 3}>
              <Image
                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
                alt="Lovely image"
                fallback={<Skeleton />}
              />
            </AspectRatio>
            <AspectRatio ratio={4 / 3}>
              <Image
                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
                alt="Lovely image"
                fallback={<Skeleton />}
              />
            </AspectRatio>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

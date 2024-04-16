import {
  Button,
  Center,
  CenterProps,
  HStack,
  Icon,
  Square,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiUploadCloud } from "react-icons/fi";

export const Dropzone = (props: CenterProps) => (
  <Center borderWidth="1px" borderRadius="lg" px="6" py="4" {...props}>
    <VStack spacing="3">
      <Square size="10" bg="bg.subtle" borderRadius="lg">
        <Icon as={FiUploadCloud} boxSize="5" color="fg.muted" />
      </Square>
      <VStack spacing="1">
        <HStack spacing="1" whiteSpace="nowrap">
          <Button variant="text" colorScheme="blue" size="sm">
            클릭하여 이미지를 선택
          </Button>
        </HStack>
        <Text textStyle="xs" color="fg.muted">
          2MB이하로 파일를 선택하십시오.
        </Text>
      </VStack>
    </VStack>
  </Center>
);

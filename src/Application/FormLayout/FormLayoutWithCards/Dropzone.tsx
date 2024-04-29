import {
  Button,
  Center,
  CenterProps,
  HStack,
  Icon,
  Input,
  Square,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { uploadFile } from "../../../Firebase/Storage";

export const Dropzone = ({ ...props }) => {
  const imageRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const firstFile = files[0];
      console.log(firstFile);
      uploadFile("profile", firstFile).then(async (url) => {
        props.setUrl(url);
      });
    }

    if (imageRef.current) {
      imageRef.current.value = "";
    }
  };
  return (
    <Center borderWidth="1px" borderRadius="lg" px="6" py="4" {...props}>
      <VStack spacing="3">
        <Square size="10" bg="bg.subtle" borderRadius="lg">
          <Icon as={FiUploadCloud} boxSize="5" color="fg.muted" />
        </Square>
        <VStack spacing="1">
          <HStack spacing="1" whiteSpace="nowrap">
            <Button
              variant="text"
              colorScheme="blue"
              size="sm"
              onClick={() => imageRef.current?.click()}
            >
              클릭하여 이미지를 선택
            </Button>
            <Input
              type="file"
              display={"none"}
              ref={imageRef}
              accept="image/*"
              onChange={handleChange}
            />
          </HStack>
          <Text textStyle="xs" color="fg.muted">
            2MB이하로 파일를 선택하십시오.
          </Text>
        </VStack>
      </VStack>
    </Center>
  );
};

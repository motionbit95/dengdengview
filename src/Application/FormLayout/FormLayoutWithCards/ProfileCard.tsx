import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Dropzone } from "./Dropzone";
import { useState } from "react";
import { ListWithDraggableElements } from "../../List/ListWithDraggableElements/App";
import { ListCampainImages } from "../../List/ListCampainImages/App";

export const ProfileCard = (props: BoxProps) => {
  const [url, setUrl] = useState<string>("");
  return (
    <Box
      w={"full"}
      bg="bg.surface"
      boxShadow="sm"
      borderRadius="lg"
      flex="1"
      {...props}
    >
      <Stack
        spacing="5"
        px={{ base: "4", md: "6" }}
        py={{ base: "5", md: "6" }}
      >
        {/* <FormControl id="picture">
          <FormLabel>썸네일</FormLabel>
          <Stack
            spacing={{ base: "3", md: "5" }}
            direction={{ base: "column", sm: "row" }}
          >
            <Center
              style={{
                width: "50%",
                height: "auto",
                aspectRatio: 1,
                border: url ? "none" : "2px dashed #E2E8F0",
                borderRadius: url ? 0 : 10,
              }}
            >
              <Image src={url} style={{ aspectRatio: 1 }} />
            </Center>
            <Dropzone
              width="full"
              setUrl={(data: string) => {
                setUrl(data);
              }}
            />
          </Stack>
        </FormControl> */}

        <FormControl id="website">
          <FormLabel>상세 이미지</FormLabel>
          <ListCampainImages />
          <FormHelperText color="fg.subtle">
            첫번째 이미지가 썸네일로 표시됩니다.
          </FormHelperText>
        </FormControl>
        <FormControl id="bio">
          <FormLabel>제품 설명</FormLabel>
          <Textarea rows={3} resize="none" />
          <FormHelperText color="fg.subtle">
            제품 설명을 작성해주세요.
          </FormHelperText>
        </FormControl>

        <FormControl id="bio">
          <FormLabel>리뷰어 미션</FormLabel>
          <Textarea rows={3} resize="none" />
          <FormHelperText color="fg.subtle">
            리뷰어가 수행해야하는 미션을 작성해주세요.
          </FormHelperText>
        </FormControl>
      </Stack>
    </Box>
  );
};

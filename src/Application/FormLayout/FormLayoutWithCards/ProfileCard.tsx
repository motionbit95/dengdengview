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
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Tag,
  TagCloseButton,
  Textarea,
  Wrap,
} from "@chakra-ui/react";
import { Dropzone } from "./Dropzone";
import { useState } from "react";
import { ListWithDraggableElements } from "../../List/ListWithDraggableElements/App";
import { ListCampainImages } from "../../List/ListCampainImages/App";

export const ProfileCard = ({ ...props }) => {
  const { campain } = props;
  const [url, setUrl] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [keywords, setKeywords] = useState<string[]>(
    campain?.keywords ? campain?.keywords : []
  );

  const handleKeywords = (keyword: string) => {
    if (keywords.includes(keyword)) {
      // setKeywords(keywords.filter((k) => k !== keyword));
    } else {
      setKeywords([...keywords, keyword]);

      props.onChange({
        keywords: [...keywords, keyword],
      });

      setKeyword("");
    }
  };

  const deleteKeyword = (keyword: string) => {
    if (keywords.includes(keyword)) {
      setKeywords(keywords.filter((k) => k !== keyword));
      props.onChange({
        keywords: keywords.filter((k) => k !== keyword),
      });
    } else {
      // setKeywords([...keywords, keyword]);
    }
  };
  return (
    <Box
      w={"full"}
      bg="bg.surface"
      boxShadow="sm"
      borderRadius="lg"
      flex="1"
      // {...props}
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

        <FormControl id="website" isRequired>
          <FormLabel>상세 이미지</FormLabel>
          <ListCampainImages
            onChange={(value: any) => props.onChange({ images: value })}
            defaultImages={campain?.images}
          />
          <FormHelperText color="fg.subtle">
            첫번째 이미지가 썸네일로 표시됩니다.
          </FormHelperText>
        </FormControl>
        <FormControl id="bio" isRequired>
          <FormLabel>제품 설명</FormLabel>
          <Textarea
            fontSize={"sm"}
            defaultValue={campain?.product}
            onChange={(e) => props.onChange({ product: e.target.value })}
            rows={3}
            resize="none"
          />
          <FormHelperText color="fg.subtle">
            제품 설명을 작성해주세요.
          </FormHelperText>
        </FormControl>

        <FormControl id="bio" isRequired>
          <FormLabel>리뷰어 미션</FormLabel>
          <Textarea
            fontSize={"sm"}
            defaultValue={campain?.mission_description}
            onChange={(e) =>
              props.onChange({ mission_description: e.target.value })
            }
            rows={3}
            resize="none"
          />
          <FormHelperText color="fg.subtle">
            리뷰어가 수행해야하는 미션을 작성해주세요.
          </FormHelperText>
        </FormControl>

        <FormControl id="bio" isRequired>
          <FormLabel>필수키워드</FormLabel>
          <HStack>
            <Input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="필수키워드를 입력해주세요."
            />
            <Button onClick={() => handleKeywords(keyword)}>등록</Button>
          </HStack>
          <Wrap py={4}>
            {keywords.map((keyword) => (
              <Tag size="sm" colorScheme="cyan" key={keyword}>
                {keyword}
                <TagCloseButton onClick={() => deleteKeyword(keyword)} />
              </Tag>
            ))}
          </Wrap>
        </FormControl>
      </Stack>
    </Box>
  );
};

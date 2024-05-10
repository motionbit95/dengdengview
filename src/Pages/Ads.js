import {
  Center,
  FormControl,
  Button,
  Input,
  Container,
  Card,
  Stack,
  HStack,
  Checkbox,
  StackDivider,
  useToast,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { createDoc } from "../Firebase/Database";

function Ads(props) {
  const [path, setPath] = React.useState(null);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    createDoc("Ads", { ...data, createdAt: new Date(), path: path }).then(
      async () => {
        console.log("success");
        toast({
          title: "광고 제휴 문의가 정상적으로 접수되었습니다",
          status: "success",
          duration: 50000,
          isClosable: true,
          position: "top-right",
        });
      }
    );
  };
  return (
    <Container maxW="container.sm">
      <Center w={"full"} h={"full"} py={{ base: "10", md: "20" }}>
        <Card w={"full"} h={"full"} p={5}>
          <form onSubmit={handleSubmit}>
            <Stack>
              <FormControl isRequired>
                <Input name="businessName" placeholder="업체명을 입력하세요." />
              </FormControl>
              <FormControl isRequired>
                <Input name="telNo" placeholder="연락처를 입력하세요." />
              </FormControl>
              <FormControl isRequired>
                <Menu>
                  <MenuButton
                    w={"full"}
                    textAlign={"left"}
                    fontSize={"md"}
                    bgColor="white"
                    color={"#8c8c8c"}
                    border={"1px solid #d9d9d9"}
                    as={Button}
                    rightIcon={<BiChevronDown />}
                  >
                    {path ? path : "어디서 댕댕뷰를 알게되셨나요?"}
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => setPath("네이버검색")}>
                      네이버검색
                    </MenuItem>
                    <MenuItem onClick={() => setPath("뉴스광고/커뮤니티")}>
                      뉴스광고/커뮤니티
                    </MenuItem>
                    <MenuItem onClick={() => setPath("페이스북")}>
                      페이스북
                    </MenuItem>
                    <MenuItem onClick={() => setPath("인스타그램")}>
                      인스타그램
                    </MenuItem>
                    <MenuItem onClick={() => setPath("네이버포스트")}>
                      네이버포스트
                    </MenuItem>
                    <MenuItem onClick={() => setPath("지인추천")}>
                      지인추천
                    </MenuItem>
                    <MenuItem onClick={() => setPath("광고전단")}>
                      광고전단
                    </MenuItem>
                    <MenuItem onClick={() => setPath("인터넷 배너광고")}>
                      인터넷 배너광고
                    </MenuItem>
                    <MenuItem onClick={() => setPath("기타")}>기타</MenuItem>
                  </MenuList>
                </Menu>
              </FormControl>
              <Stack divider={<StackDivider />}>
                <HStack justify="space-between">
                  <Checkbox>개인정보 수집에 동의합니다.</Checkbox>
                  <Button size={"sm"} borderRadius={"full"} variant={"outline"}>
                    자세히보기
                  </Button>
                </HStack>
                <Button w={"full"} type="submit" borderRadius={"full"}>
                  문의하기
                </Button>
              </Stack>
            </Stack>
          </form>
        </Card>
      </Center>
    </Container>
  );
}

export default Ads;

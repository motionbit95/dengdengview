import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Forbidden(props) {
  return (
    <Center py={"24"} {...props}>
      <VStack>
        <Heading>404</Heading>
        <Text>원하시는 페이지를 찾을 수 없습니다.</Text>
        <Text
          fontSize="sm"
          opacity={0.5}
          whiteSpace={"pre-line"}
          textAlign={"center"}
        >
          {
            "찾으려는 페이지의 주소가 잘못 입력되었거나,\n 주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.\n 입력하신 페이지의 주소가 정확한지 다시 한 번 확인해주세요."
          }
        </Text>
        <Button colorScheme="cyan" onClick={() => window.location.replace("/")}>
          홈으로 가기
        </Button>
      </VStack>
    </Center>
  );
}

export default Forbidden;

import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { IoArrowDown } from "react-icons/io5";
import { updateDoc } from "../../../Firebase/Database";
import { BsCheckCircleFill } from "react-icons/bs";
import { useEffect } from "react";

export const TesterTable = ({ ...props }) => {
  const { members } = props;

  const campain = "테스트 캠페인";
  const phone = "01091789973";
  const name = "박수정";

  useEffect(() => {
    console.log(members);
  }, [members]);

  const handleSelectUser = (member: any) => {
    console.log(member);
    fetch(process.env.REACT_APP_SERVER_URL + "/tester/update/" + member.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        step: 1,
      }),
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Table {...props}>
      <Thead>
        <Tr>
          <Th>
            <HStack spacing="3">
              {/* <Checkbox /> */}
              <HStack spacing="1">
                <Text>이름</Text>
                <Icon as={IoArrowDown} color="fg.muted" boxSize="4" />
              </HStack>
            </HStack>
          </Th>
          <Th>주소</Th>
          <Th>휴대폰번호</Th>
          <Th>블로그아이디</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {members.map((member: any) => (
          <Tr key={member.id}>
            <Td>
              <HStack spacing="3">
                {/* <Checkbox /> */}
                {/* <Avatar
                  src={member.avatarUrl}
                  boxSize="10"
                  cursor={"pointer"}
                  onClick={() =>
                    window.open("https://m.blog.naver.com/" + member.blog)
                  }
                /> */}
                <Box>
                  <Text fontWeight="medium">{member.name}</Text>
                </Box>
              </HStack>
            </Td>
            <Td>
              <Text color="fg.muted">
                {"[" +
                  member.zonecode +
                  "] " +
                  member.street +
                  " " +
                  (member.address ? member.address : "")}
              </Text>
            </Td>
            <Td>
              <Text color="fg.muted">{member.phone}</Text>
            </Td>
            <Td>
              <Text color="fg.muted">{member.blog}</Text>
            </Td>
            <Td>
              {member.step === 0 ? (
                <Button w={"full"} onClick={() => handleSelectUser(member)}>
                  선정하기
                </Button>
              ) : (
                <VStack spacing={4}>
                  <HStack>
                    {member.step > 1 && (
                      <BsCheckCircleFill style={{ color: "green" }} size={20} />
                    )}
                    <Text
                      opacity={member.step > 1 ? 1 : 0.5}
                      color={member.step > 1 ? "green.500" : "gray.500"}
                      fontSize={"xl"}
                      fontWeight="bold"
                    >
                      {/* {member.step} */}
                      {member.step > 1 ? "사용완료" : "사용완료전"}{" "}
                      {member.step > 1 ? member.useDate : ""}
                    </Text>
                  </HStack>
                  <HStack>
                    {member.step > 2 && (
                      <BsCheckCircleFill style={{ color: "green" }} size={20} />
                    )}
                    <Text
                      opacity={member.step > 2 ? 1 : 0.5}
                      color={member.step > 2 ? "green.500" : "gray.500"}
                      fontSize={"xl"}
                      fontWeight="bold"
                    >
                      {member.step > 2 ? "리뷰완료" : "리뷰작성전"}{" "}
                      {member.step > 2 ? member.reviewDate : ""}
                    </Text>
                  </HStack>
                </VStack>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

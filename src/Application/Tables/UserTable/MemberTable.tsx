import {
  Avatar,
  Badge,
  Box,
  Stack,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoArrowDown } from "react-icons/io5";
import { Naver } from "./Logo";
import React from "react";
import { updateDoc } from "../../../Firebase/Database";
// import { members } from "./data";

export const MemberTable = (props: any) => {
  const { members } = props;
  const [uid, setUid] = React.useState("");

  const updateUser = (member: any) => {
    console.log(member);

    if (window.confirm("유저 정보를 수정하시겠습니까?")) {
      updateDoc("User", member.id, member).then(() => {});
    } else {
      window.location.reload();
    }
  };

  return (
    <Table {...props} size={"sm"}>
      <Thead>
        <Tr>
          <Th minW={"100px"}>
            <HStack spacing="3">
              {/* <Checkbox /> */}
              <HStack spacing="1">
                <Text>이름</Text>
                {/* <Icon as={IoArrowDown} color="fg.muted" boxSize="4" /> */}
              </HStack>
            </HStack>
          </Th>
          <Th minW={"100px"}>
            <HStack spacing="1">
              <Text>가입일</Text>
              <Icon as={IoArrowDown} color="fg.muted" boxSize="4" />
            </HStack>
          </Th>
          <Th minW={"100px"}>닉네임</Th>
          <Th minW={"100px"}>성별</Th>
          <Th minW={"100px"}>나이</Th>
          <Th minW={"100px"}>전화번호</Th>
          <Th minW={"100px"}>이메일</Th>
          <Th minW={"100px"}>블로그ID</Th>
          <Th minW={"100px"}>주소</Th>
          <Th minW={"100px"}>수신동의</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody fontSize={"sm"}>
        {members.map((member: any) => (
          <Tr key={member.id}>
            <Td>
              {uid === member.id ? (
                <Input
                  size="sm"
                  placeholder="이름"
                  defaultValue={member.name}
                  onChange={(e) => {
                    member.name = e.target.value;
                  }}
                />
              ) : (
                <HStack spacing="3">
                  {/* <Checkbox /> */}
                  <Avatar src={member.image} boxSize="10" />
                  <Stack>
                    <HStack>
                      <Text fontWeight="medium">{member.name}</Text>
                      {member.channel === "naver" && <Naver />}
                    </HStack>
                    <Text color="fg.default">
                      {member.doc_id.substring(0, 8)}
                    </Text>
                  </Stack>
                </HStack>
              )}
            </Td>
            <Td>
              <Text color="fg.muted">{member.createdAt.split("T")[0]}</Text>
            </Td>
            <Td>
              {uid === member.id ? (
                <Input
                  size="sm"
                  placeholder="닉네임"
                  defaultValue={member.nickname}
                  onChange={(e) => {
                    member.nickname = e.target.value;
                  }}
                />
              ) : (
                <Text color="fg.muted">{member.nickname}</Text>
              )}
            </Td>
            <Td>
              {uid === member.id ? (
                <Select
                  size={"sm"}
                  defaultValue={member.gender}
                  onChange={(e) => {
                    member.gender = e.target.value;
                  }}
                >
                  <option value="남">남</option>
                  <option value="여">여</option>
                </Select>
              ) : (
                <Badge
                  size="sm"
                  colorScheme={
                    member.gender === "여"
                      ? "red"
                      : member.gender === "남"
                      ? "blue"
                      : "gray"
                  }
                >
                  {member.gender ? member.gender : "미정"}
                </Badge>
              )}
            </Td>
            <Td>
              {uid === member.id ? (
                <Input
                  size={"sm"}
                  placeholder="출생연도(YYYY)"
                  defaultValue={member.birthyear}
                  onBlur={(e) => {
                    if (
                      e.target.value > new Date().getFullYear().toString() ||
                      e.target.value < (1900).toString()
                    )
                      alert(
                        "출생연도 숫자 4자리를 입력해주세요! (1900 ~ " +
                          new Date().getFullYear() +
                          ")"
                      );
                  }}
                  onChange={(e) => {
                    member.birthyear = e.target.value;
                  }}
                />
              ) : (
                <Text color="fg.muted">
                  {/* {member.birthyear} */}
                  {member.birthyear
                    ? new Date().getFullYear() - parseInt(member.birthyear) + 1
                    : ""}
                </Text>
              )}
            </Td>
            <Td>
              {uid === member.id ? (
                <Input
                  placeholder="전화번호"
                  size={"sm"}
                  defaultValue={member.phone}
                  onChange={(e) => {
                    member.phone = e.target.value;
                  }}
                />
              ) : (
                <Text color="fg.muted">{member.phone}</Text>
              )}
            </Td>
            <Td>
              <Text color="fg.muted">{member.email}</Text>
            </Td>
            <Td>
              {uid === member.id ? (
                <Input
                  placeholder="네이버 블로그 아이디"
                  size={"sm"}
                  defaultValue={member.blog}
                  onChange={(e) => {
                    member.blog = e.target.value;
                  }}
                />
              ) : (
                <Text color="fg.muted">{member.blog}</Text>
              )}
            </Td>
            <Td>
              {uid === member.id ? (
                <Button
                  w={"full"}
                  variant={"secondary"}
                  size={"sm"}
                  onClick={() => console.log("주소바꾸기")}
                >
                  {(member.zonecode ? "(" + member.zonecode + ") " : "") +
                    (member.street ? member.street : "") +
                    (member.address ? ", " + member.address : "") ===
                  ""
                    ? "주소찾기"
                    : (member.zonecode ? "(" + member.zonecode + ") " : "") +
                      (member.street ? member.street : "") +
                      (member.address ? ", " + member.address : "")}
                </Button>
              ) : (
                <Text color="fg.muted" whiteSpace={"pre-wrap"} noOfLines={2}>
                  {(member.zonecode ? "(" + member.zonecode + ") " : "") +
                    (member.street ? member.street : "") +
                    (member.address ? ", " + member.address : "")}
                </Text>
              )}
            </Td>
            <Td>
              {uid === member.id ? (
                <Select
                  size={"sm"}
                  defaultValue={member.agree}
                  onChange={(e) =>
                    (member.agree = e.target.value === "true" ? true : false)
                  }
                >
                  <option value="true">동의</option>
                  <option value="false">비동의</option>
                </Select>
              ) : (
                <Badge size="sm" colorScheme={member.agree ? "green" : "gray"}>
                  {member.agree ? "동의" : "비동의"}
                </Badge>
              )}
            </Td>
            <Td>
              <HStack spacing="1">
                <IconButton
                  icon={<FiTrash2 />}
                  variant="tertiary"
                  aria-label="Delete member"
                />
                <IconButton
                  onClick={() => {
                    if (uid === "") {
                      setUid(member.id);
                      console.log(member);
                    } else {
                      // 적용
                      updateUser(member);
                      setUid("");
                    }
                  }}
                  icon={<FiEdit2 />}
                  variant="tertiary"
                  aria-label="Edit member"
                />
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

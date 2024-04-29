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

export const TesterTable = (props: any) => {
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
                <Text>체험단명</Text>
                {/* <Icon as={IoArrowDown} color="fg.muted" boxSize="4" /> */}
              </HStack>
            </HStack>
          </Th>
          <Th minW={"100px"}>
            <HStack spacing="1">
              <Text>생성일</Text>
              <Icon as={IoArrowDown} color="fg.muted" boxSize="4" />
            </HStack>
          </Th>
          <Th minW={"100px"}>모집일정</Th>
          <Th minW={"100px"}>발표일</Th>
          <Th minW={"100px"}>리뷰일정</Th>
          <Th minW={"100px"}>모집인원</Th>
          <Th minW={"100px"}>모집구분</Th>
          <Th minW={"100px"}>조회수</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody fontSize={"sm"}>
        {members.map((campain: any) => (
          <Tr key={campain.id}>
            <Td>{campain.name}</Td>
            <Td>{campain.createdAt.split("T")[0]}</Td>
            <Td>
              {campain.startDate.split("T")[0]} ~{"\n"}
              {campain.endDate.split("T")[0]}
            </Td>

            <Td>{campain.openDate.split("T")[0]}</Td>
            <Td>
              {campain.reviewStart.split("T")[0]} ~{" "}
              {campain.reviewEnd.split("T")[0]}
            </Td>
            <Td>{campain.targetCnt}</Td>
            <Td>{campain.type}</Td>
            <Td>{campain.views}</Td>
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
                      setUid(campain.id);
                      console.log(campain);
                    } else {
                      // 적용
                      updateUser(campain);
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

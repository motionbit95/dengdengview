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
  useDisclosure,
} from "@chakra-ui/react";

import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoArrowDown } from "react-icons/io5";
import { Naver } from "./Logo";
import React from "react";
import {
  deleteDocument,
  tableCount,
  updateDoc,
} from "../../../Firebase/Database";
// import { members } from "./data";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FormLayoutWithCards } from "../../FormLayout/FormLayoutWithCards/App";
import ConfirmBox from "../../../Component/ConfirmBox";
import { convertDate } from "../../../Firebase/Util";

function ModifierButton(campain: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="gray"
        variant="ghost"
        aria-label="Edit"
        onClick={onOpen}
      >
        {<FiEdit2 />}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "7xl" }}
      >
        <ModalOverlay />
        <ModalContent m={{ base: "0", lg: "16" }}>
          <ModalHeader>체험단 수정</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLayoutWithCards
              campain={campain}
              onCancel={onClose}
              onSave={(data: any) => {
                updateDoc("Campain", campain.campain.id, data).then(() => {
                  onClose();
                  window.location.reload();
                });
              }}
            />
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}

export const TesterTable = (props: any) => {
  const { members } = props;
  const [uid, setUid] = React.useState("");
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
          {/* <Th minW={"100px"}>
            <HStack spacing="1">
              <Text>생성일</Text>
              <Icon as={IoArrowDown} color="fg.muted" boxSize="4" />
            </HStack>
          </Th> */}
          <Th minW={"100px"}>모집일정</Th>
          <Th minW={"100px"}>발표일</Th>
          {/* <Th minW={"100px"}>리뷰일정</Th> */}
          <Th minW={"100px"}>모집인원</Th>
          <Th minW={"100px"}>모집구분</Th>
          {/* <Th minW={"100px"}>조회수</Th> */}
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody fontSize={"sm"}>
        {members.map(
          (campain: any, index: number) =>
            index >= props.page * tableCount - tableCount &&
            index < props.page * tableCount && (
              <Tr key={campain.id}>
                <Td>{campain.name}</Td>
                {/* <Td>{convertDate(campain.createdAt)}</Td> */}
                <Td>
                  {campain.startDate} ~ {campain.endDate}
                </Td>

                <Td>{campain.openDate}</Td>
                {/* <Td>
              {campain.reviewStart} ~ {campain.reviewEnd}
            </Td> */}
                <Td>{campain.targetCnt}</Td>
                <Td>{campain.type}</Td>
                {/* <Td>{campain.views}</Td> */}
                <Td>
                  <HStack spacing="1">
                    <ConfirmBox
                      colorScheme="gray"
                      variant="ghost"
                      aria-label="Delete member"
                      onConfirm={() => {
                        deleteDocument("Campain", campain.id).then(() => {
                          window.location.reload();
                        });
                      }}
                      title="삭제"
                      discription="체험단를 삭제하시겠습니까?"
                      buttonText="삭제"
                    >
                      <FiTrash2 />
                    </ConfirmBox>
                    <ModifierButton campain={campain} />
                    {/* <IconButton
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
                /> */}
                  </HStack>
                </Td>
              </Tr>
            )
        )}
      </Tbody>
    </Table>
  );
};

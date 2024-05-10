import {
  Avatar,
  Badge,
  Box,
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
} from "@chakra-ui/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoArrowDown } from "react-icons/io5";
import { Rating } from "./Rating";
import { useEffect, useState } from "react";
import { get } from "request";
import { getCollection } from "../../../Firebase/Database";

export const AdTable = ({ ...props }) => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    getCollection("Ads").then(async (data: any) => {
      setAds(data);
    });
  }, []);
  return (
    <Table {...props}>
      <Thead>
        <Tr>
          <Th>신청일자</Th>
          <Th>업체명</Th>
          <Th>연락처</Th>
          <Th>유입경로</Th>
        </Tr>
      </Thead>
      <Tbody>
        {ads.map((member: any, index) => (
          <Tr key={index}>
            <Td>{member.createdAt.split("T")[0]}</Td>
            <Td>{member.businessName}</Td>
            <Td>{member.telNo}</Td>
            <Td>{member.path}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

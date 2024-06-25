import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const AdTable = ({ ...props }) => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL + "/ad/list")
      .then((res) => res.json())
      .then((data) => {
        setAds(data);
      })
      .catch((err) => {
        console.log(err);
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

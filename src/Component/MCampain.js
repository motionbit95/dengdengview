import React, { useEffect, useState } from "react";

import { Box, HStack, Heading, IconButton, Stack } from "@chakra-ui/react";
import { createDoc, fetchDocuments, getCollection } from "../Firebase/Database";
import { UserTable } from "../Application/Tables/UserTable/App";
import { CampainTable } from "../Application/Tables/CampainTable/App";
import { FormLayoutWithCards } from "../Application/FormLayout/FormLayoutWithCards/App";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft } from "react-icons/fi";
import { serverTimestamp } from "firebase/firestore";
import { formattedDate, formattedDateTime } from "../Firebase/Util";

function Campain(props) {
  const [isRegister, setIsRegister] = useState(false);
  const [page, setPage] = useState(1);
  const [members, setmembers] = useState([]);
  const [lastVisible, setLastVisible] = useState();
  useEffect(() => {
    // 전체 유저 정보를 받아옵니다.
    fetchDocuments("Campain", "createdAt", lastVisible, "initial").then(
      (data) => {
        console.log(data);
        setmembers(data.list);
        setLastVisible(data.lastVisible);
      }
    );
  }, []);
  return (
    <Box as="section" p={{ base: "4", md: "8" }}>
      {!isRegister ? (
        <CampainTable
          onRegister={() => {
            setIsRegister(!isRegister);
          }}
          isNextDisabled={members.length < 10}
          isPrevDisabled={page === 1}
          members={members}
          onPrev={() =>
            fetchDocuments("User", "createdAt", lastVisible, "previous").then(
              (data) => {
                console.log(data);
                setPage(page - 1);
                setmembers(data.list);
                setLastVisible(data.lastVisible);
              }
            )
          }
          onNext={() => {
            fetchDocuments("User", "createdAt", lastVisible, "next").then(
              (data) => {
                console.log(data);
                setPage(page + 1);
                setmembers(data.list);
                setLastVisible(data.lastVisible);
              }
            );
          }}
        />
      ) : (
        <Stack>
          <HStack>
            <IconButton
              variant="tertiary"
              icon={<FiChevronLeft size="30px" />}
              onClick={() => setIsRegister(!isRegister)}
            />
            <Heading size="sm">체험단 등록</Heading>
          </HStack>
          <FormLayoutWithCards
            campain={{}}
            onCancel={() => setIsRegister(!isRegister)}
            onSave={(data) => {
              createDoc("Campain", { ...data, views: 0 });
              setIsRegister(!isRegister);
              window.location.reload();
            }}
          />
        </Stack>
      )}
    </Box>
  );
}

export default Campain;

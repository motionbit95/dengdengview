import React, { useEffect, useState } from "react";

import { Box, HStack, Heading, IconButton, Stack } from "@chakra-ui/react";
import {
  createDoc,
  fetchDocuments,
  getCollection,
  tableCount,
} from "../Firebase/Database";
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
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    getCollection("Campain").then((data) => {
      setTotalCount(data.length);
    });

    // 전체 유저 정보를 받아옵니다.
    // fetchDocuments("Campain", "openDate", lastVisible, "initial").then(
    //   (data) => {
    //     console.log(data);
    //     setmembers(data.list);
    //     setLastVisible(data.lastVisible);
    //   }
    // );

    getCollection("Campain").then((data) => {
      setmembers(data);
    });
  }, []);
  return (
    <Box as="section" p={{ base: "4", md: "8" }}>
      {!isRegister ? (
        <CampainTable
          onRegister={() => {
            setIsRegister(!isRegister);
          }}
          isNextDisabled={
            page === Math.ceil(totalCount / tableCount)
            // members.length < tableCount ||
            // (page - 1) * tableCount + members.length >= totalCount
          }
          isPrevDisabled={page === 1}
          members={members}
          onPrev={
            () => setPage(page - 1)
            // fetchDocuments(
            //   "Campain",
            //   "createdAt",
            //   lastVisible,
            //   "previous"
            // ).then((data) => {
            //   console.log(data);
            //   setPage(page - 1);
            //   setmembers(data.list);
            //   setLastVisible(data.lastVisible);
            // })
          }
          onNext={() => {
            setPage(page + 1);
            // fetchDocuments("Campain", "openDate", lastVisible, "next").then(
            //   (data) => {
            //     console.log(data);
            //     setPage(page + 1);
            //     setmembers(data.list);
            //     setLastVisible(data.lastVisible);
            //   }
            // );
          }}
          page={page}
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
              console.log(data);
              // createDoc("Campain", { ...data, views: 0 }).then(() => {
              //   setIsRegister(!isRegister);
              //   window.location.reload();
              // });
            }}
          />
        </Stack>
      )}
    </Box>
  );
}

export default Campain;

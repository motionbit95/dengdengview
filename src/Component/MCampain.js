import React, { useEffect, useState } from "react";

import { Box, HStack, Heading, IconButton, Stack } from "@chakra-ui/react";
import { createDoc, tableCount } from "../Firebase/Database";
import { CampainTable } from "../Application/Tables/CampainTable/App";
import { FormLayoutWithCards } from "../Application/FormLayout/FormLayoutWithCards/App";
import { FiChevronLeft } from "react-icons/fi";

function Campain(props) {
  const [isRegister, setIsRegister] = useState(false);
  const [page, setPage] = useState(1);
  const [members, setmembers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL + "/campain/list/totalviews")
      .then((res) => res.json())
      .then((data) => {
        setmembers(data);
        setTotalCount(data.length);
      })
      .catch((err) => {
        console.log(err);
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
              fetch(process.env.REACT_APP_SERVER_URL + "/campain/add", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ...data,
                  views: {},
                  totalviews: 0,
                }),
              })
                .then((res) => {
                  res.json();
                  // setIsRegister(!isRegister);
                })
                .then((data) => {
                  console.log(data);
                  window.location.reload();
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          />
        </Stack>
      )}
    </Box>
  );
}

export default Campain;

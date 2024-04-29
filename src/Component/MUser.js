import React, { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import {
  fetchDocuments,
  getCollection,
  tableCount,
} from "../Firebase/Database";
import { UserTable } from "../Application/Tables/UserTable/App";

function User(props) {
  const [page, setPage] = useState(1);
  const [members, setmembers] = useState([]);
  const [lastVisible, setLastVisible] = useState();
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getCollection("User").then((data) => {
      setTotalCount(data.length);
    });
    // 전체 유저 정보를 받아옵니다.
    fetchDocuments("User", "createdAt", lastVisible, "initial").then((data) => {
      console.log(data);
      setmembers(data.list);
      setLastVisible(data.lastVisible);
    });
  }, []);
  return (
    <Box as="section" p={{ base: "4", md: "8" }}>
      <UserTable
        isNextDisabled={
          members.length < tableCount ||
          (page - 1) * tableCount + members.length >= totalCount
        }
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
    </Box>
  );
}

export default User;

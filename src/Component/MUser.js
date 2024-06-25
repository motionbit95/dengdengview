import React, { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { fetchDocuments, tableCount } from "../Firebase/Database";
import { UserTable } from "../Application/Tables/UserTable/App";

function User(props) {
  const [page, setPage] = useState(1);
  const [members, setmembers] = useState([]);
  const [lastVisible, setLastVisible] = useState();
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      console.log("get users");
      try {
        const response = await fetch(
          process.env.REACT_APP_SERVER_URL + "/auth/list",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setmembers(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch:", error.message);
      }
    };

    getUsers();
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

import React, { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import { GridQuiteMinimalistic } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/App";
import { PageHeader1 } from "../Application/PageHeader/PageHeader1";
import { fetchDocuments, getCollection } from "../Firebase/Database";

function Campain({ ...props }) {
  const [page, setPage] = useState(1);
  const [campains, setCampains] = useState([]);
  const [lastVisible, setLastVisible] = useState();

  useEffect(() => {
    // 전체 유저 정보를 받아옵니다.
    getCollection("Campain").then((data) => {
      console.log(data);
      setCampains(data);
    });
  }, []);
  return (
    <Stack
      // flex={"1"}
      w={"100%"}
      minH={"100vh"}
      spacing={"8"}
      pb={{ base: "12", md: "24" }}
      {...props}
    >
      {props.title && (
        <PageHeader1 title={props.title} description={props.description} />
      )}
      <GridQuiteMinimalistic campains={campains} />
    </Stack>
  );
}

export default Campain;

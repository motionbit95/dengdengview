import { Container, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Campain from "./Campain";
import { getCollection, searchDoc } from "../Firebase/Database";
import { orderBy } from "firebase/firestore";
import { GridQuiteMinimalistic } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/App";

const ViewMoreCampain = (props, keyword) => {
  const [page, setPage] = useState("");
  const [campains, setCampains] = useState();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const order = params.get("order");
    setPage(order);

    // if (order === "진행중인 체험단") {
    console.log("모든 체험단을 가지고 옴");
    getCollection("Campain").then((data) => {
      setCampains(data);
    });
    // }
  }, []);
  return (
    <Container py={{ base: "12", md: "24" }}>
      <Stack spacing={4}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {page}
        </Text>
        {campains && <GridQuiteMinimalistic campains={campains} />}
      </Stack>
    </Container>
  );
};

export default ViewMoreCampain;

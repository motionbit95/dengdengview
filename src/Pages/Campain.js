import React from "react";
import { Stack } from "@chakra-ui/react";
import { GridQuiteMinimalistic } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/App";
import { PageHeader1 } from "../Application/PageHeader/PageHeader1";

function Campain({ ...props }) {
  return (
    <Stack flex={"1"} w={"100%"} minH={"100vh"} {...props}>
      <PageHeader1 title={props.title} description={props.description} />
      <GridQuiteMinimalistic />
    </Stack>
  );
}

export default Campain;

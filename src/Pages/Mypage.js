import React from "react";
import { Stack, Flex } from "@chakra-ui/react";
import { GridQuiteMinimalistic } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/App";
import { PageHeader1 } from "../Application/PageHeader/PageHeader1";
import { FormWithInlineLabels } from "../Application/FormLayout/FormWithInlineLabels/App";

function Mypage({ ...props }) {
  return (
    <Flex minH={"100vh"} top={"0"} height={"100%"} w={"100%"} {...props}>
      <Stack flex={"1"} w={"100%"} minH={"100vh"} spacing={"8"} {...props}>
        <PageHeader1 title={props.title} description={props.description} />
        <FormWithInlineLabels />
      </Stack>
    </Flex>
  );
}

export default Mypage;

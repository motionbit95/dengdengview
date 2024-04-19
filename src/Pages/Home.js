import React from "react";
import Campain from "./Campain";
import { Stack } from "@chakra-ui/react";
import { Tabs1 } from "../Application/Tabs/Tabs1";

function Home(props) {
  return (
    <Stack>
      <Tabs1 />
      <Campain />
    </Stack>
  );
}

export default Home;

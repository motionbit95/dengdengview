import React, { useState } from "react";
import Campain from "./Campain";
import { Stack } from "@chakra-ui/react";
import { Tabs1 } from "../Application/Tabs/Tabs1";
import BlogCrawler from "../Component/BlogCrawler";

function Home(props) {
  const [tab, setTab] = useState("0");
  return (
    <Stack>
      <Tabs1
        onChange={(value) => {
          console.log(value);
          setTab(value);
        }}
      />
      <Campain tab={tab} />
    </Stack>
  );
}

export default Home;

import {
  Container,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
} from "@chakra-ui/react";

export const Tabs1 = () => (
  <Stack
    spacing="16"
    position={"sticky"}
    top="72px"
    zIndex="docked"
    pb={{ base: "4", md: "6" }}
  >
    {["lg"].map((size) => (
      <Tabs key={size} size={size} variant="indicator">
        <TabList>
          <Tab>최신순</Tab>
          <Tab>인기순</Tab>
          <Tab>선정확률</Tab>
          <Tab>신청마감순</Tab>
        </TabList>
        <TabIndicator />
      </Tabs>
    ))}
  </Stack>
);

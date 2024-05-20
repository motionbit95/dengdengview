import {
  Container,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
} from "@chakra-ui/react";

export const Tabs1 = (props: any) => (
  <Stack
    spacing="16"
    position={"sticky"}
    top="72px"
    zIndex="1111"
    pb={{ base: "4", md: "6" }}
  >
    {["md"].map((size) => (
      <Tabs
        key={size}
        size={size}
        variant="indicator"
        onChange={props.onChange}
      >
        <TabList
          justifyContent={"center"}
          w={"full"}
          // maxW={"container.lg"}
        >
          <Tab>전체 체험단</Tab>
          <Tab>인플루언서</Tab>
          {/* <Tab>선정확률</Tab> */}
          <Tab>구매평 체험단</Tab>
        </TabList>
        <TabIndicator />
      </Tabs>
    ))}
  </Stack>
);

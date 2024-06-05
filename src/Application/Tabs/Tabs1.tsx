import {
  Container,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
} from "@chakra-ui/react";

export const Tabs1 = (props: any) => {
  return (
    <Stack
      spacing="16"
      position={"sticky"}
      top="80px"
      zIndex="1111"
      overflowX="scroll"
      sx={{
        "::-webkit-scrollbar": {
          display: "none", // 스크롤 막대 숨기기
        },
      }}
      bg={"white"}
      py={"2"}
      px={1}
      align={{ base: "flex-start", sm: "center" }}
      borderY={"1px solid #d9d9d9"}
    >
      {["sm"].map((size) => (
        <Tabs
          key={size}
          size={size}
          variant="solid-rounded"
          borderRadius={0}
          onChange={(e) => {
            localStorage.setItem("top_menu", e.toString());
            props.setTab(e.toString());
          }}
          defaultIndex={localStorage.getItem("top_menu") ? 0 : 0}
        >
          <TabList
            // fontSize={"sm"}
            justifyContent={"center"}
            w={"full"}
            // maxW={"container.lg"}
          >
            <Tab whiteSpace={"nowrap"}>블로그</Tab>
            <Tab whiteSpace={"nowrap"}>인스타그램</Tab>
            <Tab whiteSpace={"nowrap"}>구매평 체험단</Tab>
            <Tab whiteSpace={"nowrap"}>인플루언서</Tab>
          </TabList>
          {/* <TabIndicator /> */}
        </Tabs>
      ))}
    </Stack>
  );
};

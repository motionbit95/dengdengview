import {
  Container,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
} from "@chakra-ui/react";

export const Tabs1 = () => (
  <Container py={{ base: "12", md: "16" }}>
    <Stack spacing="16">
      {["md", "lg"].map((size) => (
        <Tabs key={size} size={size} variant="indicator">
          <TabList>
            <Tab>Home</Tab>
            <Tab>Components</Tab>
            <Tab>Pricing</Tab>
          </TabList>
          <TabIndicator />
        </Tabs>
      ))}
    </Stack>
  </Container>
);

import {
  Box,
  Button,
  Container,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CustomSelect, Option } from "./CustomSelect";

export const SectionHeader2 = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      as="section"
      bg="bg.surface"
      pt={{ base: "4", md: "8" }}
      pb={{ base: "12", md: "24" }}
    >
      <Container>
        <Stack spacing="5">
          <Stack
            spacing="4"
            direction={{ base: "column", sm: "row" }}
            justify="space-between"
          >
            <Box>
              <Text textStyle="lg" fontWeight="medium">
                Member overview
              </Text>
              <Text color="fg.muted" textStyle="sm">
                All registered users in the overview
              </Text>
            </Box>
            <Stack direction="row">
              <Button variant="secondary">Invite</Button>
              <Button>Create</Button>
            </Stack>
          </Stack>
          {isMobile ? (
            <CustomSelect value="Overview">
              <Option value="Overview" />
              <Option value="Admins" />
              <Option value="Moderators" />
              <Option value="Users" />
              <Option value="Invitations" />
            </CustomSelect>
          ) : (
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Admins</Tab>
                <Tab>Moderators</Tab>
                <Tab>Users</Tab>
                <Tab>Invitations</Tab>
              </TabList>
            </Tabs>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

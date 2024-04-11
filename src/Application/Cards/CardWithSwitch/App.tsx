import {
  Box,
  Container,
  Stack,
  StackDivider,
  Switch,
  Text,
} from "@chakra-ui/react";
import { notifications } from "./data";

export const CardWithSwitch = () => (
  <Box as="section" py={{ base: "4", md: "8" }}>
    <Container maxW="3xl">
      <Box
        bg="bg.surface"
        boxShadow="sm"
        borderRadius="lg"
        p={{ base: "4", md: "6" }}
      >
        <Stack spacing="5" divider={<StackDivider />}>
          <Stack spacing="1">
            <Text textStyle="lg" fontWeight="medium">
              Notifications
            </Text>
            <Text textStyle="sm" color="fg.muted">
              Receive notifications about Chakra UI updates.
            </Text>
          </Stack>
          {notifications.map((notifcation, id) => (
            <Stack key={id} justify="space-between" direction="row" spacing="4">
              <Stack spacing="0.5" fontSize="sm">
                <Text color="fg.emphasized" fontWeight="medium">
                  {notifcation.type}
                </Text>
                <Text color="fg.muted">{notifcation.description}</Text>
              </Stack>
              <Switch defaultChecked={notifcation.isActive} />
            </Stack>
          ))}
        </Stack>
      </Box>
    </Container>
  </Box>
);

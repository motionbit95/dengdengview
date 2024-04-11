import { Box, Button, Flex, Stack, StackDivider, Text } from "@chakra-ui/react";

export const Notification2 = () => (
  <Box
    as="section"
    pt={{ base: "4", md: "8" }}
    pb={{ base: "12", md: "24" }}
    px={{ base: "4", md: "8" }}
  >
    <Flex direction="row-reverse">
      <Box
        bg="bg.surface"
        width={{ base: "full", sm: "md" }}
        boxShadow="md"
        borderRadius="lg"
      >
        <Stack direction="row" divider={<StackDivider />} spacing="0">
          <Box p="4">
            <Stack spacing="1">
              <Text textStyle="sm" fontWeight="medium">
                Updates Available
              </Text>
              <Text textStyle="sm" color="fg.muted">
                A new version is available. Please upgrade for the best
                experience.
              </Text>
            </Stack>
          </Box>
          <Stack
            justify="space-evenly"
            align="center"
            minW="24"
            divider={<StackDivider />}
            spacing="0"
          >
            <Button variant="text" size="sm">
              Update
            </Button>
            <Button variant="text" size="sm" colorScheme="gray">
              Close
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  </Box>
);

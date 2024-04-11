import {
  Box,
  Button,
  ButtonGroup,
  CloseButton,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Notification4 = () => (
  <Box
    as="section"
    pt={{ base: "4", md: "8" }}
    pb={{ base: "12", md: "24" }}
    px={{ base: "4", md: "8" }}
  >
    <Flex direction="row-reverse">
      <Box
        width={{ base: "full", sm: "md" }}
        boxShadow="md"
        bg="bg.surface"
        borderRadius="lg"
      >
        <Stack direction="row" p="4" spacing="3">
          <Stack spacing="2.5">
            <Stack spacing="1">
              <Text textStyle="sm" fontWeight="medium">
                Updates Available
              </Text>
              <Text textStyle="sm" color="fg.muted">
                A new version is available. Please upgrade for the best
                experience.
              </Text>
            </Stack>
            <ButtonGroup variant="text" size="sm" spacing="3">
              <Button colorScheme="gray">Skip</Button>
              <Button>Update</Button>
            </ButtonGroup>
          </Stack>
          <CloseButton transform="translateY(-6px)" />
        </Stack>
      </Box>
    </Flex>
  </Box>
);

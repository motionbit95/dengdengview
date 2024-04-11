import {
  Box,
  Button,
  ButtonGroup,
  Center,
  CloseButton,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

export const Notification5 = () => (
  <Box
    as="section"
    pt={{ base: "4", md: "8" }}
    pb={{ base: "12", md: "24" }}
    px={{ base: "4", md: "8" }}
  >
    <Flex direction="row-reverse">
      <Flex
        direction={{ base: "column", sm: "row" }}
        width={{ base: "full", sm: "md" }}
        boxShadow="md"
        bg="bg.surface"
        borderRadius="lg"
        overflow="hidden"
      >
        <Center
          display={{ base: "none", sm: "flex" }}
          bg="bg.accent.default"
          px="5"
        >
          <Icon as={FiInfo} boxSize="10" color="fg.accent.default" />
        </Center>
        <Stack direction="row" p="4" spacing="3" flex="1">
          <Stack spacing="2.5" flex="1">
            <Stack spacing="1">
              <Text textStyle="sm" fontWeight="medium">
                Updates Available
              </Text>
              <Text textStyle="sm" color="fg.muted">
                Hoorray. A new version is available.
              </Text>
            </Stack>
            <ButtonGroup variant="text" size="sm" spacing="3">
              <Button colorScheme="gray">Skip</Button>
              <Button>Update</Button>
            </ButtonGroup>
          </Stack>
          <CloseButton transform="translateY(-6px)" />
        </Stack>
      </Flex>
    </Flex>
  </Box>
);

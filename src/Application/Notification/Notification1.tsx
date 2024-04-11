import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  StackDivider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Notification1 = () => {
  const showAvatar = useBreakpointValue({ base: false, sm: true });
  return (
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
          <HStack divider={<StackDivider />} spacing="0">
            <HStack spacing="4" p="4" flex="1">
              {showAvatar && (
                <Avatar
                  src="https://tinyurl.com/yhkm2ek8"
                  name="Christoph Winston"
                  boxSize="10"
                />
              )}
              <Box>
                <Text fontWeight="medium" fontSize="sm">
                  Christoph Winston
                </Text>
                <Text color="fg.muted" textStyle="sm">
                  Hey buddy. You are awesome.
                </Text>
              </Box>
            </HStack>

            <Center p="4">
              <Button variant="text" size="sm">
                Reply
              </Button>
            </Center>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  BsChatTextFill,
  BsMicFill,
  BsPaperclip,
  BsPinAngleFill,
} from "react-icons/bs";
import { ChatGroupHeader } from "./ChatGroupHeader";
import { ChatMessage } from "./ChatMessage";
import { SearchInput } from "./SearchInput";
import { group, messages } from "./data";

export const SocialChatShell = () => {
  return (
    <Flex height="100vh" overflow="hidden">
      <Stack spacing="4" width="320px" borderEndWidth="1px" pt="6">
        <Box px="5">
          <Text fontSize="lg" fontWeight="medium">
            Messages ({messages.length})
          </Text>
        </Box>

        <Box px="5">
          <SearchInput />
        </Box>

        <Stack mt="2" spacing="4" flex="1" overflowY="auto" px="5" pb="5">
          <Stack mt="2" spacing="4">
            <ChatGroupHeader icon={BsPinAngleFill}>Pinned</ChatGroupHeader>
            <Stack spacing="0" mx="-4">
              {messages.map((message, index) => (
                <ChatMessage key={index} data={message} />
              ))}
            </Stack>
          </Stack>

          <Stack mt="2" spacing="4">
            <ChatGroupHeader icon={BsChatTextFill}>Messages</ChatGroupHeader>
            <Stack spacing="0" mx="-4">
              {messages.map((message, index) => (
                <ChatMessage key={index} data={message} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Flex direction="column" flex="1">
        <Flex borderBottomWidth="1px" px="4" py="4">
          <HStack spacing="4" flex="1">
            <Avatar name="Design Group" />
            <Stack spacing="0">
              <Text fontWeight="medium">{group.name}</Text>
              <Text fontSize="sm" color="fg.subtle">
                {group.stats.count} members, {group.stats.online} online
              </Text>
            </Stack>
          </HStack>

          <AvatarGroup size="sm">
            {group.members.map((member) => (
              <Avatar name={member.name} src={member.image} />
            ))}
          </AvatarGroup>
        </Flex>

        <Box flex="1" overflow="auto" px="5" py="4">
          <Box borderWidth="2px" borderStyle="dashed" height="full" />
        </Box>

        <Box bg="bg.subtle" py="4" px="5" borderTopWidth="1px">
          <InputGroup>
            <InputLeftElement>
              <IconButton
                size="sm"
                aria-label="Record voice"
                icon={<Icon as={BsMicFill} fontSize="md!" />}
                variant="ghost"
              />
            </InputLeftElement>
            <Input placeholder="Send a message..." fontSize="sm" />
            <InputRightElement>
              <IconButton
                size="sm"
                variant="ghost"
                aria-label="Send message"
                icon={<Icon as={BsPaperclip} fontSize="md!" />}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>
    </Flex>
  );
};

import { Box, Button, Flex, HStack, Stack } from "@chakra-ui/react";
import { FiDownloadCloud, FiRepeat, FiSend } from "react-icons/fi";
import { ChatActionButton } from "./ChatActionButton";
import { ChatMessage } from "./ChatMessage";
import { ChatMessages } from "./ChatMessages";
import { ChatTextarea } from "./ChatTextarea";
import * as data from "./data";

export const AiChatPromptBottom = () => {
  return (
    <Flex
      direction="column"
      pos="relative"
      bg="bg.canvas"
      height="100vh"
      overflow="hidden"
    >
      <Box overflowY="auto" paddingTop="20" paddingBottom="40">
        <ChatMessages>
          {data.chats.map((chat, index) => (
            <ChatMessage
              key={index}
              author={data.users[chat.type]}
              messages={chat.messages}
            />
          ))}
        </ChatMessages>
      </Box>

      <Box
        pos="absolute"
        bottom="0"
        insetX="0"
        bgGradient="linear(to-t, bg.canvas 80%, rgba(0,0,0,0))"
        paddingY="8"
        marginX="4"
      >
        <Stack maxW="prose" mx="auto">
          <HStack>
            <ChatActionButton icon={FiRepeat}>Regenerate</ChatActionButton>
            <ChatActionButton icon={FiDownloadCloud}>Download</ChatActionButton>
          </HStack>
          <Box as="form" pos="relative" pb="1">
            <ChatTextarea />
            <Box pos="absolute" top="3" right="0" zIndex="2">
              <Button size="sm" type="submit" variant="text" colorScheme="gray">
                <FiSend />
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

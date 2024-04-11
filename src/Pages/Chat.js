import React from "react";
import { AiChatPromptBottom } from "../Application/Conversation/AiChatPromptBottom/App";
import { PromptWithInitialActions } from "../Application/Conversation/PromptWithInitialActions/App";
import { SocialChatShell } from "../Application/Conversation/SocialChatShell/App";

function Chat(props) {
  return (
    <>
      <AiChatPromptBottom />
      <PromptWithInitialActions />
      <SocialChatShell />
    </>
  );
}

export default Chat;

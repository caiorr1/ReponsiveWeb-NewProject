import React from 'react';
import { MessageInputContainer, MessageField, SendMessageButton, SendIcon } from './styled'

const MessageInput = () => {
  return (
    <MessageInputContainer>
      <MessageField type="text" placeholder="Digite sua mensagem..." />
      <SendMessageButton>
        <SendIcon />
      </SendMessageButton>
    </MessageInputContainer>
  );
};


export default MessageInput;
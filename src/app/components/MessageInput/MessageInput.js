import React from 'react';
import { MessageInputContainer, MessageField, SendMessageButton } from './styled'

const MessageInput = () => {
  return (
    <MessageInputContainer>
      <MessageField type="text" placeholder="Digite sua mensagem..." />
      <SendMessageButton>Enviar</SendMessageButton>
    </MessageInputContainer>
  );
};

export default MessageInput;
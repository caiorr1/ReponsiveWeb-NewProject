import React from 'react';
import { MessageInputContainer, MessageField, Button, Icon } from './styled'

const MessageInput = () => {
  return (
    <MessageInputContainer>
      <Button>
        <Icon imageUrl="/images/paperclip.svg" />
      </Button>
      <MessageField type="text" placeholder="Digite sua mensagem..." />
      <Button>
        <Icon imageUrl="/images/paper-plane-tilt.svg" />
      </Button>
    </MessageInputContainer>
  );
};


export default MessageInput;
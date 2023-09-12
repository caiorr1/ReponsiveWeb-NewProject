import React from 'react';
import { MessageInputContainer, MessageField, Button } from './styled'

const MessageInput = () => {
  return (
    <MessageInputContainer>
      <Button>
        <img src="/images/paperclip.svg" alt="Ícone Anexo" style={{ width: '20px', height: '20px' }}/>
      </Button>
      <MessageField type="text" placeholder="Digite sua mensagem..." />
      <Button>
        <img src="/images/paper-plane-tilt.svg" alt="Ícone Enviar" style={{ width: '20px', height: '20px' }}/>
      </Button>
    </MessageInputContainer>
  );
};


export default MessageInput;
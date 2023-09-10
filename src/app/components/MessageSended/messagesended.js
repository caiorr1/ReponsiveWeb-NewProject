import { MessageText, MessageBubble, MessageSendContainer, MessageReceiveContainer, ChatContainer, SenderIcon } from './styled'

const MessageSend = ({ text }) => {
  return (
    <MessageSendContainer>
      <MessageBubble>
        <MessageText>{text}</MessageText>
      </MessageBubble>
    </MessageSendContainer>
  );
};

const MessageReceive = ({ text, senderImageUrl }) => {
  return (
    <MessageReceiveContainer>
      <SenderIcon imageUrl={senderImageUrl}>
        <img src={senderImageUrl} alt="Ícone do Remetente" />
      </SenderIcon>
      <MessageBubble>
        <MessageText>{text}</MessageText>
      </MessageBubble>
    </MessageReceiveContainer>
  );
};

const ChatMessage = () => {
  return (
    <ChatContainer>
      <MessageSendContainer>
        <MessageSend text="Mensagem à direita" />
      </MessageSendContainer>
      <MessageReceiveContainer>
        <MessageReceive text="Mensagem à esquerda" senderImageUrl='/images/bot-1.jpg'/>
      </MessageReceiveContainer>
    </ChatContainer>
  );
};

  export default ChatMessage;
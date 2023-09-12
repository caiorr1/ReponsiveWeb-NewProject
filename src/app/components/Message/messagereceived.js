import { MessageText, MessageBubble, MessageSendContainer, MessageReceiveContainer, ChatContainer, SenderIcon } from './styled'

const MessageReceive = ({ text, senderImageUrl }) => {
  return (
  <ChatContainer>
    <MessageReceiveContainer>
      <SenderIcon imageUrl={senderImageUrl}>
        <img src={senderImageUrl} alt="Ícone do Remetente" />
      </SenderIcon>
      <MessageBubble>
        <MessageText>{text}</MessageText>
      </MessageBubble>
    </MessageReceiveContainer>
  </ChatContainer>
  );
};


  export default MessageReceive;
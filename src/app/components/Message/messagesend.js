import { MessageText, MessageBubble, MessageSendContainer} from './styled'

const MessageSend = ({ text }) => {
  return (
    <MessageSendContainer>
      <MessageBubble>
        <MessageText>{text}</MessageText>
      </MessageBubble>
    </MessageSendContainer>
  );
};


  export default MessageSend;
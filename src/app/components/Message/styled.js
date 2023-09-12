import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2%;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  padding: 2% 4%;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 2% 2%;
  }
`;

const MessageSendContainer = styled.div`
  display: flex;
  padding: 2%;
  align-items: flex-start;
  gap: 1%;
  margin-left: auto;

  @media (max-width: 768px) {
    padding: 2% 2%;
  }
`;

const MessageReceiveContainer = styled.div`
  display: flex;
  padding: 2%;
  align-items: flex-start;
  gap: 1%;
  border-radius: 4px 8px 8px 8px;
  background: #FFF;

  @media (max-width: 768px) {
    padding: 2%;
  }
`;

const MessageBubble = styled.div`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #333333;
  max-width: 70%;
  word-wrap: break-word;
  color: black;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  box-shadow: 0 0 15px rgba(135, 170, 176, 3);


  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const MessageText = styled.div`
  flex: 1 1 0;
  color: black;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SenderIcon = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    margin-right: 10px;
    border-radius: 64px;
    border: 1px solid #6366F1;
    background: url(${props => props.imageUrl}), lightgray 50% / cover no-repeat;
  }

  @media (max-width: 768px) {
    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
`;

export {
  MessageText,
  MessageBubble,
  MessageSendContainer,
  ChatContainer,
  MessageReceiveContainer,
  SenderIcon,
};

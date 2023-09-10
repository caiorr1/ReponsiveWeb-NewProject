'use client'
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; 
  align-items: flex-start; 
  width: 100%; 
  max-width: 100%; 
  padding: 16px; 
  overflow-y: auto; 
`;

const MessageSendContainer = styled.div`
  display: flex;
  padding: 12px;
  align-items: flex-start;
  gap: 10px;
  margin-left: auto;
`;


const MessageReceiveContainer = styled.div`
  display: flex;
  padding: 12px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px 8px 8px 8px;
  background: #FFF;
`;

const MessageBubble = styled.div`
  padding: 12px;
  border-radius: 10px;
  border: 2px solid #333333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 70%;
  word-wrap: break-word;
  color: black; /* Cor do texto */
  font-size: 16px; /* Tamanho da fonte */
  font-family: 'Roboto', sans-serif; /* Fonte Roboto */
  font-weight: 400; /* Peso da fonte */
  line-height: 24px; /* Altura da linha */
`;

const MessageText = styled.div`
  flex: 1 1 0;
  color: black;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
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
`;

export { MessageText, MessageBubble, MessageSendContainer, ChatContainer, MessageReceiveContainer, SenderIcon };
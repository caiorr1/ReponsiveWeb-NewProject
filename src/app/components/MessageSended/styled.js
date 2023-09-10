'use client'
import styled from 'styled-components';

const MessageSendContainer = styled.div`
  width: 242px;
  height: 48px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

const MessageBubble = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
  align-self: stretch;
  padding: 12px;
  background: white;
  border-radius: 8px;
  border: 0.50px #CBD5E1 solid;
  word-wrap: break-word;
`;

const MessageText = styled.div`
  flex: 1 1 0;
  color: black;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 24px;
`;

export { MessageText, MessageBubble, MessageSendContainer };
'use client'
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2%; /* Espaçamento entre as mensagens como uma porcentagem da largura */
  align-items: flex-start; /* Alinha as mensagens à esquerda */
  width: 100%; /* Preencha a largura do MobileScreenSimulation */
  max-width: 100%; /* Largura máxima do MobileScreenSimulation */
  padding: 2% 4%; /* Espaçamento interno para as mensagens como uma porcentagem da largura */
  overflow-y: auto; /* Adicione uma barra de rolagem se necessário */

  @media (max-width: 768px) {
    padding: 2% 2%; /* Ajuste o padding em telas menores */
  }
`;


const MessageSendContainer = styled.div`
  display: flex;
  padding: 2%; /* Use porcentagem para o padding */
  align-items: flex-start;
  gap: 1%; /* Espaçamento entre os elementos como uma porcentagem da largura */
  margin-left: auto;
`;



const MessageReceiveContainer = styled.div`
  display: flex;
  padding: 2%;
  align-items: flex-start;
  gap: 1%;
  border-radius: 4px 8px 8px 8px;
  background: #FFF;

  @media (max-width: 768px) {
    padding: 2%; /* Ajuste o padding em telas menores */
  }
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
  line-height: 1.5; /* Altura da linha */
`;

const MessageText = styled.div`
  flex: 1 1 0;
  color: black;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.5;
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
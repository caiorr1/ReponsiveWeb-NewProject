import styled from 'styled-components';

export const MessageInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  padding: 16px;
  background-color: #f0ffff;
  margin-top: 20vh;
`;

export const MessageField = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-right: 10px; /* Espaço à direita do campo de mensagem */
`;

export const SendMessageButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  flex: 0; /* Não expande, mantém o tamanho fixo */
  white-space: nowrap; /* Evita que o botão quebre em várias linhas */
`;

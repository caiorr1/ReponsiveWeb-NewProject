import styled from 'styled-components';
import sendIcon from '/images/paper-plane-tilt.svg';

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
  flex: 0; 
  white-space: nowrap;
  background-image: url(${sendIcon}); // Adicione a imagem como plano de fundo
  background-size: 20px 20px; // Defina o tamanho da imagem
  background-repeat: no-repeat; // Impede a repetição da imagem
  background-position: center left; // Ajusta a posição da imagem (à esquerda no centro)
  padding-left: 30px; // Adicione espaço à esquerda para a imagem
`;

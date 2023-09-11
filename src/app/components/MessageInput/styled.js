import styled from 'styled-components';

const MessageInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  padding: 16px;
  background-color: #f0ffff;
  margin-top: 20vh;
`;

const MessageField = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-right: 10px;
`;

const SendMessageButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  flex: 0;
  display: flex;
  align-items: center; /* Alinhe o conteúdo verticalmente */
  justify-content: center; /* Centralize o conteúdo horizontalmente */
`;

const SendIcon = () => {
  return (
    <img
      src="/images/paper-plane-tilt.svg"
      alt="Ícone de envio"
      style={{
        width: '20px', // Defina a largura desejada
        height: '20px', // Defina a altura desejada
      }}
    />
  );
};

export { MessageInputContainer, MessageField, SendMessageButton, SendIcon }
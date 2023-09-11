import styled from 'styled-components';

const MessageInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2% 4%; /* Espaçamento interno para as mensagens como uma porcentagem da largura */
  background-color: #f0ffff;
  margin-top: 50%; /* Margem superior como uma porcentagem da altura */
`;

const MessageField = styled.input`
  flex: 1;
  padding: 1.5% 2%; /* Espaçamento interno como uma porcentagem da largura */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem; /* Tamanho da fonte responsivo */
  margin-right: 2%; /* Espaço à direita do campo de mensagem como uma porcentagem da largura */
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 3.5% 4%; /* Espaçamento interno como uma porcentagem da largura */
  cursor: pointer;
  font-size: 1.2rem; /* Tamanho da fonte responsivo */
  flex: 0;
  display: flex;
  align-items: center; /* Alinhe o conteúdo verticalmente */
  justify-content: center; /* Centralize o conteúdo horizontalmente */
  margin-right: 2%; /* Espaço à direita do botão como uma porcentagem da largura */
  width: 20%; /* Largura do botão como uma porcentagem da largura do contêiner */
  height: auto; /* Altura automática para acomodar o conteúdo */
`;

const Icon = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt="Ícone"
      style={{
        width: '100%', /* 100% da largura do contêiner */
        height: '100%', /* 100% da altura do contêiner */
        objectFit: 'contain', /* A imagem deve se ajustar ao contêiner */
      }}
    />
  );
};
export { MessageInputContainer, MessageField, Button,  Icon }

import styled from 'styled-components';

const MessageInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 4% 3%;
  background-color: #f0ffff;
  margin-top: auto;
  box-shadow: 0 0 15px rgba(135, 170, 176, 1.2);
`;

const MessageField = styled.input`
  flex: 1;
  padding: 2% 2%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-right: 2%;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 2% 2%;
  cursor: pointer;
  font-size: 1.2rem;
  flex: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2%;
  width: 20%;
  height: auto;
`;

export { MessageInputContainer, MessageField, Button }

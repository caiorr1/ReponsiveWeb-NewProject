"use client"
import React, { useState } from 'react';
import styled from 'styled-components';

// Cores
const primaryColor = '#1E1B4B';
const secondaryColor = '#EC4899';
const textColor = '#EEF2FF';

// Componentes Estilizados
const Container = styled.div`
  background-color: ${primaryColor};
  color: ${textColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  box-sizing: border-box;
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin-bottom: 10px;
  border: 2px solid ${secondaryColor};
  border-radius: 8px;
  font-size: 1em;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const SearchButton = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 15px;
  background-color: ${secondaryColor};
  color: ${textColor};
  border: none;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Instruction = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const bodyStyles = {
  background: '#1E1B4B',
  margin: 0,
  overflow: 'hidden'
};

const CarInsuranceSystemScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Adicione a lógica para integrar com a API Java usando o searchTerm
    // e exibir os dados do usuário conforme necessário.
  };

  return (
    <body style={bodyStyles}>
      <Container>
        <Logo src={"../images/LogoNome-Andromeda.png"} alt="LogoAndromeda" />
        <Title>Sua Tranquilidade, Nossa Responsabilidade</Title>
        <InputContainer>
          <SearchInput
            type="text"
            placeholder="Insira nome, CPF ou e-mail"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>Buscar</SearchButton>
        </InputContainer>
        <Instruction>Insira um nome, CPF ou e-mail para buscar dados do usuário:</Instruction>
      </Container>
    </body>
  );
};

export default CarInsuranceSystemScreen;

"use client"
// Importe as bibliotecas necessárias no início do arquivo
import React, { useState } from 'react';
import styled from 'styled-components';

const primaryColor = '#1E1B4B';
const secondaryColor = '#EC4899';
const textColor = '#EEF2FF';

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

const ResultBox = styled.div`
  background-color: ${secondaryColor};
  color: ${textColor};
  border: 2px solid ${primaryColor};
  border-radius: 8px;
  padding: 10px;
  margin-top: 20px;
`;

const bodyStyles = {
  background: '#1E1B4B',
  margin: 0,
  overflow: 'hidden',
};

const CarInsuranceSystemScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);


const testData = [
  {"placaVeiculo":"PPR9943","numeroApolice":10202322},
  {"placaVeiculo":"SHJ234","numeroApolice":10202311},
  {"placaVeiculo":null,"numeroApolice":10202310},
  {"placaVeiculo":"WUE1347","numeroApolice":10202321}
];


  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/usuarios/${searchTerm}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult(null);
    }
  };

  return (
    <body style={bodyStyles}>
      <Container>
        <Logo src={"../images/LogoNome-Andromeda.png"} alt="LogoAndromeda" />
        <Title>Sua Tranquilidade, Nossa Responsabilidade</Title>
        <InputContainer>
          <SearchInput
            type="text"
            placeholder="Insira o CPF (Exemplo: 11122233344)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>Buscar</SearchButton>
        </InputContainer>
        <Instruction>Insira o CPF para buscar veículos e apólices vinculados ao Usuário (Apenas Números)</Instruction>

        {result && (
          <ResultBox>
            {result.map((item, index) => (
              <div key={index}>
                <p>Placa do Veículo: {item.placaVeiculo}</p>
                <p>Número da Apólice: {item.numeroApolice}</p>
              </div>
            ))}
          </ResultBox>
        )}
      </Container>
    </body>
  );
};

export default CarInsuranceSystemScreen;

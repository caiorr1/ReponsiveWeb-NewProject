'use client'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f0ffff;
  color: #00A1FC;
  padding: 2%; /* Ajuste para 2% da altura do MobileScreenSimulation */
  font-family: 'Roboto', sans-serif;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 588px; /* Ajuste para a largura do MobileScreenSimulation */
  margin: 0 auto;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px; /* Tamanho fixo do logotipo */
    height: 32px; /* Tamanho fixo do logotipo */
    flex-shrink: 0;
    margin-right: 2%; /* Ajuste para 2% da largura do MobileScreenSimulation */
    border-radius: 64px;
    border: 1px solid #6366F1;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
`;

const HeaderSubtext = styled.div`
  p {
    font-size: 14px;
    color: #111827;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }

  p.uppercase {
    font-size: 10px;
    text-transform: uppercase;
    line-height: 16px;
    color: #00A1FC;
  }
`;

export { HeaderContainer, HeaderContent, HeaderLogo, HeaderSubtext };

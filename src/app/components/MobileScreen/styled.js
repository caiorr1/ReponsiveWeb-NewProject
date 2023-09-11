"use client"
import styled from 'styled-components';


const MobileScreenSimulation = styled.div`
  width: 80vw; /* Reduza a largura para 80% da largura da viewport */
  height: 98vh; /* Mantenha a altura igual à altura da viewport */
  max-width: 600px; /* Defina uma largura máxima */
  border: 2px solid #000;
  border-radius: 10px;
  margin: 56px auto 0;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  align-items: center; /* Centraliza os conteúdos verticalmente */

  @media (max-width: 768px) {
    width: 85vw; /* Ajuste a largura em telas menores */
  }
`;

export default MobileScreenSimulation;


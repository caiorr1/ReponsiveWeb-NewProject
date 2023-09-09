// styled.js
"use client"
import styled from 'styled-components';

const MobileScreenSimulation = styled.div`
  width: 80vw; /* Largura em relação à largura da viewport */
  height: 90vh; /* Altura em relação à altura da viewport */
  max-width: 588px; /* Largura máxima para limitar o tamanho em telas maiores */
  border: 2px solid #000;
  border-radius: 10px;
  margin: 56px auto 0;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export default MobileScreenSimulation;

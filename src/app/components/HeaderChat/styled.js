'use client'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f0ffff;
  padding: 3%;
  box-shadow: 0 0 15px rgba(135, 170, 176, 0.8);

`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 588px;
  margin: 0 auto;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    margin-right: 2%;
    border-radius: 64px;
    border: 1px solid #6366F1;
  }

  span {
    font-size: 14px;
    color: #111827;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    word-wrap: break-word;
    order: 1;
    margin-left: 6px;
    margin-top: -15px;
  }
`;

const HeaderSubtext = styled.div`
  color: #00A1FC;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 160% */
  text-transform: uppercase;
`;

export { HeaderContainer, HeaderContent, HeaderLogo, HeaderSubtext };

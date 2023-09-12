'use client'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f0ffff;
  color: #00A1FC;
  padding: 4%;
  font-family: 'Roboto', sans-serif;
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
    border: 1px solid #576f73;
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

'use client'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  font-family: 'Roboto', sans-serif; /* Use a fonte Roboto */
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const HeaderSubtext = styled.div`
  p {
    font-size: 14px;
  }
`;


export { HeaderContainer, HeaderContent, HeaderLogo, HeaderSubtext }; 
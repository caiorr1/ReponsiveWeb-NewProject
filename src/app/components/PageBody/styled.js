"use client"
import styled from 'styled-components';

const PageBodyWrapper = styled.main`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #1E1B4B;
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: #1E1B4B;
  min-height: 100vh; 
  padding: 20px;
`;

const Title = styled.h1`
  color: #EC4899;
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 60px;
  margin-bottom: 20px;
`;

const Description1 = styled.p`
  color: #FFF;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
`;

const Description2 = styled.p`
  color: #EEF2FF;
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

export { PageBodyWrapper, ContentWrapper, Title, Description1, Description2, Logo };


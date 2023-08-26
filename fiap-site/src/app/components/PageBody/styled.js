import styled from 'styled-components';

const PageBodyWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #1E1B4B;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Title = styled.h1`
    color: #EC4899;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px; /* 125% */
    
`;

const Description1 = styled.p`
    color: #FFF;
    /* H-4 */
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
`;

const Description2 = styled.p`
    color: #EEF2FF;
    /* H-4 */
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 125% */
`;


const Logo = styled.img`
  max-width: 100px;
`;

export { PageBodyWrapper, ContentWrapper, Title, Description1, Description2, Logo };


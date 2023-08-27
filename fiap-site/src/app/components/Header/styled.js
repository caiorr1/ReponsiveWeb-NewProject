import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40px; /* Ajuste o tamanho da imagem conforme necessário */
  height: 40px; /* Ajuste o tamanho da imagem conforme necessário */
  margin-right: 10px; /* Adicione espaço entre a imagem e o texto */
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin-left: 95rem;
  }

  li {
    cursor: pointer;
  }
`;

export { HeaderWrapper, LogoContainer, LogoImage, LogoText, Navigation };
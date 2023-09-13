import styled from 'styled-components';

const FooterWrapper = styled.footer`
background-color: #000;
width: 100%;
height: 100px;
position: fixed; /* Altere para "fixed" para manter o rodapé fixo na parte inferior */
bottom: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
`;

const Text = styled.p`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  color: #FFF;
  text-align: center;
  margin: 0; /* Remova o espaçamento padrão do parágrafo */
`;


export { FooterWrapper, Text };
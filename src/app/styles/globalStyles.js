import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body, html, div, h1, h2, h3, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    /* Seus estilos globais aqui */
    body {
    font-family: 'Poppins', sans-serif;
    background-color: #1E1B4B;
    color: #FFF;
    }
    `;

export default GlobalStyles;
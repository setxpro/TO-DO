import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap');
    * {
        padding: 0;
        margin:0;
        font-family: 'JetBrains Mono', monospace;
        box-sizing: border-box;
    }
`;

export const Container = styled.div`
    background-color: #17181F;
    color: #797A81;
    min-height: 100vh; // Vizualização horizontal inteira do navegador do client
`;

export const AreaContent = styled.div`
    margin: auto; // para ficar no meio da tela
    max-width: 980px;
    padding: 10px; // Para auxiliar a responsividade #Mobile
`;

export const Title = styled.h1`
    margin: 0;
    padding:0;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
    
`;
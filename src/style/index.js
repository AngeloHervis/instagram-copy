import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        transition: 0.3s ease;
    }
`;

    export const Screen = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: start;
    background-color: ${(props) => props.theme.primary};
    `
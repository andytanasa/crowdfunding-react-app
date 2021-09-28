import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Commissioner', sans-serif;
    background-color: lightgray;
}
ul {
    list-style: none;
    
}
`;

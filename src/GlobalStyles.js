import { createGlobalStyle } from "styled-components";

export const GlobalStyleComponent = createGlobalStyle`

    :root{
        --primary: #FE0000;
        --textPrimary: #000000;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;

        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        color: var(---textPrimary);
        
    }

`;
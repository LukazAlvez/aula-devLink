import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    element{
        --color-red: #C83E4D;
        --color-bg: #32373b;
        --color-bg-secundary: #4A5859;
        --color-wellow: #F4B860;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif
    }
    body{
        background: #32373b;
        min-height: 100vh;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;

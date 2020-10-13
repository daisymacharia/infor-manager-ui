import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        width: 100%;
    }

    body {
        font-family: 'Manrope', sans-serif;
        height: 100vh;
        text-align: center;

        /* Brand Colors */
        --color-sky: #4abfe2;

        /* System Colors */
        --color-red: #d0021b;


        /* Neutral Colors */
        --color-white: #fff;
        --color-black: #000;
        --color-altblack: #111;
        --color-gray: #666;
        --color-light-gray: #ccc;


        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        height: 100%;
    }

    /*  a tag reset */
    a,
    a:active,
    a:focus,
    a:visited {
    color: inherit;
    background: none;
    text-decoration: none;
    }

    /* p tag reset */
    p {
        margin: 0;
    }

`;

export default GlobalStyle;

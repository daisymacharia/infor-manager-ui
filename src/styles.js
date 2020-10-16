import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        width: 100%;
    }

    body {
        font-family: 'Manrope', sans-serif;
        height: 100vh;
        text-align: center;

        --color-sky: #4abfe2;
        --color-red: #d0021b;
        --color-pink: #DB537B;
        --color-altdark: #1e2833;

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
    h1,h2,h3,h4,h5 {
        margin: 0;
    }
    @media (max-width: 768px) {
        * {
        font-size: 10px;
    }
    }

`;

export default GlobalStyle;

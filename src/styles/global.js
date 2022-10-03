import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    button {
    cursor: pointer;
    border: none;
    background: transparent;
    }

    ul,
    ol,
    li {
    list-style: none;
    }

    img {
    max-width: 100%;
    }

    :root {
  --color-primary: ##27ae60;
  --color-primary-50: #93d7af;
  --color-secundary: #eb5757;

  --gray-100: #333333;
  --gray-50: #828282;
  --gray-20: #e0e0e0;
  --grey-0: #f5f5f5;

  --negative: #e60000;
  --warning: #ffcd07;
  --success: #168821;
  --information: #155bcb;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
li {
  font-family: "Inter", sans-serif;
}

`;

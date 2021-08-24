import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin:0px;
    padding:0px;
    box-sizing:border-box;
}
body {
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800&display=swap');
font-family: 'Mulish', sans-serif;
font-size: 16px;
font-weight: normal;
}
`;

export default GlobalStyle;

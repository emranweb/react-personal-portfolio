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

ul{
  list-style:none;
  padding:0px
}
li{
  display:inline-block;
  padding: 0px 5px;
}
a{
  text-decoration:none;
}

footer{
  background-color:#000;
  color:#fff;
  padding:10px 0px;
}

`;

export default GlobalStyle;

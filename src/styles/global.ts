import { createGlobalStyle } from "styled-components"

function pixelsToRem(...values: Array<number>) {
  // eslint-disable-next-line no-return-assign, no-param-reassign
  return values.reduce((a, i) => (a += `${i / 16}rem `), "").trim()
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: ${pixelsToRem(16)};
  }

  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px "Encode Sans", sans-serif;
  }
  :root{
    //fonts
    --font1:normal 700 ${pixelsToRem(40)}/${pixelsToRem(
  48
)} 'Dancing Script', cursive, sans-serif;
    --font2:normal 700 ${pixelsToRem(32)}/${pixelsToRem(24)} 'Abel', sans-serif;
    //small
    --small:normal 400 ${pixelsToRem(16)}/${pixelsToRem(16)} 'Abel', sans-serif;
    --small2:normal 600 ${pixelsToRem(16)}/${pixelsToRem(
  16
)} 'Abel', sans-serif;
    --title:normal 600 ${pixelsToRem(24)}/${pixelsToRem(20)} 'Abel', sans-serif;
    --title2:normal 600 ${pixelsToRem(22)}/${pixelsToRem(
  20
)} 'Abel', sans-serif;




    //colors
    --color-text:#333;
    //grey
    --grey-BG:#f8f8f8;
    --grey:#E7E7E7;
    --greyDark:#a0a0a0;
    --greydark2:#E2E2E2;
  }
  a{
    list-style: none;
    display: inline-block;
    text-decoration: none;
  }

  ul,ol,li {
    list-style: none;
  }
`

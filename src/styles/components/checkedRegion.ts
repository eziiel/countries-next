/* eslint-disable @typescript-eslint/indent */
import styled, { css } from "styled-components"

function pixelsToRem(...values: Array<number>) {
  // eslint-disable-next-line no-return-assign, no-param-reassign
  return values.reduce((a, i) => (a += `${i / 16}rem `), "").trim()
}

interface PropsList {
  statusRegion: boolean;
}

const Nav = styled.nav`
  width: 250px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Checked =
  styled.div <
  PropsList >
  `
  display:flex;
  width: 100%;
  height: 39px;
  padding: ${pixelsToRem(8)};
  font: var(--small);
  border-radius:5px;
  background: var(--grey);
  border: 2px solid var(--grey);
  color: #000;
  cursor: pointer;

  @media (max-width: 1150px) {
    font: var(--small0);
    padding: .5rem;
    align-items: center;
  }

  ${props =>
    props.statusRegion &&
    css`
      background: #fff;
    `}
`

const Ul =
  styled.ul <
  PropsList >
  `
  position: absolute;
  width: 100%;
  border-radius:5px;
  background: var(--grey);
  border: 2px solid var(--grey);
  bottom:-70%;
  transform: translateX(40px);
  transition: .3s ease-in;
  opacity: 0;
  z-index: 1;

  ${props =>
    props.statusRegion &&
    css`
      opacity: initial;
      transform: initial;
      background: #fff;
    `};
`
const Li =
  styled.li <
  PropsList >
  `
  a{
    width: 98%;
    display: inline-block;
    padding: ${pixelsToRem(8)};
    color: #333;
    font: inherit;
    font: var(--small);
    margin: 2px;
    cursor: default;

    ${props =>
      props.statusRegion &&
      css`
        cursor: pointer;
      `};
  }

`

export { Nav, Checked, Ul, Li }

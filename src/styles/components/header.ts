import styled from "styled-components"

function pixelsToRem(...values: Array<number>) {
  // eslint-disable-next-line no-return-assign, no-param-reassign
  return values.reduce((a, i) => (a += `${i / 16}rem `), "").trim()
}

const Head = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--grey);
  /* position: fixed; */
  height: ${pixelsToRem(94)};
  z-index: 2;
`
const SubHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pixelsToRem(22)};
`
const Logo = styled.a`
  display: inline-block;
  font: var(--font1);
  cursor: pointer;
`

const Theme = styled.button`
  font: var(--font2);
  cursor: pointer;
`

export { SubHeader, Head, Logo, Theme }

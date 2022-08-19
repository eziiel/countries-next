import styled from "styled-components"

const HomeMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-direction: column;
`

const HomeUl = styled.ul`
  padding: 2rem 0;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`

export { HomeMain, HomeUl }

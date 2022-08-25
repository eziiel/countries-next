import styled from "styled-components"

const CountryMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-direction: column;
`

const CountryUl = styled.ul`
  padding: 2rem 0;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`
const NoFound = styled.span`
  padding: 5rem;
`
export { CountryMain, CountryUl, NoFound }

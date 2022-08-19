import styled from "styled-components"

function pixelsToRem(...values: Array<number>) {
  // eslint-disable-next-line no-return-assign, no-param-reassign
  return values.reduce((a, i) => (a += `${i / 16}rem `), "").trim()
}

const Section = styled.section`
  width: 100%;
  height: ${pixelsToRem(194)};
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--grey);
  z-index: 2;
`

const SubSection = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pixelsToRem(22)};
`

const SearchName = styled.input.attrs({
  type: "text",
  placeholder: "nome",
})`
  color: #333;
  padding: ${pixelsToRem(8)};
  font: var(--small);
  width: 100%;
  border-radius: 5px;
  background: var(--grey);
  border: 2px solid var(--grey);

  ::placeholder {
    color: #b5b5b5;
  }

  :focus {
    outline: none;
    border: 2px solid #b5b5b5;
    box-shadow: 0 0 15px 1px #dfdfdf;
    background: #fff;
  }
`
const FormCountry = styled.form`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Section, FormCountry, SubSection, SearchName }

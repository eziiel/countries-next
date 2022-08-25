import styled, { css } from "styled-components"

function pixelsToRem(...values: Array<number>): string {
  // eslint-disable-next-line no-return-assign, no-param-reassign
  const res = values.reduce((a, i) => (a += `${i / 16}rem `), "").trim()
  return res
}

interface Props {
  flag: string;
}

interface Name {
  name?: string;
}

const Card = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  border-radius: 8px 8px;
  cursor: pointer;
  background: ${props => props.theme.colors.card};
`

const FlagCountry =
  styled.div.attrs((props: Props) => ({
    style: {
      background: `url(${props.flag})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
  })) <
  Props >
  `
  display: block;
  border-radius: 8px 8px 0 0;
  width: 100%;
  min-height: 200px;
`

const InfoData = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: ${pixelsToRem(22)};
`

const Info =
  styled.li <
  Name >
  `
  display: flex;
  gap: 0.5rem;
  max-width: 20ch;

  ${props =>
    props.name &&
    css`
      span {
        font: var(--title);
        width: 100%;
        text-align: center;
        padding: 0.5rem 0;
        letter-spacing: 1px;
      }
    `}
`

const SpanInfo = styled.span`
  font: var(--small2);
`

const SpanAnswer = styled.span`
  font: var(--small);
`

export { Card, FlagCountry, InfoData, Info, SpanInfo, SpanAnswer }

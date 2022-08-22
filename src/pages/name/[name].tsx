import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import React from "react"
import { ContextData } from "../../../context"
import CardCountry from "../../components/country"
import * as S from "../../styles/pages/name"

export default function Name({ data }) {
  const { setCountries } = React.useContext(ContextData)
  const router = useRouter()
  const { name: nameCountry } = router.query

  if (router.isFallback) {
    return <h1>carregando...</h1>
  }

  React.useEffect(
    (): void =>
      // eslint-disable-next-line no-unused-expressions
      router.query.name &&
      typeof nameCountry === "string" &&
      setCountries(nameCountry),
    []
  )

  return (
    <S.CountryMain>
      <S.CountryUl>
        {data.map(({ name, capital, region, population, flag }) => (
          <CardCountry
            key={name}
            name={name}
            capital={capital}
            region={region}
            population={population}
            flag={flag}
          />
        ))}
      </S.CountryUl>
    </S.CountryMain>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `https://restcountries.com/v2/name/bra?fields=name,capital`
  )
  const data = await response.json()
  const paths = data?.map(item => ({ params: { name: item.name } }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { name } = context.params

  const response = await fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,region,population,flag`
  )
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import React from "react"
import CardCountry from "../../components/country"
import * as S from "../../styles/pages/country"

export default function Country({ data }) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>carregando...</h1>
  }

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
  const paths = data?.map(item => ({ params: { country: item.name } }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { country } = context.params

  const response = await fetch(
    `https://restcountries.com/v2/name/${country}?fields=name,capital,region,population,flag`
  )
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}

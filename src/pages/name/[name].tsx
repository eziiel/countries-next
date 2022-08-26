import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import { ContextData } from "../../../context"
import CardCountry from "../../components/country"
import * as S from "../../styles/pages/name"

export default function Name({ data }) {
  const { setCountries } = React.useContext(ContextData)
  const router = useRouter()
  const { name: nameCountry } = router.query

  React.useEffect(
    (): void =>
      // eslint-disable-next-line no-unused-expressions
      router.query.name &&
      typeof nameCountry === "string" &&
      setCountries(nameCountry),
    []
  )

  if (router.isFallback) {
    return <h1>carregando...</h1>
  }

  return (
    <>
      <Head>
        <title>Countries - search</title>
      </Head>
      <S.CountryMain>
        {Array.isArray(data) ? (
          <S.CountryUl>
            {data.map(({ name, capital, region, population, flags }) => (
              <CardCountry
                key={name}
                name={name}
                capital={capital}
                region={region}
                population={population}
                flag={flags.png}
              />
            ))}
          </S.CountryUl>
        ) : (
          <S.NoFound>Country no Found</S.NoFound>
        )}
      </S.CountryMain>
    </>
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

  try {
    const response = await fetch(
      `https://restcountries.com/v2/name/${name}?fields=name,capital,region,population,flags`
    )
    const data = await response.json()
    return {
      props: {
        data,
      },
    }
  } catch (error) {
    return {
      props: {
        data: error,
        revalidate: 3600,
      },
    }
  }
}

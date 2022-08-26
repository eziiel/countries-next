import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import CardCountry from "../../components/country"
import * as S from "../../styles/pages/region"

function Region({ res }) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>carregando...</h1>
  }

  return (
    <>
      <Head>
        <title>Countries - region</title>
      </Head>
      <S.RegionMain>
        <S.RegionUl>
          {res.map(({ name, capital, region, population, flags }) => (
            <CardCountry
              key={name.common}
              name={name.common}
              capital={capital}
              region={region}
              population={population}
              flag={flags.svg}
            />
          ))}
        </S.RegionUl>
      </S.RegionMain>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://restcountries.com/v3.1/region/america")
  const data = await response.json()

  const paths = data?.map(region => ({
    params: { region: region.region },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { region } = context.params

  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}`
  )
  const data = await response.json()

  // eslint-disable-next-line no-shadow
  const res = data.map(({ name, capital, region, population, flags }) => ({
    name,
    capital,
    region,
    population,
    flags,
  }))

  return {
    props: {
      res,
    },
  }
}

export default Region

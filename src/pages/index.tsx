import React from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import * as S from "../styles/pages/home"
import CardCountry from "../components/country"
import { ContextData } from "../../context"

function Countries({ data }) {
  const { setRegion, regions } = React.useContext(ContextData)

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    typeof regions[0] === "string" && setRegion(regions[0])
  }, [])
  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>
      <S.HomeMain>
        <S.HomeUl>
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
        </S.HomeUl>
      </S.HomeMain>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const url =
    "https://restcountries.com/v2/name/br?fields=name,capital,region,population,flag"
  const response = await fetch(url)
  const data = await response.json()

  return {
    props: { data },
    revalidate: 3600,
  }
}

export default Countries

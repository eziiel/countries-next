import React from "react"
import { GetStaticProps } from "next"
import * as S from "../styles/pages/home"
import CardCountry from "../components/country"

function Countries({ data }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
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

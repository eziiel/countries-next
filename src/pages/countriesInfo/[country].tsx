import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import React from "react"
import { ContextData } from "../../../context"

export default function Country({ data }) {
  const { countries } = React.useContext(ContextData)

  const router = useRouter()

  if (router.isFallback) {
    return <h1>carregando...</h1>
  }

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    countries.trim() === "" && router.push("/")
  }, [countries])

  return (
    <ul>
      {data.map(({ name, capital }) => (
        <li key={name}>
          <p>{name}</p>
          <p>{capital}</p>
        </li>
      ))}
    </ul>
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
    `https://restcountries.com/v2/name/${country}?fields=name,capital`
  )
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}

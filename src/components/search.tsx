import { useRouter } from "next/router"
import React from "react"
import { ContextData } from "../../context"
import * as S from "../styles/components/search"

function Search() {
  const router = useRouter()
  const { countries, setCountries } = React.useContext(ContextData)

  const handleCountry = (value: string) => {
    setCountries(value)
    if (value.length === 0) router.push("/")
  }

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault()

    // eslint-disable-next-line no-unused-expressions
    if (countries.trim().length === 0) {
      router.push("/")
      return
    }
    const regexp = /[a-z]/gi
    const res = countries.match(regexp)
    const resCountry = res.join("").trim()
    setCountries(resCountry)
    // eslint-disable-next-line no-unused-expressions
    router.query
      ? router.push(`/name/${resCountry}`)
      : (router.query.country = resCountry)
  }

  return (
    <S.Section>
      <S.SubSection>
        <S.FormCountry onSubmit={e => handleForm(e)}>
          <S.SearchName
            value={countries}
            onChange={value => handleCountry(value.target.value)}
          />
        </S.FormCountry>
      </S.SubSection>
    </S.Section>
  )
}

export default Search

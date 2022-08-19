import { useRouter } from "next/router"
import React from "react"
import { ContextData } from "../../context"
import * as S from "../styles/components/search"

function Search() {
  const router = useRouter()
  const { countries, setCountries } = React.useContext(ContextData)

  const handleCountry = (value: string) => {
    setCountries(value)
  }

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault()
    const regexp = /[a-z]/gi
    const res = countries.match(regexp)

    // eslint-disable-next-line no-unused-expressions
    router.query
      ? router.push(`/countriesInfo/${res.join("").trim()}`)
      : (router.query.country = countries)
  }

  return (
    <S.Section>
      <S.SubSection>
        <S.FormCountry onSubmit={e => handleForm(e)}>
          <S.SearchName onChange={value => handleCountry(value.target.value)} />
        </S.FormCountry>
      </S.SubSection>
    </S.Section>
  )
}

export default Search

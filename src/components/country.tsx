import Image from "next/image"
import React from "react"
// import Image from "next/image"
import * as S from "../styles/components/country"

interface Props {
  flag: string;
  name: string;
  capital: string;
  population: string;
  region: string;
}

function CardCountry({ name, capital, flag, population, region }: Props) {
  return (
    <S.Card>
      <Image
        style={{
          borderRadius: "10px 10px 0 0",
        }}
        src={flag}
        alt={flag}
        width={315}
        priority
        height={220}
      />
      {/* <S.FlagCountry flag={flag} /> */}
      <S.InfoData>
        <S.Info name={name}>
          <S.SpanAnswer>{name}</S.SpanAnswer>
        </S.Info>
        <S.Info>
          <S.SpanInfo>Capital:</S.SpanInfo>
          <S.SpanAnswer>{capital}</S.SpanAnswer>
        </S.Info>
        <S.Info>
          <S.SpanInfo>Region:</S.SpanInfo>
          <S.SpanAnswer>{region}</S.SpanAnswer>
        </S.Info>
        <S.Info>
          <S.SpanInfo>Population:</S.SpanInfo>
          <S.SpanAnswer>{population}</S.SpanAnswer>
        </S.Info>
      </S.InfoData>
    </S.Card>
  )
}

export default CardCountry

import React from "react"
import Link from "next/link"
import * as S from "../styles/components/header"

function Header() {
  return (
    <S.Head>
      <S.SubHeader>
        <Link href="/">
          <S.Logo>Countries</S.Logo>
        </Link>
        <S.Theme>theme</S.Theme>
      </S.SubHeader>
    </S.Head>
  )
}

export default Header

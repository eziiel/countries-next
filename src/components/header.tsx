import React from "react"
import Link from "next/link"
import * as S from "../styles/components/header"
import { ContextData } from "../../context"

function Header() {
  const { themeStatus, setThemeStatus } = React.useContext(ContextData)

  const handleTheme = () => {
    setThemeStatus(!themeStatus)
  }

  return (
    <S.Head>
      <S.SubHeader>
        <Link href="/">
          <S.Logo>Countries</S.Logo>
        </Link>
        <S.Theme onClick={handleTheme}>theme</S.Theme>
      </S.SubHeader>
    </S.Head>
  )
}

export default Header

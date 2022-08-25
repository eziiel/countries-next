import React from "react"
import Link from "next/link"
import Switch from "react-switch"
import { shade } from "polished"
import { ThemeContext } from "styled-components"
import * as S from "../styles/components/header"
import { ContextData } from "../../context"

interface Props {
  toggleTheme(): void;
}
function Header({ toggleTheme }: Props) {
  const { themeStatus, setThemeStatus } = React.useContext(ContextData)
  const { colors } = React.useContext(ThemeContext)

  const handleChangeTheme = () => {
    setThemeStatus(!themeStatus)
  }
  return (
    <S.Head>
      <S.SubHeader>
        <Link href="/">
          <S.Logo>Countries</S.Logo>
        </Link>
        {/* <S.Theme onClick={toggleTheme}>theme</S.Theme> */}
        <S.Theme onClick={handleChangeTheme}>
          <Switch
            onChange={toggleTheme}
            checked={!themeStatus}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.2, colors.second)}
            onColor={colors.primary}
            offHandleColor={colors.primary}
          />
          <S.ThemeSpan>theme</S.ThemeSpan>
        </S.Theme>
      </S.SubHeader>
    </S.Head>
  )
}

export default Header

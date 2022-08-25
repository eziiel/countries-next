import React from "react"
import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
// eslint-disable-next-line import/namespace
import Global from "../styles/global"
import Header from "../components/header"
import Search from "../components/search"
import { ContextProvider } from "../../context"
import light from "../styles/theme/light"
import dark from "../styles/theme/dark"
import usePersisted from "../utils/usePersisted"

// eslint-disable-next-line react/function-component-definition
const MyApp: React.FC = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = usePersisted("theme", "dark")

  const handleTheme = () => {
    // eslint-disable-next-line no-shadow, no-return-assign, no-param-reassign
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? dark : light}>
      <ContextProvider>
        <Global />
        <Header toggleTheme={handleTheme} />
        <Search />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  )
}

export default MyApp

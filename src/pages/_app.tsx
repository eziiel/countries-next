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

// eslint-disable-next-line react/function-component-definition
const MyApp: React.FC = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = React.useState(light)

  const handleTheme = () => {
    setTheme(theme === light ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
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

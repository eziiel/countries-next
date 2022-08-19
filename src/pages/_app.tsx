import React from "react"
import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
// eslint-disable-next-line import/namespace
import Global from "../styles/global"
import Header from "../components/header"
import Search from "../components/search"
import { ContextProvider } from "../../context"
import theme from "../styles/theme"

// eslint-disable-next-line react/function-component-definition
const MyApp: React.FC = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <Global />
      <Header />
      <Search />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ContextProvider>
  </ThemeProvider>
)

export default MyApp

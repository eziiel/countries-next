import React from "react"
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/jsx-props-no-spreading
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          {/* eslint-disable-next-line @next/next/google-font-display */}
          <link
            href="https://fonts.googleapis.com/css2?family=Encode+Sans:400,
          500,700"
          />
          <link rel="icon" href="favicon.ico" />

          <meta content="Countries" property="og:title" />
          <meta
            content="Busca de paises nome de paises regiao dos paises do mundo"
            name="description"
          />
          <meta
            content="Busca de paises nome de paises regiao dos paises do mundo"
            property="og:description"
          />
          <meta property="og:type" content="country" />
          <meta
            property="og:image"
            content="http://localhost:3000/banner.png"
          />
          <meta
            property="og:url"
            content="https://countries-next-rho.vercel.app/"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

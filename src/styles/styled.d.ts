// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "styled-components"

declare module "styled-components" {
  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme{
    title: string,

    colors: {
      background: string,
      text: string,
      primary: string,
      second: string,
      card:string,
    },
  }
}

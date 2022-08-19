// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { type } from "os"
import "styled-components"

import theme from "./theme"

export type Theme = typeof theme

declare module "styled-components" {
  declare type DefaultTheme = Theme
}

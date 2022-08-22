import React, { ReactNode } from "react"

type PropsInitial = {
  themeStatus: string,
  setThemeStatus: (newState: string) => void,
  countries: string,
  setCountries: (newState: string) => void,
  region: string,
  setRegion: (newState: string) => void,
  regions: string[],
}

const initial = {
  themeStatus: "theme",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setThemeStatus: () => {},
  countries: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCountries: () => {},
  region: "filter by region",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setRegion: () => {},
  regions: [
    "filter by region",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ],
}

type PropsChildren = {
  children: ReactNode,
}

const ContextData = React.createContext<PropsInitial>(initial)

function ContextProvider({ children }: PropsChildren) {
  const [themeStatus, setThemeStatus] = React.useState(initial.themeStatus)
  const [countries, setCountries] = React.useState(initial.countries)
  const [region, setRegion] = React.useState(initial.region)
  const { regions } = initial

  return (
    <ContextData.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        themeStatus,
        setThemeStatus,
        countries,
        setCountries,
        region,
        setRegion,
        regions,
      }}
    >
      {children}
    </ContextData.Provider>
  )
}

export { ContextData, ContextProvider }

import React, { ReactNode } from "react";


type PropsInitial = {
  countriesInitial : string[];
  countries : string;
  setCountries : (newState:string) => void;
  region:string;
  setRegion: (newState:string) => void;
  regions:string[];
}

const initial = {
  countriesInitial : ["brazil","germany","albania","algeria","iceland","japan","denmark","jamaica"],
  countries : '',
  setCountries : () => {},
  region:"filter by region",
  setRegion: () => {},
  regions : ["filter by region", "Africa", "America","Asia", "Europe","Oceania"]
}

type PropsChildren = {
  children:ReactNode
}


const ContextData = React.createContext<PropsInitial>(initial)

const ContextProvider = ({children}:PropsChildren) => {
  const [countries,setCountries] = React.useState(initial.countries)
  const [region,setRegion] = React.useState(initial.region)
  const regions = initial.regions
  const countriesInitial = initial.countriesInitial


  const data = {
    countries,
    setCountries,
    region,
    setRegion,
    regions,
    countriesInitial,
  }
  return (
    <ContextData.Provider value={data}>
      {children}
    </ContextData.Provider>
  )
}



export{
  ContextData,
  ContextProvider,
}

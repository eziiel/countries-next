import Link from "next/link"
import React from "react"
import { ContextData } from "../../context"
import * as S from "../styles/components/checkedRegion"

function CheckedRegion() {
  const { region, regions, setRegion } = React.useContext(ContextData)
  const [statusRegion, setStatusRegion] = React.useState(false)
  const refList = React.useRef<HTMLDivElement>(null)

  const [, regionsList] = regions

  const handleList = () => {
    setStatusRegion(!statusRegion)
  }

  const handleRegion = (value: string) => {
    // eslint-disable-next-line no-unused-expressions
    value !== regions[0] && statusRegion && setRegion(value)
  }

  if (typeof window === "object") {
    const html = document.documentElement
    html.addEventListener("click", e => {
      // eslint-disable-next-line no-unused-expressions
      refList.current === e.target ? null : setStatusRegion(false)
    })
  }

  return (
    <S.Nav>
      <S.Checked ref={refList} onClick={handleList} statusRegion={statusRegion}>
        {region}
      </S.Checked>
      <S.Ul statusRegion={statusRegion}>
        {Array.isArray(regionsList) &&
          regionsList.map(item => (
            <S.Li
              statusRegion={statusRegion}
              key={item}
              onClick={() => handleRegion(item)}
            >
              {statusRegion && <Link href={`/region/${item}`}>{item}</Link>}
              {/* {item} */}
            </S.Li>
          ))}
      </S.Ul>
    </S.Nav>
  )
}

export default CheckedRegion

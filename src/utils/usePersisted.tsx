import React from "react"

function usePersisted(key: string, initialState: string) {
  // eslint-disable-next-line consistent-return
  const [state, setState] = React.useState(() => {
    if (typeof window === "object") {
      const storage = localStorage.getItem(key)
      return storage ? JSON.parse(storage) : initialState
    }
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersisted

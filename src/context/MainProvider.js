import { createContext } from "react"

const Context = createContext({
  test: () => { },
})

export const MainProvider = ({ children }) => {
  return (
    <Context.Provider value={{ test: () => console.log('test') }}>{children}</Context.Provider>
  )
}
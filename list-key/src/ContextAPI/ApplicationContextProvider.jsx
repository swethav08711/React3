import React from "react"
//context object
export const AppContext = React.createContext()
// our own custom wrapper react component
export default function ApplicationContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false)
  return (
    <AppContext.Provider value={[isAuth, setIsAuth]}>
      {children}
    </AppContext.Provider>
  )
}

//1. create contest
//2 create a wrapper and pass the context provider into it with choildren
//3 value into the provider
//4 pass the wrapper around wherever you want to use
//5

import React from "react"
export const AuthContext = React.createContext({
  count: 0,
  handleChange: () => {},
})

export default function AuthContexting({ children }) {
  const [count, setCount] = React.useState(50)

  const handleChange = x => {
    setCount(x)
  }
  return (
    <div>
      <AuthContext.Provider value={{ count, handleChange }}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

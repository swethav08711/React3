import React from "react"
export const ThemeContext = React.createContext()

const themes = {
  dark: {
    color: "white",
    background: "black",
  },
  light: {
    color: "black",
    background: "white",
  },
}
export default function ThemeProvde({ children }) {
  const [theme, setTheme] = React.useState("light")
  const themeData = themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  const value = [{ theme, themeData }, toggleTheme]
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

import React from "react"
import { AppContext } from "../ContextAPI/ApplicationContextProvider"
import { ThemeContext } from "../ContextAPI/ThemeProvde"
export default function Header() {
  const [isAuth, setIsAuth] = React.useContext(AppContext)
  const [{ theme }, toggleTheme] = React.useContext(ThemeContext)
  return (
    <div>
      this is a navbar!
      <div>
        {isAuth ? (
          <button onClick={() => setIsAuth(false)}>SIGN OUT</button>
        ) : (
          <button onClick={() => setIsAuth(true)}>SIGN In</button>
        )}
      </div>
      <div>
        <button onClick={toggleTheme}>
          Toggle theme to {theme === "light" ? "dark" : "light"}
        </button>
      </div>
    </div>
  )
}

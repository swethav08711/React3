import React from "react"
import { AppContext } from "../ContextAPI/ApplicationContextProvider"
import { ThemeContext } from "../ContextAPI/ThemeProvde"
export default function Body() {
  const [isAuth] = React.useContext(AppContext)
  const [{ theme, themeData }] = React.useContext(ThemeContext)
  const currentTheme = themeData[theme]
  if (isAuth) {
    return (
      <div
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.background,
        }}
      >
        <div>Hey !Welcome Back</div>
        <div>Would u like to continue with your applicaiton</div>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Plase Signup to continue</h3>
      </div>
    )
  }
}

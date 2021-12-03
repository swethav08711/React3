import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import ApplicationContextProvider from "./ContextAPI/ApplicationContextProvider"
import ThemeProvde from "./ContextAPI/ThemeProvde"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvde>
      <ApplicationContextProvider>
        <App />
      </ApplicationContextProvider>
    </ThemeProvde>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

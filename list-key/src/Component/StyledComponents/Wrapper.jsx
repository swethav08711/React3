import styled from "styled-components"
import React from "react"
const Form = styled.div`
  background-color: ${props => (props.theme === "light" ? "white" : "brown")};
  color: ${props => (props.theme === "light" ? "brown" : "white")};
  input {
    width: 200px;
    height: 50px;
    margin: 20px;
    border-color: ${props => props.borderc};
  }
  input:hover {
    border: 1px solid red;
  }
`
export function Wrapper({ children }) {
  const [theme, setTheme] = React.useState("light")
  return (
    <>
      <Form theme={theme}>
        {children}
        <h1>Hello</h1>
      </Form>

      <button
        onClick={() => {
          setTheme(prev => (prev === "light" ? "dark" : "light"))
        }}
      >
        Change theme to {theme === "light" ? "dark" : "light"}
      </button>
    </>
  )
}

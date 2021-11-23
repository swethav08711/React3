import React from "react"
import Header from "./Header"

export default function StateManagement() {
  const [counter, setCounter] = React.useState(10)
  return (
    <div>
      <Header counter={counter} />
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1)
        }}
      >
        Sub
      </button>
    </div>
  )
}

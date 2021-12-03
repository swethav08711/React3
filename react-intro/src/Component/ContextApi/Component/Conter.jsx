import React from "react"
import { AuthContext } from "../Context/AuthContext"
export default function Conter() {
  const { count, handleChange } = React.useContext(AuthContext)
  return (
    <div>
      <h1>counter is : {count}</h1>
      <button
        onClick={() => {
          handleChange(count + 1)
        }}
      >
        Add 1
      </button>
    </div>
  )
}

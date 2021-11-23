import React from "react"

export default function Header({ counter }) {
  const [name, setName] = React.useState("Masai")
  return (
    <div>
      <h1>Counter is : {counter}</h1>
      <p>{name}</p>
      <button
        onClick={() => {
          setName("Masai School")
        }}
      >
        change name
      </button>
    </div>
  )
}

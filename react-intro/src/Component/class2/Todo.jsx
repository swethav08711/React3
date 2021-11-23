import React from "react"

export default function Todo() {
  const [input, setInput] = React.useState("swetha")
  const [name, setName] = React.useState([])
  return (
    <div>
      <h1>your Name is :{input}</h1>
      <input
        onChange={e => {
          setInput(e.target.value)
        }}
        type="text"
        placeholder="Add something"
      />
      <button
        onClick={() => {
          setName([...name, input])
        }}
      >
        Add
      </button>
      <div>
        <ul>
          {name.map(ele => (
            <li>{ele}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

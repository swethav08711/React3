import React from "react"
import { v4 as uuid } from "uuid"
export default function TodoInput({ handleTodo }) {
  const [text, setText] = React.useState("")

  return (
    <div>
      <input
        value={text}
        onChange={e => {
          setText(e.target.value)
        }}
        type="text"
        placeholder="Text Something"
      />
      <button
        onClick={() => {
          const payload = {
            id: uuid(),
            title: text,
            status: Math.random() < 0.4,
          }
          handleTodo(payload)
          setText("")
        }}
      >
        Submit
      </button>
    </div>
  )
}

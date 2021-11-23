import React from "react"

export default function TodoItems({ item, handleDelete, handleToggle }) {
  return (
    <div>
      <p>{item.title}</p>
      status:{item.status ? "done" : "notdone"}
      <button
        onClick={() => {
          handleToggle(item.id)
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          handleDelete(item.id)
        }}
      >
        Delete
      </button>
    </div>
  )
}

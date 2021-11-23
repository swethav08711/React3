import React from "react"
import TodoItems from "./TodoItems"

export default function TodoList({ TodosLi, handleDelete, handleToggle }) {
  if (TodosLi.length < 1) {
    return <h2>Add something</h2>
  }
  return (
    <>
      {TodosLi.map(el => {
        return (
          <TodoItems
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            key={el.id}
            item={el}
          />
        )
      })}
    </>
  )
}

import React from "react"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

export default function Todos() {
  const [text, setText] = React.useState([])
  const [isFiltering, setIsfiltering] = React.useState(false)
  const handleTodos = items => {
    setText([...text, items])
  }
  const handleFilter = () => {
    setIsfiltering(!isFiltering)
  }
  const handleDelete = id => {
    setText(text.filter(item => item.id !== id))
  }
  const handleToggle = id => {
    const updateToggle = text.map(item =>
      item.id === id ? { ...item, status: !item.status } : item
    )
    setText(updateToggle)
  }
  return (
    <div>
      <TodoInput handleTodo={handleTodos} />
      <TodoList
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        TodosLi={text.filter(e => (isFiltering ? e.status === true : e))}
      />

      <button onClick={handleFilter}>
        {isFiltering ? "Show all" : "Show only Completed"}
      </button>
    </div>
  )
}

import React from "react"

export default function UseEffect() {
  const [count, setCount] = React.useState(0)
  const handleAdd = () => {
    setTimeout(() => {
      setCount(prev => {
        return prev + 1
      })
    }, 1000)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

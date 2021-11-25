import React from "react"

export default function Age() {
  const [count, setCount] = React.useState(0)
  const [age, setAge] = React.useState()

  React.useEffect(() => {
    console.log("Inside Effect")
    return () => {
      //clean up before addding
      console.log("unmopunting")
    }
  }, [age])
  return (
    <div>
      <h1>{age}</h1>
      <button
        onClick={() => {
          setAge(Math.random())
        }}
      >
        Change to Random Age
      </button>

      <hr />

      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Add 1
      </button>
    </div>
  )
}

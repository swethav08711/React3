import React from "react"
import axios from "axios"
export default function ReactForm() {
  const [text, setText] = React.useState("")
  const [data, setdata] = React.useState([])

  React.useEffect(() => {
    setTask()
  }, [])
  const setTask = () => {
    axios.get("http://localhost:2001/posts").then(({ data }) => {
      setdata(data)
    })
  }

  return (
    <>
      <input
        placeholder="Add"
        value={text}
        type="text"
        onChange={e => {
          setText(e.target.value)
        }}
      />
      <button
        onClick={() => {
          const payload = {
            title: text,
            status: false,
          }

          axios.post("http://localhost:2001/posts", payload).then(() => {
            setTask()
          })
          setText("")
        }}
      >
        Add
      </button>
      <div>
        {data.map(e => (
          <p key={e.id}>{e.title}</p>
        ))}
      </div>
    </>
  )
}

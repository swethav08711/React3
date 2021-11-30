import React from "react"
import axios from "axios"
const initdata = {
  name: "",
}
export default function TodoAxios() {
  const [text, setText] = React.useState(initdata)
  const [data1, setData] = React.useState([])
  const { name } = text
  React.useEffect(() => {
    setTask()
  }, [])
  const setTask = () => {
    axios.get("http://localhost:3002/Todo").then(({ data }) => {
      setData(data)
    })
  }
  const handleInput = e => {
    let { name, value } = e.target
    setText(prev => ({ ...prev, [name]: value }))
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Add something"
        onChange={handleInput}
      />
      <button
        onClick={() => {
          const payload = {
            name: name,
          }
          axios.post("http://localhost:3002/Todo", payload).then(() => {
            setTask()
          })
        }}
      >
        Submit
      </button>

      <div>
        {data1.map(e => (
          <div key={e.id}>
            <p>{e.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

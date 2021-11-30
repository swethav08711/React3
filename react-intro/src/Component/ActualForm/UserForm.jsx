import axios from "axios"
import React from "react"
const initState = {
  name: "",
  isMarried: "",
  gender: "",
  email: "",
}
export default function UserForm() {
  const [formdata, setFormdata] = React.useState(initState)
  const [update, setUpdate] = React.useState([])

  const { name, isMarried, gender, email } = formdata
  const fileRef = React.useRef()
  React.useEffect(() => {
    setTask()
  }, [])
  const setTask = () => {
    axios.get("http://localhost:2001/Todo").then(({ data }) => {
      setUpdate(data)
    })
  }
  const handleChange = e => {
    let { name, value, checked, type } = e.target
    value = type === "checkbox" ? checked : value
    setFormdata(prev => ({ ...prev, [name]: value }))
  }
  const onSubmit = e => {
    e.preventDefault()
    console.log(fileRef.current.files[0])
  }

  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input onChange={handleChange} type="text" name="name" value={name} />
        </label>
        <br />
        <br />
        <label>
          email
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          />
        </label>
        <label>
          married
          <input
            onChange={handleChange}
            type="checkbox"
            name="isMarried"
            checked={isMarried}
          />
        </label>
        <br />
        <br />
        <select name="gender" value={gender} onChange={handleChange}>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="D">Do not want to disclose</option>
        </select>
        <br />
        <br />
        <input type="file" ref={fileRef} />
        <br />

        <br />
        <button
          onClick={() => {
            const payload = {
              name: name,
              isMarried: isMarried,
              gender: gender,
              email: email,
            }
            axios.post("http://localhost:2001/Todo", payload).then(() => {
              setTask()
            })
          }}
        >
          Add
        </button>
        <div>
          {update.map(e => (
            <div key={e.id}>
              <p>{e.name}</p>

              <p>{e.gender}</p>
              <p>{e.email}</p>
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

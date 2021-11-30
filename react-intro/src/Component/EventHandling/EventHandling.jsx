import React from "react"
const datainti = {
  name: "",
  email: "",
  age: "",
}
export default function EventHandling() {
  const [list, setList] = React.useState(datainti)
  const handleForm = e => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
  }
  const handleSubmit = () => {
    console.log(list)
  }
  const { name, email, age } = list
  return (
    <>
      <h1>Form</h1>
      <input
        value={name}
        name="name"
        placeholder="Name"
        onChange={handleForm}
      />
      <br />
      <br />
      <input
        value={email}
        name="email"
        placeholder="Email"
        onChange={handleForm}
      />
      <br />
      <br />
      <input value={age} name="age" placeholder="Age" onChange={handleForm} />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

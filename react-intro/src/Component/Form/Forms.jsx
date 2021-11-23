import React from "react"

export default function Forms() {
  const [formdata, setFormdata] = React.useState({
    name: "",
    email: "",
    number: "",
    password: "",
  })
  const handleChange = e => {
    const payload = {
      ...formdata,
      [e.target.name]: e.target.value,
    }
    setFormdata(payload)
  }
  const handleDefault = e => {
    e.preventDefault()
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
  }
  return (
    <form onSubmit={handleDefault}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Enter Name"
      />
      <input
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Enter Email"
      />
      <input
        onChange={handleChange}
        type="number"
        name="number"
        placeholder="Enter Numebr"
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Enter Password"
      />
      <input onChange={handleChange} type="submit" value="Submit" />
    </form>
  )
}

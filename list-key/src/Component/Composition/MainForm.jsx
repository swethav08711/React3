import React from "react"

import Form from "./Form"

export default function MainForm() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    email: "",
    gender: "",
    country: "",
  })
  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    console.log(setFormData)
  }
  const onSubmit1 = e => {
    e.preventDefault()
  }
  const onSubmit2 = e => {
    e.preventDefault()
  }
  return (
    <div>
      <Form onSubmit={onSubmit1}>
        <input
          value={formData.username}
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          value={formData.password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <input
          value={formData.email}
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input value="submit" type="submit" />
      </Form>

      <Form onSubmit={onSubmit2}>
        <input
          value={formData.gender}
          name="gender"
          placeholder="gender"
          onChange={handleChange}
        />
        <input
          value={formData.country}
          name="country"
          placeholder="country"
          onChange={handleChange}
        />

        <input value="submit" type="submit" />
      </Form>
    </div>
  )
}

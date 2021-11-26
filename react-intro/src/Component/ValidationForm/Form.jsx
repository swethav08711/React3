import React from "react"
import useForm from "react-hook-form"
export default function Form() {
  const { register, changeHandle, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <form onSubmit={changeHandle(onSubmit)}>
      <input type="text" name="email" placeholder="Email" ref={register} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        ref={register({
          required: "Password Required",
          minLength: { value: 8, message: "TOO SHORT" },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <input type="submit" />
    </form>
  )
}

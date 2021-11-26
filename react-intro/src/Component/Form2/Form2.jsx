import React from "react"

export default function Form2() {
  return (
    <form>
      <div>
        <input type="text" name="name" />
      </div>
      <div>
        <select>
          <option key="male">Male</option>
          <option key="female">Female</option>
        </select>
      </div>
      <div>
        <label>Marital status</label>
      </div>
    </form>
  )
}

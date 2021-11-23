import React from "react"
import { v4 as uuid } from "uuid"
export default function Temp() {
  const arr = [1, 2, 3, 4, 5]
  return (
    <div>
      {arr.map(el => (
        <p key={uuid()}>Paragraph :{el}</p>
      ))}
    </div>
  )
}

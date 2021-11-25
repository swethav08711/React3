import React from "react"
import styles from "./Restaurent.module.css"
function StarRating({ filterhandler }) {
  return (
    <div className={styles.button_container}>
      <button onClick={() => filterhandler({ star: 1 })}>1 Star</button>
      <button onClick={() => filterhandler({ star: 2 })}>2 Star</button>
      <button onClick={() => filterhandler({ star: 3 })}>3 Star</button>
      <button onClick={() => filterhandler({ star: 4 })}>4 Star</button>
    </div>
  )
}
export default StarRating

import React from "react"
import styles from "./Restaurent.module.css"
function StarRating({ filterhandler }) {
  return (
    <div className={styles.button_container}>
      <button onClick={filterhandler}>1 Star</button>
      <button onClick={filterhandler}>2 Star</button>
      <button onClick={filterhandler}>3 Star</button>
      <button onClick={filterhandler}>4 Star</button>
    </div>
  )
}
export default StarRating

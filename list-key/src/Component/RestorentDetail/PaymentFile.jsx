import React from "react"
import styles from "./Restaurent.module.css"
function PaymentOption({ sortingLHOption, sortingHLOption }) {
  return (
    <div className={styles.button_container}>
      <button onClick={sortingLHOption}>Low to High</button>
      <button onClick={sortingHLOption}>High to Low</button>
    </div>
  )
}
export default PaymentOption

import React from "react"
import styles from "./Restaurent.module.css"
function PaymentOption({ paymentOptin }) {
  return (
    <div className={styles.button_container}>
      <button onClick={() => paymentOptin("Cash")}>Card</button>
      <button onClick={() => paymentOptin("Online")}>Cash</button>
      <button onClick={() => paymentOptin("All")}>Cash</button>
    </div>
  )
}
export default PaymentOption

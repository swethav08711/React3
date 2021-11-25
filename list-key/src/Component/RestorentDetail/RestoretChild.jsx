import React from "react"

import styles from "./Restaurent.module.css"

const RestorentChild = props => {
  const {
    imags,
    catogories,
    votes,
    reviews,
    cost,
    min,
    time,
    star,
    payment,
    restaurant,
  } = props.data
  console.log(props.data.payment.card)
  return (
    <div className={styles.first_container1}>
      <div className={styles.first_container}>
        <div>
          <img className={styles.first_container_image} src={imags} alt="" />
        </div>
        <div className={styles.first_container_Details}>
          <h1 className={styles.header_h1}>{restaurant}</h1>
          <h3 className={styles.header_h3}>{catogories}</h3>
          <h3 className={styles.header_h3}>Cost ₹{cost} for one</h3>
          <div className={styles.second_container}>
            <h3 className={styles.header_h3}>Min ₹{min}</h3>
            <h3 className={styles.header_h3_another}>Up to ₹{time}</h3>
          </div>
          {payment.cash && payment.card ? (
            <h3 className={styles.header_h3}>Accepts All payment</h3>
          ) : payment.card ? (
            <h3 className={styles.header_h3}>Accepts card payment</h3>
          ) : (
            <h3 className={styles.header_h3}>Accepts cash payment</h3>
          )}
        </div>

        <div className={styles.thired_container}>
          <h1 className={styles.header_h4}>{star}</h1>
          <h4 className={styles.header_h3}>{votes} votes</h4>
          <h4 className={styles.header_h3}>{reviews} reviews</h4>
        </div>
      </div>
      <div className={styles.button_tag_keft}>
        <button className={styles.button_tag}>Order Online</button>
      </div>
    </div>
  )
}

export default RestorentChild

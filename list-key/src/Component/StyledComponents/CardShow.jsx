import React from "react"
import styles from "./card.module.css"
export default function CardShow(props) {
  console.log(props.name)

  return (
    <main className={styles.main_container}>
      <div className={styles.scene}>
        <div className={styles.card}>
          <div className={styles.card_front}>
            <img
              src="https://raw.githubusercontent.com/clumes/credit-card/211ffe28adbe3c35e54357cb0f6a8a641dabed76/images/visa-logo.svg"
              className={styles.card_logo}
              alt="logo"
            />
            <div className={styles.card_number}>
              <div className={styles.number_group}>{props.card}</div>
              {/* <div className={styles.number_group}>2016</div>
              <div className={styles.number_group}>7239</div>
              <div className={styles.number_group}>1586</div> */}
            </div>
            <div className={styles.card_details}>
              <div className={styles.card_holder}>
                <span className={styles.card_holder_title}>Card Holder</span>
                <span className={styles.card_holder_name}>{props.name}</span>
              </div>
              <div className={styles.card_expiration}>
                <span className={styles.card_expiration_title}>Expires</span>
                <span className={styles.card_expiration_date}>
                  {props.year}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.card_back}>
            <div className={styles.card_stripe}></div>
            <div className={styles.card_signature}>
              <span className={styles.card_cvv}>{props.cvc}</span>
              <span className={styles.card_cvv_number}>239</span>
            </div>
            <p className={styles.card_info}>
              Using this card to purchase goods and services whenever you see
              the VISA symbol. Your use of this card is acceptance to your
              issuer's arragements including amendments.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

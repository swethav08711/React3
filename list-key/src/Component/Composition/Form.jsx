import React from "react"
import styles from "./Form.module.css"
import styled from "styled-components"
const Wrapper = styled.form`
  background-color: blueviolet;
`
export default function Form(props) {
  const { children, onSubmit } = props
  return (
    <>
      <Wrapper onSubmit={onSubmit} className={styles.myForm}>
        {children}
        <h2>Hello</h2>
      </Wrapper>
    </>
  )
}

import React from "react"
import styled from "styled-components"

const types = {
  disabled: "lightgrey",
  primary: "palevioletred",
  secondary: "paleturquoise",
}
const Button = styled.button`
  color: white;
  background: ${props =>
    !types[props.type] ? "palevioletred" : types[props.type]};
  padding: 1rem;
  font-size: 1.5rem;
  border: 0;
  border-radius: 0 0 0.5rem 0.5rem;
  margin: 10px 20px;
`

const List = styled.div`
  max-width: 20rem;
  > * {
    :first-child {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
    :last-child {
      border-bottom: 1px solid black;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }
`

const ListItem = styled.div`
  border: 1px solid black;
  border-bottom: 0px;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background: lightcoral;
  }
`
export default function SecondStyled() {
  return (
    <div>
      <Button type="disabled">Hello</Button>
      <Button type="secondary">Hello</Button>
      <Button type="primary">Hello</Button>
      <List>
        {["masai School", "bangalore", "India"].map(items => (
          <ListItem key={items}>{items}</ListItem>
        ))}
      </List>
    </div>
  )
}

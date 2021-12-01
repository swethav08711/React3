import React from "react"
const Icon = ({ title, left }) => (
  <div style={{ display: "flex" }}>
    {left}
    <div>{title}</div>
  </div>
)
const Row = ({ children, gap = 0, p = 0, border = 0 }) => {
  return (
    <div
      style={{
        display: "flex",
        gap,
        padding: p,
        border: `${border}px solid black`,
      }}
    >
      {children}
    </div>
  )
}
export default function WeStyled() {
  return (
    <>
      <div>
        <Icon left={<>@</>} title={"hello"} right={<></>} />
      </div>
      <Row p={10} gap={12} border={2}>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </Row>
    </>
  )
}

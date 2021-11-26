import React from "react"

export default function ButtonDeploy(props) {
  return (
    <>
      <h1>button</h1>
      {props.status === 0 ? <button onClick={props.start}>start</button> : ""}
      {props.status === 1 ? (
        <div>
          <button onClick={props.stop}>stop</button>
          <button onClick={props.reset}>Reset</button>
        </div>
      ) : (
        ""
      )}
      {props.status === 2 ? (
        <div>
          <button onClick={props.resume}>Resume</button>
          <button onClick={props.reset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

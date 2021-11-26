import React from "react"
import DisplayDeploy from "./DisplayDeploy"
import ButtonDeploy from "./ButtonDeploy"
export default function StopWatch() {
  const [time, setTime] = React.useState({ ms: 0, s: 0, m: 0, h: 0 })
  const [interv, setInterv] = React.useState()
  const [status, setStatus] = React.useState(0)
  const start = () => {
    run()
    setStatus(1)
    setInterv(setInterval(run, 10))
  }
  var updatedMs = time.ms,
    updateds = time.s,
    updatedM = time.m,
    updatedH = time.h
  const run = () => {
    if (updatedM === 60) {
      updatedH++
      updatedM = 0
    }
    if (updateds === 60) {
      updatedM++
      updateds = 0
    }
    if (updatedMs === 100) {
      updateds++
      updatedMs = 0
    }
    updatedMs++
    return setTime({ ms: updatedMs, s: updateds, m: updatedM, h: updatedH })
  }
  const stop = () => {
    clearInterval(interv)
    setStatus(2)
  }
  const reset = () => {
    clearInterval(interv)
    setStatus(0)
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  }
  const resume = () => start()
  return (
    <div>
      <h1>StopWatch</h1>
      <DisplayDeploy time={time} />
      <ButtonDeploy
        resume={resume}
        reset={reset}
        status={status}
        stop={stop}
        start={start}
      />
    </div>
  )
}

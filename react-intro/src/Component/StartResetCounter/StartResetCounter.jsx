import React, { useEffect, useRef, useState } from "react"

export default function StartResetCounter() {
  const [state, setState] = useState(0)
  const timerRef = useRef(null)
  useEffect(() => {
    return pauseTimer
  }, [])
  const startTimer = () => {
    if (timerRef.current === null)
      timerRef.current = setInterval(() => {
        setState(prev => prev + 1)
      }, 1000)
  }
  const pauseTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = null
  }
  const resetTimer = () => {
    pauseTimer()
    setState(0)
  }
  return (
    <div>
      <h1>Hello</h1>
      <h3>{state}</h3>
      <button onClick={startTimer}>START</button>
      <button onClick={pauseTimer}>PAUSE</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  )
}

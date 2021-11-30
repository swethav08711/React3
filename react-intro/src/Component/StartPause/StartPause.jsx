import React from "react"

export default function StartPause() {
  const [time, setTime] = React.useState(0)
  const [isRunning, setIsRunning] = React.useState(false)
  const timerRef = React.useRef()
  const ref = React.useRef()

  React.useEffect(() => {
    startTimer()
    return stopTimer
  }, [])

  const startTimer = () => {
    if (isRunning) {
      return
    }
    timerRef.current = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)
    setIsRunning(true)
  }
  const stopTimer = () => {
    clearInterval(timerRef.current)
    setIsRunning(false)
  }
  const onSubmit = () => {
    console.log(ref.current.files[0])
  }
  return (
    <div>
      <h1>Counter</h1>
      <h3>{time}</h3>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>PAUSE</button>
      <div>
        <h1>Image</h1>
        <input type="file" ref={ref} />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  )
}

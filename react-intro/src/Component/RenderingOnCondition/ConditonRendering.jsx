import React from "react"

export default function ConditonRendering() {
  const [loading, setLoading] = React.useState(false)
  const [iserror, setError] = React.useState(false)
  const [show, setShow] = React.useState(false)
  const fetchdata = () => {
    setLoading(true)
    setError(false)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  const fetchDatawithoutError = () => {
    setLoading(true)
    setError(false)
    setTimeout(() => {
      setLoading(false)
      setError(true)
    }, 2000)
  }
  return loading ? (
    <div>
      <h1>....loading</h1>
    </div>
  ) : iserror ? (
    <>
      <h1>Something went wrong</h1>
      <button onClick={fetchdata}>Do you want to fetch data again</button>
    </>
  ) : (
    <div>
      <h1>Hello</h1>
      <p>How U All Doing</p>
      <button onClick={fetchdata}>Fetch data</button>
      <button onClick={fetchDatawithoutError}>Fetch Data without error</button>
      <br />
      <button
        onClick={() => {
          setShow(prev => !prev)
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
      <br />
      {show && new Date().toLocaleString()}
    </div>
  )
}

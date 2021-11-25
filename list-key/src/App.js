import React from "react"
import axios from "axios"
import Reusingchildcomponent from "./Component/RestorentDetail/resResuse"
import styles from "./Component/RestorentDetail/Restaurent.module.css"
function App() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    setTask()
  }, [])

  const setTask = () => {
    axios.get("http://localhost:3002/data").then(({ data }) => {
      setData(data)
    })
  }
  return (
    <div className={styles.main_cont}>
      {data.map(items => (
        <Reusingchildcomponent data={items} key={items.id} />
      ))}
    </div>
  )
}
export default App

import React from "react"
import axios from "axios"
import Reusingchildcomponent from "./Component/RestorentDetail/resResuse"
import styles from "./Component/RestorentDetail/Restaurent.module.css"
import RestorentInput from "./Component/RestorentDetail/RestorentInput"
import PaymentOption from "./Component/RestorentDetail/PaymentFile"
import StarRating from "./Component/RestorentDetail/resData"
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
  const sortingLHOption = () => {
    axios
      .get("http://localhost:3002/data?_sort=reviews&_order=asc")
      .then(({ data }) => {
        setData(data)
      })
  }
  const sortingHLOption = () => {
    axios
      .get("http://localhost:3002/data?_sort=reviews&_order=desc")
      .then(({ data }) => {
        setData(data)
      })
  }
  const filterhandle = () => {
    console.log(setTask())
  }
  return (
    <>
      <RestorentInput setTask={setTask} />
      <PaymentOption
        sortingLHOption={sortingLHOption}
        sortingHLOption={sortingHLOption}
      />
      <StarRating filterhandle={filterhandle} />
      <div className={styles.main_cont}>
        {data.map(items => (
          <Reusingchildcomponent data={items} key={items.id} />
        ))}
      </div>
    </>
  )
}
export default App

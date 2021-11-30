import React from "react"
import axios from "axios"
import Reusingchildcomponent from "./Component/RestorentDetail/resResuse"
import styles from "./Component/RestorentDetail/Restaurent.module.css"
import RestorentInput from "./Component/RestorentDetail/RestorentInput"
import PaymentOption from "./Component/RestorentDetail/PaymentFile"
//import Form from "./Component/Composition/Form"
//import MainForm from "./Component/Composition/MainForm"
import StyledComponents from "./Component/StyledComponents/StyledComponents"
import TodoAxios from "./Component/Axios_Todo/TodoAxios"
// import StarRating from "./Component/RestorentDetail/resData"
function App() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    setTask()
  }, [])

  const setTask = () => {
    axios
      .get("http://localhost:3002/data?_sort=star&_order=asc")
      .then(({ data }) => {
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
  const filterhandler = value => {
    axios
      .get("http://localhost:3002/data?_sort=star&_order=asc")
      .then(({ data }) => {
        return data.star >= value
      })
      .then(({ data }) => {
        setData(data)
      })
  }
  return (
    <>
      <RestorentInput setTask={setTask} />
      <PaymentOption
        sortingLHOption={sortingLHOption}
        sortingHLOption={sortingHLOption}
      />
      <div>
        <button
          onClick={() => {
            filterhandler(1)
          }}
        >
          1 Star
        </button>
        <button
          onClick={() => {
            filterhandler(2)
          }}
        >
          1 Star
        </button>
        <button
          onClick={() => {
            filterhandler(3)
          }}
        >
          1 Star
        </button>
        <button
          onClick={() => {
            filterhandler(4)
          }}
        >
          1 Star
        </button>
      </div>
      <div className={styles.main_cont}>
        {data.map(items => (
          <Reusingchildcomponent data={items} key={items.id} />
        ))}
      </div>
      {/* <MainForm /> */}
      <StyledComponents />
      <TodoAxios />
    </>
  )
}
export default App

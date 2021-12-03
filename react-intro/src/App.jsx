// import React, { useEffect } from "react"
// import axios from "axios"

import React from "react"

import Counter from "./Component/ContextApi/Component/Conter"
import DoubleCounter from "./Component/ContextApi/Component/DoubleCounter"
// import UserForm from "./Component/ActualForm/UserForm"
// import EventHandling from "./Component/EventHandling/EventHandling"
// import ConditonRendering from "./Component/RenderingOnCondition/ConditonRendering"
// import StartPause from "./Component/StartPause/StartPause"

// import ReactForm from "./Component/React_forms/ReactForm"
// import StopWatch from "./Component/Stopwatch/StopWatch"
// import Form from "./Component/ValidationForm/Form"
//import StartResetCounter from "./Component/StartResetCounter/StartResetCounter"
//import PaginationTodo from "./Component/TodoAssignment/PaginationTodo"
// import Todo from "./Component/useEffect/Todo"
// import Age from "./Component/useEffect/Age"
// import CountDown from "./Component/useEffect/CountDown"
// import UseEffect from "./Component/useEffect/UseEffect"

// import Forms from "./Component/Form/Forms"
// import Todos from "./Component/todo/Todos"

//import StateManagement from "./Component/class2/StateManagement"
// import Todo from "./Component/class2/Todo"
// import Temp from "./Component/temp/Temp"

// const baseReq = axios.create({
//   baseURL: "http://localhost:2002/todos",
//   headers: {
//     Authorization: "euwribfwiye1234",
//   },
// })
// baseReq.interceptors.request.use(
//   function (config) {
//     if (config.url.endsWith("1")) {
//       console.log("2nd todo is not allowed")
//       return config
//     }
//     return config
//   },
//   function (err) {
//     console.error("Error occurred")
//   }
// )
function App() {
  // const handleRequests = async () => {
  //   ?_sort=title&_page=1&_limit=1
  //   const res1 = baseReq.get("/2", {
  //     params: {
  //       _page: "2",
  //       _limit: "1",
  //     },
  //   })
  //   const res2 = baseReq.get("/3")
  //   const res3 = baseReq.get("/4")
  //   Promise.all([res1, res2, res3]).then(res => {
  //     console.log(res)
  //   })
  // }
  // useEffect(() => {
  //   axios
  //     .patch("http://localhost:2002/todos/2", {
  //       status: "true",
  //       name: "swe",
  //     })
  //     .then(res => {
  //       if (res.status === 200) {
  //         console.log(res.data)
  //       }
  //     })
  // }, [])
  // const [show, setShow] = React.useState(true)
  return (
    <div>
      {/* <button onClick={handleRequests}>REQUEST</button> */}
      {/* <StateManagement /> */}
      {/* <Todo /> */}
      {/* <Temp /> */}
      {/* <Todos /> */}
      {/* <Forms /> */}
      {/* <UseEffect /> */}

      {/* unmounting */}
      {/* {show ? (
        <>
          <CountDown />
          <button
            onClick={() => {
              setShow(!show)
            }}
          >
            Hide Counter
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          Show Counter
        </button>
      )} */}

      {/* <Age /> */}
      {/* <Todo /> */}
      {/* <StartResetCounter /> */}
      {/* <PaginationTodo /> */}
      {/* <StopWatch /> */}
      {/* <ReactForm /> */}
      {/* <Form /> */}
      {/* <EventHandling/> */}
      {/* <ConditonRendering /> */}
      {/* <StartPause /> */}
      {/* <UserForm /> */}
      <Counter />
      <DoubleCounter />
    </div>
  )
}

export default App

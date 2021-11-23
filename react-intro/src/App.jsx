// import React, { useEffect } from "react"
// import axios from "axios"

// import Forms from "./Component/Form/Forms"
import Todos from "./Component/todo/Todos"

// import StateManagement from "./Component/class2/StateManagement"
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
  //   //?_sort=title&_page=1&_limit=1
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
  return (
    <div>
      {/* <button onClick={handleRequests}>REQUEST</button> */}
      {/* <StateManagement /> */}
      {/* <Todo /> */}
      {/* <Temp /> */}
      <Todos />
      {/* <Forms /> */}
    </div>
  )
}

export default App

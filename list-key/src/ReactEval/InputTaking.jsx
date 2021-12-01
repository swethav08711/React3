import React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import axios from "axios"
import RecipeReviewCard from "./Card"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
const initdata = {
  title: "",
  description: "",
}
export default function InputTaking() {
  const [titled, setTitle] = React.useState(initdata)
  const [data, setData] = React.useState([])
  const { title, description } = titled

  React.useEffect(() => {
    setTask()
  }, [])
  const setTask = () => {
    axios.get("http://localhost:3002/note").then(({ data }) => {
      setData(data)
    })
  }
  const handleTitle = e => {
    let { name, value } = e.target
    setTitle(prev => ({ ...prev, [name]: value }))
  }
  const handleDelete = id => {
    console.log(id)
    axios.delete("http://localhost:3002/note/" + id).then(() => {
      setTask()
    })
  }
  return (
    <div style={{ marginLeft: "40%" }}>
      <div style={{ marginTop: "10px" }}>
        <TextField
          id="demo-helper-text-aligned"
          label="Title"
          name="title"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <TextField
          sx={{ width: "50%" }}
          id="demo-helper-text-aligned-no-helper"
          label="Description"
          name="description"
          value={description}
          onChange={handleTitle}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button
          variant="outlined"
          onClick={() => {
            const payload = {
              title: title,
              description: description,
            }
            axios.post("http://localhost:3002/note", payload).then(() => {
              setTask()
            })
            setTitle(initdata)
          }}
        >
          Submit
        </Button>
        <RecipeReviewCard data={data} handleDelete={handleDelete} />
        <Stack spacing={2} sx={{ marginTop: "50px" }}>
          <Pagination count={10} color="primary" />
        </Stack>
      </div>
    </div>
  )
}

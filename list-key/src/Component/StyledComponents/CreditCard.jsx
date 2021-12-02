import * as React from "react"
import Box from "@mui/material/Box"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import PersonIcon from "@mui/icons-material/Person"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import LockIcon from "@mui/icons-material/Lock"

import Button from "@mui/material/Button"
import { v4 as uuid } from "uuid"
import CardShow from "./CardShow"
export default function SelectTextFields() {
  const [text, setText] = React.useState({
    name: "",
    card: "",
    month: "",
    year: "",
    cvc: "",
  })
  const [data, setData] = React.useState([])
  const handleInputChange = e => {
    const { value, name } = e.target
    setText({ ...text, [name]: value })
  }
  const handlesubmit = () => {
    const payload = {
      name: text.name,
      card: text.card,
      month: text.month,
      year: text.year,
      cvc: text.cvc,
      id: uuid(),
    }
    setData([...data, payload])
  }
  return (
    <div style={{ marginLeft: "200px" }}>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <h1>Payment Details</h1>
        <FormControl variant="standard" sx={{ width: "25%" }}>
          <InputLabel htmlFor="input-with-icon-adornment">
            CARDHOLDER NAME
          </InputLabel>
          <Input
            name="name"
            value={text.name}
            onChange={handleInputChange}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        <TextField
          sx={{ width: "25%" }}
          id="input-with-icon-textfield"
          name="card"
          value={text.card}
          onChange={handleInputChange}
          label="CARD NUMBER"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CreditCardIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "8%" }}
          id="input-with-icon-textfield"
          label="EXPRY MONTH"
          name="month"
          value={text.month}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarTodayIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          sx={{ width: "8%" }}
          id="input-with-icon-textfield"
          name="year"
          value={text.year}
          onChange={handleInputChange}
          label="EXPERY YEAR"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarTodayIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          sx={{ width: "7%" }}
          id="input-with-icon-textfield"
          name="cvc"
          value={text.cvc}
          onChange={handleInputChange}
          label="CVC"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <Button variant="contained" component="span" onClick={handlesubmit}>
        Pay
      </Button>

      <div>
        {data.map(e => {
          return <CardShow key={e.id} {...e} />
        })}
      </div>
    </div>
  )
}

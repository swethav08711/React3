import React from "react"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: " 200px",
  fontSize: "23px",
  textAlign: "center",
}

export default function MaterialUI() {
  const [toggle, setToggle] = React.useState(false)
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button>hello</Button>
        <Button variant="contained">hello</Button>
      </Stack>

      <Button onClick={() => setToggle(!toggle)} variant="contained">
        Toggle
      </Button>

      <Modal open={toggle} onClose={() => setToggle(false)}>
        <Box sx={style}>
          <Paper>Hello!</Paper>
        </Box>
      </Modal>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
    </div>
  )
}

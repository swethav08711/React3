import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"

export default function RecipeReviewCard({ data, handleDelete }) {
  return (
    <>
      {data.map(items => (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {items.title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {items.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="delete">
              <DeleteIcon
                onClick={() => {
                  handleDelete(items.id)
                }}
              />
            </IconButton>
            <Button variant="contained">Edit</Button>
          </CardActions>
        </Card>
      ))}
    </>
  )
}

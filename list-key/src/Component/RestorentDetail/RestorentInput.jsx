import React from "react"
import axios from "axios"
const initstate = {
  imags: "",
  restaurant: "",
  catogories: "",
  votes: "",
  reviews: "",
  cost: "",
  min: "",
  time: "",
  star: "",
  payment: {
    card: false,
    cash: false,
  },
}

export default function RestorentInput({ setTask }) {
  const [state, setState] = React.useState(initstate)
  const handleChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
    console.log(state)
  }

  const handlePayment = e => {
    const payload = {
      card: false,
      cash: false,
    }
    console.log(e.target.value)
    let pay = e.target.value

    if (pay === "card") {
      payload.card = true
      setState({ ...state, payment: payload })
    } else if (pay === "cash") {
      payload.cash = true
      setState({ ...state, payment: payload })
    } else if (pay === "both") {
      payload.card = true
      payload.cash = true
      setState({ ...state, payment: payload })
    }
  }
  return (
    <div>
      <div>
        <input
          type="url"
          name="imags"
          placeholder="imags"
          value={state.imags}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="restaurant"
          placeholder="restaurant"
          value={state.restaurant}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="votes"
          placeholder="votes"
          value={state.votes}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="reviews"
          placeholder="reviews"
          value={state.reviews}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="catogories"
          placeholder="catogories"
          value={state.catogories}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="cost"
          placeholder="cost"
          value={state.cost}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="min"
          placeholder="min"
          value={state.min}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="time"
          placeholder="time"
          value={state.time}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="text"
          name="star"
          placeholder="star"
          value={state.star}
          onChange={handleChange}
        />
      </div>
      <div>
        <select onChange={e => handlePayment(e)}>
          <option value="none">Payment options</option>
          <option value="card">Card</option>
          <option value="cash">Cash</option>
          <option value="both">Both</option>
        </select>
      </div>
      <button
        onClick={() => {
          axios.post("http://localhost:3002/data", state).then(() => {
            setTask()
          })
        }}
      >
        Add
      </button>
    </div>
  )
}

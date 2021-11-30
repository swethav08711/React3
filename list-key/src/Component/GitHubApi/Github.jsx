import React from "react"
import FetchRequest from "./FetchRequest"

export default function Github() {
  const [query, setQuery] = React.useState("")
  const [isLoading, setIsloading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [users, setUsers] = React.useState([])
  const handleClick = () => {
    setIsloading(true)
    setIsError(false)
    FetchRequest(query)
      .then(res => {
        setUsers(res.data.items)
      })
      .catch(err => {
        setIsError(true)
      })
      .finally(() => {
        setIsloading(false)
      })
  }
  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Add something"
        onChange={e => setQuery(e.target.value)}
      />
      <button disabled={isLoading} onClick={handleClick}>
        {isLoading ? "Loading" : "Search"}
      </button>
      {isError ? "Please Fill in Something" : null}
      <div>
        {users?.map(items => (
          <div key={items.id}>{items.login}</div>
        ))}
      </div>
    </div>
  )
}

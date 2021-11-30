import axios from "axios"

export default function FetchRequest(query) {
  if (!query) {
    return Promise.reject("query should be privided")
  }
  return axios.get("https://api.github.com/search/users", {
    params: {
      q: query,
    },
  })
}

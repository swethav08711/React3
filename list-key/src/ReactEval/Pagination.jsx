function Pagination({ total, currpage, onclickcallback }) {
  const pages = new Array(total).fill(0).map((value, index) =>
    currpage === index + 1 ? (
      <button disabled key="{index}">
        {index + 1}
      </button>
    ) : (
      <button key="{index}" onClick={() => onclickcallback(index + 1)}>
        {index + 1}
      </button>
    )
  )
  return <div>{pages}</div>
}
export default Pagination

function Pagination1({ postParpage, totalPosts, paginate }) {
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalPosts / postParpage); i++) {
    pageNumber.push(i)
  }
  return (
    <div>
      <nav>
        <ul style={{ display: "flex" }}>
          {pageNumber.map(number => (
            <li key={number} style={{ padding: "14px", listStyleType: "none" }}>
              <a href="!#" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
export default Pagination1

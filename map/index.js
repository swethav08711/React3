// const arr = [4, 3, 21, 1]

//map
// const output = arr.map(x => x * 2)
// console.log(output)

//filter
// const output = arr.filter(x => x > 4)
// console.log(output)

//reduce
// sum ;maximum

// function findSum(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > sum) {
//       sum = arr[i]
//     }
//   }
//   return sum
// }
// console.log(findSum(arr))

// const outout = arr.reduce((acc, curr) => {
//   if (curr > acc) {
//     acc = curr
//   }
//   return acc
// }, 0)
// console.log(outout)

const users = [
  { first: "a", last: "z", age: 1 },
  { first: "b", last: "y", age: 2 },
  { first: "c", last: "x", age: 3 },
  { first: "d", last: "p", age: 1 },
]

// const output = users.map(x => x.first + x.last)
// console.log(output)

// const output = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age]++
//   } else {
//     acc[curr.age] = 1
//   }
//   return acc
// }, {})
// console.log(output)

const output = users.filter(x => x.age < 2).map(x => x.first)
console.log(output)

const output1 = users.reduce((acc, curr) => {
  if (curr.age < 2) {
    acc.push(curr.first)
  }
  return acc
}, [])
console.log(output1)

// @ts-check

import compose from './compose.js'

let f = a => a + 1
let f1 = a => [a, ''];
let f2 = ([a,b='']) => [a,b]

// console.log(
//   compose(f2, f1, f)(1),
//   compose(f2, f)(1)
// )

console.log(
  f2(f1(f(1))),
  f2(f(1))
)

function main () {
  let f = a => a + 1
  let f2 = ([a,b]) => [a,b]
  f2(f(1))
}
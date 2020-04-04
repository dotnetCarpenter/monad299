// @ts-check

import curry from './lib/curry.js'
import compose from './lib/compose.js'

const x = 64

let map = curry((f,x) => x.map(f))
let concat = curry((x, l) => l.concat(x))
let sqrt = x => {
  let sq = Math.sqrt(x)
  return [sq, -sq]
}
let cbrt = x => map(Math.cbrt, x)

function main () {
  console.log(
    sqrt(64),
    cbrt([8, -8]),
    compose(cbrt, sqrt)(x)
  )
}
main()

// let sqrt = Math.sqrt
let cbrt1 = Math.cbrt

// let bind = curry((f, x) => map(f, x).concat(x))
let bind = curry((f, x) => concat(x, map(f, x)))
let unit = x => [x]
let lift = f => compose(unit, f) // lift f = unit . f

function main2 () {
  console.log(
    sqrt(64),
  )
  console.log(
    // @ts-ignore
    cbrt1([8, -8]), // NaN
    bind(cbrt1)([8, -8]),
  )

  // lift, lifts a function's return value to the input of bind
  // bind enable composition of two functions with different input/output
  console.log(
    compose(cbrt1, sqrt)(x),
    compose(bind(cbrt1), sqrt)(x),
    compose(bind(cbrt1), lift(Math.sqrt))(x),
  )
}
main2()

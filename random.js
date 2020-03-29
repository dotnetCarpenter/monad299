// @ts-ignore
import curry from './curry.js'
import assert from 'assert'

/** @param {number} a @param {{():number}} StdGen */
let f = (a, StdGen) => [StdGen() * a, StdGen]
/** @param {[number, ()=>number]} a */
let g = (a) => {
  assert(typeof a[0] === 'number')
  assert(a[1] instanceof Function)
  return a
}
// let g = (a, StdGen) => [StdGen() * a, StdGen]


console.log('f',
  f(10, Math.random))

let bind = curry((f, x, seed) => {
  let [x1, seed1] = x(seed)
  return f(x1, seed1)
})
let unit = (x,g) => [x,g]
let compose = (f,g) => bind(f, g)
let lift = f => compose(unit, f)

console.log('lift',
  g(f(10, Math.random)),
  lift(g)(f(f(10, Math.random)))
)

  // console.log('bind',
  // bind(f,g)(f(10, Math.random)),
  // bind(f,g)(10))

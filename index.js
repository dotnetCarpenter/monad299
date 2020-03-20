// @ts-check

import compose from './compose.js'

/** @param {number} a */
let f = a => a + 0.43
/** @param {number} a */
let g = a => a + 0.57
/** @param {number} a @returns {[number, string]} */
let f1 = a => [f(a), 'f is called.']
/** @param {number} a @returns {[number, string]} */
let g1 = a => [g(a), 'g is called.']

const x = 0.1

function main () {
  let [y,s] = g1 (x),
      [z,t] = f1 (y)

  console.log(z,s+t)
}

main()


/**
 * @param {{ (a: number): [number, string] }} f1
 * @returns {{ ([gx, gs]: [number, string]) }}
 */
let bind = f1 => ([gx,gs]) => {
  let [fx,fs] = f1(gx)
  return [fx,gs+fs]
}

function main2 () {
  console.log(
    // f1*g1
    compose(bind(f1), g1)(x),
    bind(f1)(g1(x))
  )
}

main2()

let bind2 = f1 => gr => {
  let [gx,gs] = Array.isArray(gr) ? gr : unit(gr)
  let [fx,fs] = f1(gx)
  return [fx,gs+fs]
}

/** @param {number} x @returns {[number, string]} */
let unit = x => [x,""]
/** @param {function} f */
let lift = f => x => [f(x),""] // lift f x = (f x,"")
/** @param {function} f */
let lift2 = f => compose(unit, f) // lift f = unit . f

function main3 () {
  console.log(
    // unit * f = f * unit = f
    compose(unit, f)(x),
    lift(f)(x),
    lift2(f)(x)
  )
}

main3()

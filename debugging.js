// @ts-check

/**
 * Writer Monad
 */

import compose from './lib/compose.js'
import curry from './lib/curry.js'


const compose2 = curry(
  (bind, ...fs) => initialValue => fs.reduceRight(
    (value, f)=> bind(f)(value)
  , unit(initialValue))
)

/**
 * bind must serve two purposes: it must (1) apply f' to the correct part of g' x and (2) concatenate the string returned by g' with the string returned by f'.
 * @param {{ (a: number): [number, string] }} f1
 * @returns {{ ([gx, gs]: [number, string]) }}
 */
let bind = f1 => ([gx,gs = '']) => {
  let [fx,fs] = f1(gx)
  return [fx,gs+fs]
}

/** @param {number} x @returns {[number, string]} */
let unit = x => [x,""]

/** @param {function} f */
let lift = f => compose(unit, f) // lift f = unit . f

const X = 64

/** @param {number} a */
let f = a => a + 0.43
/** @param {number} a */
let g = a => a + 0.57
/** @param {number} a @returns {[number, string]}} */
let fDebug = a => [f(a), 'f is called.']

function main () {

  // `bind` changes the input of a function to match a lifted function, and the output
  // `lift` changes the output of a function
  // `unit` changes a value to match the bind function input
  let composed1 = compose(f, g, f)
  let composed2 = compose(bind(fDebug), bind(lift(g)), fDebug)
  let composed3 = compose2(bind, fDebug, lift(g), fDebug)

  console.log(
    composed1(X),
    composed2(X),
    composed3(X),
  )
}
main()
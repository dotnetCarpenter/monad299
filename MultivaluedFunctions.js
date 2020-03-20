// @ts-check

import assert from 'assert'
import compose from './compose.js'

/** @param {number} n */
let even = n => n%2!==1
/** @param {number} n */
let odd = n => n%2===1
/** @param {number} root @param {number} n */
let nthRoot = (root,n) => root<0 && even(n)
  ? NaN
  : (root<0
    ? -1
    : 1) * Math.abs(root) ** (1/n)
    // : 1) * Math.pow(Math.abs(root), 1/n)

let nthRoot1 = (x, n) => n % 2 === 1 && x < 0 ? -(Math.abs(x) ** (1/n)) : x ** (1/n)

/**
 * Calculate nth root of b.
 * root :: (Integral n, RealFloat b) => n -> b -> b
 * @param {number} n
 * @param {number} b
 */
let root = (b,n) => odd(n) && b<0
  ? -(Math.abs(b) ** (1/n))
  : b ** (1/n)

// root n b | odd n && b < 0  = - abs b ** overn
//          | otherwise       = b ** overn
//     where overn = 1 / fromIntegral n

assert( nthRoot(+4, 2) === 2 ) // 2 (the positive is chosen, but -2 is a solution too)
assert( nthRoot(+8, 3) === 2 ) // 2 (this is the only solution)
assert( nthRoot(-8, 3) === -2 ) // -2 (this is the only solution)
assert( Number.isNaN(nthRoot(-4, 2)) ) // NaN (there is no solution)
assert( Number.isNaN(nthRoot(-8, 4)) ) // NaN (there is no solution)


assert( nthRoot1(+4, 2) === 2 ) // 2 (the positive is chosen, but -2 is a solution too)
assert( nthRoot1(+8, 3) === 2 ) // 2 (this is the only solution)
assert( nthRoot1(-8, 3) === -2 ) // -2 (this is the only solution)
assert( Number.isNaN(nthRoot1(-4, 2)) ) // NaN (there is no solution)
assert( Number.isNaN(nthRoot1(-8, 4)) ) // NaN (there is no solution)

assert( root(+4, 2) === 2 ) // 2 (the positive is chosen, but -2 is a solution too)
assert( root(+8, 3) === 2 ) // 2 (this is the only solution)
assert( root(-8, 3) === -2 ) // -2 (this is the only solution)
assert( Number.isNaN(root(-4, 2)) ) // NaN (there is no solution)
assert( Number.isNaN(root(-8, 4)) ) // NaN (there is no solution)

// console.log( root(+4, 2) === 2 ) // 2 (the positive is chosen, but -2 is a solution too)
// console.log( root(+8, 3) === 2 ) // 2 (this is the only solution)
// console.log( root(-8, 3) === -2 ) // -2 (this is the only solution)
// console.log( root(-4, 2) ) // NaN (there is no solution)
// console.log( root(-8, 4) ) // NaN (there is no solution)
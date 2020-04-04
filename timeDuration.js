import curry from './curry.js'

import R from 'rambda'


let duration = curry((t1, t2) => {
  t1 = t1[0] * 60 + t1[1]
  t2 = t2[0] * 60 + t2[1]
  return ((t2 - t1)/60).toFixed(2)
})

let parse = curry((regex,s) => { let [,h,m] = s.match(regex);return [+h,+m] })

const INPUT = "12:34"
const x = [...input1(INPUT)]

log(x)
log([...input1(INPUT, 3)])
log(take(3, partial(input2, INPUT)))
log(take(3, INPUT))

log(R.take(3, INPUT))

function take (n, f) {
  let accu = []
  const g  = f()
  for (let i = 0; i < n; ++i) {
    accu[i] = g.next().value
  }
  return accu
}

/** @param {string} s */
function * input2 (s) {
  let n = 0
  while(true) {
    console.log('input2 called on ', s)
    yield s[n]
    n+=1
  }
}

/** @param {string} s */
function * input1 (s, max = s.length) {
  for (let n = 0; n < max ; ++n) {
    console.log('input1 called on ', s)
    yield s[n]
  }
}

function partial (f, ...args) {
  return f.bind(null, ...args)
}

function log (...msg) {
  console.log(...msg)
  return msg.flat()
}

import curry from './curry.js'


let duration = curry((t1, t2) => {
  t1 = t1[0] * 60 + t1[1]
  t2 = t2[0] * 60 + t2[1]
  return ((t2 - t1)/60).toFixed(2)
})

let parse = curry((regex,s) => { let [,h,m] = s.match(regex);return [+h,+m] })

const INPUT = "12:34"
const x = [...input(INPUT)]

log(x)
log([...input(INPUT, 3)])
log(take(3, partial(input2, INPUT)))

function take (n, f) {
  let accu = []
  f = f()
  for (let i = 0; i < n; ++i) {
    accu[i] = f.next().value
  }
  return accu
}

/** @param {string} s */
function * input2 (s) {
  let n = 0
  while(true) {
    yield s[n]
    n+=1
  }
}

/** @param {string} s */
function * input (s, max = s.length) {
  for (let n = 0; n < max ; ++n)
    yield s[n]
}

function partial (f, ...args) {
  return f.bind(null, ...args)
}

function log (...msg) {
  console.log(...msg)
  return msg.flat()
}

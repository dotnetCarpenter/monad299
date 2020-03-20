import compose from './compose.js'

let f = a => a + 0.43
let g = a => a + 0.57

let f1 = a => [f(a), 'f is called.']
let g1 = a => [g(a), 'g is called.']

const x = 0.1

function main () {
  let [y,s] = g1 (x),
      [z,t] = f1 (y)

  console.log(z,s+t)
}

main()

let bind = f1 => ([gx,gs]) => {
  let [fx,fs] = f1(gx,gs)
  return [fx,gs+fs]
}

function main2 () {
  console.log(
    compose(bind(f1), g1)(x)
  )
}

main2()


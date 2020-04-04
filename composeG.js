function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function composeG (...gs) {
  return (initialValue = null) => gs.reduceRight(function* (value, f) {
      yield* f(value)
    }
    , initialValue)
}

main()
function main () {
  let alphaNums = composeG(
    generateSequence(48, 57),
    generateSequence(65, 90),
    generateSequence(97, 122),
  )
  console.log(
    map(
      n => String.fromCharCode(n),
      alphaNums()).join('')
  )
}

function map (f, list) {
  let a = []
  for (let x of list) {
    a.push(f(x))
  }
  return a
}
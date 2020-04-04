function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {

  yield* generateSequence(48, 57);
  //for (let i = 48; i <= 57; i++) yield i;

  yield* generateSequence(65, 90);
  //for (let i = 65; i <= 90; i++) yield i;

  yield* generateSequence(97, 122);
  //for (let i = 97; i <= 122; i++) yield i;

}


let str = '';

for(let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0..9A..Za..z
console.log(map(n => String.fromCharCode(n), generateAlphaNum()).join('')); // 0..9A..Za..z

function map (f, list) {
  let a = []
  for (let x of list) {
    a.push(f(x))
  }
  return a
}

function compose (...fs) {
  return initialValue => fs.reduceRight( (value, f) => f(value), initialValue)
}

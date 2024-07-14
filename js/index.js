const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const square1 = p => {
  console.log(p)
  return p * p
}
const square = p => p * p
const t = [1, 2, 3]
const tSquared = t.map(p => square(p))

// tSquared is now [1, 4, 9]
function product(a, b) {
  return a * b
}
const average=(a,b)=>(a+b)/2

const result = average(2, 6)
console.log(result)
// result is now 12
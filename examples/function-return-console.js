// Difference between return and console log in function

function sum(numberA, numberB) {
  const numberResult = numberA + numberB
  return numberResult
}

const resultA = sum("abc", 100)
const resultB = sum(3, 5)

console.log(resultA)

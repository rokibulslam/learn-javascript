function isEven(number) {
  if (number % 2 === 0) return true
  else return false
}

function isOdd(number) {
  if (number % 2 !== 0) return true
  else return false
}

function evenOrOdd(number) {
  return (isEven(number)) ? "Even" : "Odd";
}

// one of them is odd, then the total is always odd
function isTotalOdd(numberA, numberB) {
  // 3 + 4 = 7 = odd = true
  // 6 + 3 = 9 = odd = true
}

// both of them are either odd or even, then the total is always even
function isTotalEven(numberA, numberB) {
  // 1 + 3 = 4 = even = true
  // 2 + 6 = 8 = even = true
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(5));
console.log(evenOrOdd(4));
console.log(evenOrOdd(9));
console.log(evenOrOdd(11));

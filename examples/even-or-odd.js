function isEven(number) {
  if (number % 2 === 0) return true;
  else return false;
}

function isOdd(number) {
  if (number % 2 !== 0) return true;
  else return false;
}

function evenOrOdd(number) {
  return isEven(number) ? "Even" : "Odd";
}

// one of them is odd, then the total is always odd
function isTotalOdd(numberA, numberB) {
  // 3 + 4 = 7 = odd = true
  // 6 + 3 = 9 = odd = true
  const isTotalNumber = numberA + numberB;
  const isTotalOdd = isTotalNumber % 2 !== 0;
  return isTotalOdd;
}

// both of them are either odd or even, then the total is always even
function isTotalEven(numberA, numberB) {
  // 1 + 3 = 4 = even = true
  // 2 + 6 = 8 = even = true
  const isTotalNumber = numberA + numberB;
  const isTotalEven = isTotalNumber % 2 === 0;
  return isTotalEven;
}

// console.log(evenOrOdd(2));
// console.log(evenOrOdd(5));
// console.log(evenOrOdd(4));
// console.log(evenOrOdd(9));
// console.log(evenOrOdd(11));

console.log(isTotalOdd(3, 4));
console.log(isTotalOdd(6, 5));
console.log(isTotalOdd(2, 4));
console.log(isTotalOdd(1, 3));

console.log("-----");

console.log(isTotalEven(1, 3));
console.log(isTotalEven(2, 6));
console.log(isTotalEven(1, 2));
console.log(isTotalEven(3, 2));

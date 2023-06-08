console.log("🐟🐝 Fizz Buzz")

for (let number = 0; number <= 100; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(`${number} = FizzBuzz`)
  } else if (number % 3 === 0) {
    console.log(`${number} = Fizz`)
  } else if (number % 5 === 0) {
    console.log(`${number} = Buzz`)
  } else if (number === 0) {
    console.log(number)
  } else {
    console.log(number)
  }
}

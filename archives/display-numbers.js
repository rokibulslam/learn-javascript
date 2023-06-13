// Given a array of numbers
// Display the numbers with these format:
// 1
// 5
// 2 and 8
// 2, 3, and 5
// 5, 6, 7, and 8

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayNumbers() {
  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];
    if (currentNumber === 1) {
      console.log(`${numbers[0]}`);
    } else if (currentNumber === 5) {
      console.log(`${numbers[4]}`);
    }
  }

  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];
    if (currentNumber === 2 || currentNumber === 5) {
      console.log(`${numbers[1]} and ${numbers[4]}`);
    } else if (currentNumber === 2 || currentNumber === 3 || currentNumber === 5) {
      console.log(`${numbers[1]}, ${numbers[2]}, and ${numbers[4]}`);
      break;
    }
  }

  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];
    if (currentNumber === 5 || currentNumber === 6 || currentNumber === 7 || currentNumber === 8) {
      console.log(`${numbers[4]}, ${numbers[5]}, ${numbers[6]}, and ${numbers[7]}`);
      break;
    }
  }
}

displayNumbers();

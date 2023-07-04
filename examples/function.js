// Display the numbers with these format:
// 1
// 5
// 2 and 8
// 2, 3, and 5
// 5, 6, 7, and 8

function showNumbers(numbers) {
  let numbersInSentence = "";

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    const isLastNumber = true;
    numbersInSentence += number + " ";
  }

  return numbersInSentence;
}

// const friends = ["Reymond", "Haidar", "Julio", "Hanif", "Adi", "Budi", "Calvin", "Doni"];
const numbersArray = [2, 8];

console.log(showNumbers(numbersArray));

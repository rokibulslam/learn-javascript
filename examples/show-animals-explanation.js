console.log("😺 Show Animals");

function showAnimals(animals) {
  // ["Dog", "Cat"]

  let sentence = ""; //Empty String

  const isMoreThan1Animal = animals.length > 1; // True
  const isMoreThan2Animals = animals.length > 2; // True

  for (let index = 0; index < animals.length; index++) {
    // 2 ; 2 < 2;
    const animalName = animals[index]; // Cat
    const isLast = index === animals.length - 1; // True
    // True = 1 === 2 - 1

    if (isLast && isMoreThan1Animal) {
      // True && True
      sentence += `and ${animalName}`; // "Dog " += "and Cat"
      // Dog and Cat
    }
    if (isLast && !isMoreThan1Animal) {
      // False && False
      sentence += `${animalName}`;
    }
    if (!isLast && isMoreThan2Animals) {
      // True && False
      sentence += `${animalName}, `;
    }
    if (!isLast && !isMoreThan2Animals) {
      // True && True
      sentence += `${animalName} `; // "" += "Dog "
    }
  }

  return sentence; // Dog and Cat
}

// const animals = ["Dog", "Cat", "Rabbit", "Tiger", "Lion"];
// console.log(showAnimals(["Dog"]));
console.log(showAnimals(["Dog", "Cat"]));
// console.log(showAnimals(["Dog", "Cat", "Rabbit"]));
// console.log(showAnimals(["Dog", "Cat", "Rabbit", "Tiger"]));
// console.log(showAnimals(["Dog", "Cat", "Rabbit", "Tiger", "Lion"]));

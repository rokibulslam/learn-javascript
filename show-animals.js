console.log("😺 Show Animals");

function showAnimals(animals) {
  let sentence = "";

  const isMoreThan1Animal = animals.length > 1;
  const isMoreThan2Animals = animals.length > 2;

  for (let index = 0; index < animals.length; index++) {
    const animalName = animals[index];
    const isLast = index === animals.length - 1;

    if (isLast && isMoreThan1Animal) {
      sentence += `and ${animalName}`;
    }
    if (isLast && !isMoreThan1Animal) {
      sentence += `${animalName}`;
    }
    if (!isLast && isMoreThan2Animals) {
      sentence += `${animalName}, `;
    }
    if (!isLast && !isMoreThan2Animals) {
      sentence += `${animalName} `;
    }
  }

  return sentence;
}

console.log(showAnimals(["Dog"]));
console.log(showAnimals(["Dog", "Cat"]));
console.log(showAnimals(["Dog", "Cat", "Rabbit"]));

console.log("😺 Show Animals");

function showAnimals(animals) {
  let sentence = "";

  const isMoreThan1Animal = animals.length > 1;
  const isMoreThan2Animals = animals.length > 2;

  for (let index = 0; index < animals.length; index++) {
    const animalsName = animals[index];
    const isLast = index === animals.length - 1;

    if (isLast && isMoreThan1Animal) {
      sentence += `and ${animalsName}`;
    }
    if (isLast && !isMoreThan1Animal) {
      sentence += `${animalsName}`;
    }
    if (!isLast && isMoreThan2Animals) {
      sentence += `${animalsName}, `;
    }
    if (!isLast && !isMoreThan2Animals) {
      sentence += `${animalsName} `;
    }
  }
  return sentence;
}

const animals = ["Dog", "Cat", "Rabbit", "Tiger", "Lion"];
console.log(showAnimals(["Dog"]));
console.log(showAnimals(["Dog", "Cat"]));
console.log(showAnimals(["Dog", "Cat", "Rabbit"]));
console.log(showAnimals(["Dog", "Cat", "Rabbit", "Tiger"]));
console.log(showAnimals(["Dog", "Cat", "Rabbit", "Tiger", "Lion"]));

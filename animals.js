// Animals app

console.log("😺 Animals Search");

// Algorithm / Flow
//
// Tentukan nama hewan yang ingin dicari
// Dari daftar hewan, kita cari dengan cek satu-satu
// Setiap lagi ngecek satu nama hewan, cocokkan apakah sesuai dengan nama hewan yang kita cari
// Jika namanya cocok, maka berhenti mencari
// Jika namanya gak cocok, maka lanjut terus
// Jika sudah berhenti mencari, tampilkan bahwa namanya telah ditemukan

// Expectation
//
// Input: "Lion"
//
// Output:
// Lion is found in order 8
// Cat is found in order 4

// Process

const animals = ["Tiger", "Rabbit", "Dog", "Cat", "Rat", "Horse", "Bear", "Lion", "Snake", "Panda"];

function searchAnimalName(keyword) {
  for (let index = 0; index < animals.length; index++) {
    currentAnimal = animals[index];
    if (keyword === currentAnimal) {
      console.log(keyword + " is found in order " + +(index + 1));
      break;
    }
  }
}

searchAnimalName("Rabbit");
searchAnimalName("Cat");

// Friends app
console.log("👥 Friends Search");

// Algorithm / Flow
//
// Tentukan nama teman yang ingin dicari
// Dari daftar teman, kita cari dengan cek satu-satu
// Setiap lagi ngecek satu nama teman, cocokkan apakah sesuai dengan nama teman yang kita cari
// Jika namanya cocok, maka berhenti mencari
// Jika namanya gak cocok, maka lanjut terus
// Jika sudah berhenti mencari, tampilkan bahwa namanya telah ditemukan

// Expectation
//
// Input: "Calvin"
//
// Output:
// Calvin is found in order 7
// Julio is found in order 3

// Process

const friends = ["Reymond", "Haidar", "Julio", "Hanif", "Adi", "Budi", "Calvin", "Doni"];

function searchName(nameToSearch) {
  for (let index = 0; index < friends.length; index++) {
    const currentFriend = friends[index];
    if (nameToSearch === currentFriend) {
      console.log(nameToSearch + " is found in order" + " " + (index + 1));
      break;
    } else {
      continue;
    }
  }
}
searchName("Calvin");
searchName("Julio");

console.log("----------------");

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

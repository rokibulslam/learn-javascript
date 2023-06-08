// Friends app
console.log("👥 Friends Search");

// Algorithm / Flow
//
// Tentukan nama teman yang ingin dicari
// Dari daftar teman, kita cari dengan cek satu-satu
// Setiap lagi ngecek satu nama teman, cocokkan apakah sesuai dengan nama teman yang kita cari
// Jika namanya cocok, maka simpan di mana urutannya
// Jika namanya gak cocok, maka lanjut terus
// Jika sudah berhenti mencari, tampilkan di urutan mana saja

// Expectation
//
// Input: "Calvin"
//
// Output:
// Calvin is found in order 7
// Julio is found in order 3
// Budi is found in order 2 and 8
// Caca is found in order 3, 9, and 12

const friends = [
  "Reymond",
  "Budi",
  "Caca",
  "Haidar",
  "Julio",
  "Hanif",
  "Adi",
  "Budi",
  "Caca",
  "Calvin",
  "Doni",
  "Caca"
];

function searchName(nameToSearch) {
  let isFoundInOrders = []

  for (let index = 0; index < friends.length; index++) {
    const currentFriend = friends[index];
    const orderNumber = index + 1

    if (nameToSearch === currentFriend) {

      isFoundInOrders.push(orderNumber)
    }
  }

  console.log(`${nameToSearch} is found in order ${isFoundInOrders}`);
}

searchName("Calvin");
searchName("Julio");
searchName("Budi");
searchName("Caca");

console.log("👥 Friends Search")

// Algorithm / Flow
//
// Tentukan nama yang ingin dicari
// Dari daftar teman, kita cari dengan cek satu-satu
// Setiap lagi ngecek satu nama, cocokkan apakah sesuai dengan nama yang kita cari
// Jika namanya cocok, maka berhenti mencari
// Jika namanya gak cocok, maka lanjut terus
// Jika sudah berhenti mencari, tampilkan bahwa namanya telah ditemukan

// Expectation
//
// Input: "Budi"
// Output:
// - "Budi" found!
// - "Budi" is found in order 5

// Process

const friends = ["Reymond", "Haidar", "Julio", "Hanif", "Adi", "Budi", "Calvin", "Doni"]

const nameToSearch = "Budi"

for (let index = 0; index < friends.length; index++) {
  const currentFriend = friends[index]

  if (nameToSearch === currentFriend) {
    console.log(`${nameToSearch} found in order ${index + 1}`)
    break;
  }
}

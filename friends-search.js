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
//
// Output:
// Reymond is found in order 1
// Budi is found in order 6
// Joko is not found
// 100 is not found

// Process

const friends = ["Reymond", "Haidar", "Julio", "Hanif", "Adi", "Budi", "Calvin", "Doni"]

function searchName(nameToSearch) {
  let isFound = false
  let foundInOrder = null

  for (let index = 0; index < friends.length; index++) {
    const currentFriend = friends[index]
    if (nameToSearch === currentFriend) {
      isFound = true
      foundInOrder = index + 1
      break;
    }
  }

  if (isFound) {
    console.log(`${nameToSearch} is found in order ${foundInOrder}`)
  } else {
    console.log(`${nameToSearch} is not found`)
  }
}

searchName("Reymond")
searchName("Budi")
searchName("Joko")
searchName(100)

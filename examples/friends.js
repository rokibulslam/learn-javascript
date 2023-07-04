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

const numbers = ["Reymond", "Haidar", "Julio", "Hanif", "Adi", "Budi", "Calvin", "Doni"];

function searchName(nameToSearch) {
  for (let index = 0; index < numbers.length; index++) {
    const currentFriend = numbers[index];
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

// Aplikasi teman menggunakan tipe data Array //
const friends = ["Reymond", "Haidar", "Julio", "Hanif", "Calvin"];

// Menampilkan huruf pertama dari nama pertama dalam sebuah array
console.log(friends[0][0]);

// Menambahkan 1 value diakhir dalam sebuah array
friends.push("Luis");
console.log(friends);

// // Menghapus 1 value diakhir dalam sebuah array
friends.pop();
console.log(friends);

// // Menambahkan 1 value diawal dalam sebuah array
friends.unshift("Luis");
console.log(friends);

// // Menghapus 1 value diawal dalam sebuah array
friends.shift();
console.log(friends);

// // Mengecek daftar nama didalam sebuah array
friends.includes("Reymond");
console.log(friends);

// // Mencari letak sebuah item dalam sebuah array
friends.indexOf("Julio");
console.log(friends);

// Menampilkan semua nama kedalam console menggunakan for loop
for (let index = 0; index < 5; index++) {
  const number = index + 1;
  console.log(number + ". " + friends[index]);
}

console.log("---");

// Menampilan semua nama dimulai dari nama terakhir
for (let index = 4; index >= 0; index--) {
  const number = index + 1;
  console.log(number + ". " + friends[index]);
}
// Output
// 5. Calvin
// 4. Haidar
// 3. Julio
// 2. Haidar
// 1. Reymond

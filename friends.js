// Aplikasi teman menggunakan tipe data Array //
const friends = ["Reymond", "Haidar", "Julio", "Hanif", "Calvin"];

// Menampilkan huruf pertama dalam sebuah array
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

// Menampilan semua nama kedalam console dimulai dari value terakhir
for (let index = 0; index < 5; index++) {
  const number = index + 1;
  console.log(number + ". " + friends.reverse()[index]);
}

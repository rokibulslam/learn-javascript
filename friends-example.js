console.log("👥 Friends App")

const friends = ["Reymond", "Haidar", "Julio", "Hanif"]

for (let i = 0; i < 4; i++) {
  console.log(friends[i])
}
// Reymond
// Haidar
// Julio
// Hanif

for (let index = 0; index < 4; index++) {
  const number = index + 1
  console.log(number + ". " + friends[index])
}
// 1. Reymond
// 2. Haidar
// 3. Julio
// 4. Hanif

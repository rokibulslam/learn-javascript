const friends = ["Reymond", "Haidar", "Julio", "Budi"]

for (let index = 0; index < friends.length; index++) {
  const friendName = friends[index]
  const isLast = index === friends.length - 1 // true

  console.log(`${friendName} ${isLast}`)
}

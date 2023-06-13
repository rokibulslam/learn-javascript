console.log("👥 Show Friends")

// Display the friends with these format:
//
// Reymond
// Haidar
// Reymond and Haidar
// Reymond, Haidar, and Julio
// Reymond, Haidar, Julio, and Budi

function showFriends(friends) {
  // Program can only run if the friends array at least has 1 item
  if (!friends?.length) {
    return ""
  }

  // Will change later
  let sentence = "";

  // Will not change at all
  const isMoreThan1Friend = friends.length > 1
  const isMoreThan2Friends = friends.length > 2

  for (let index = 0; index < friends.length; index++) {
    // Always changing each loop
    const friendName = friends[index];
    const isLast = index === friends.length - 1

    if (isLast && isMoreThan1Friend) {
      sentence += `and ${friendName}`
      // 2/3 Friends = Reymond and Haidar / Reymond, Haidar, and Julio
    }
    if (isLast && !isMoreThan1Friend) {
      sentence += `${friendName}`
      // 1 Friend = Reymond
    }
    if (!isLast && isMoreThan2Friends) {
      sentence += `${friendName}, `;
      // 3 Friends = Reymond, Haidar, and Julio
    }
    if (!isLast && !isMoreThan2Friends) {
      sentence += `${friendName} `;
      // 2 Friends = Reymond and Haidar
    }
  }

  return sentence;
}

console.log(showFriends(["Reymond"])) // Reymond
console.log(showFriends(["Haidar"])) // Haidar
console.log(showFriends(["Reymond", "Haidar"])) // Reymond and Haidar
console.log(showFriends(["Reymond", "Haidar", "Julio"])) // Reymond, Haidar, and Julio
console.log(showFriends(["Reymond", "Haidar", "Julio", "Budi"])) // Reymond, Haidar, Julio, and Budi
console.log(showFriends(["Reymond J", "Haidar H", "Julio", "Budi", "Joko"])) // Reymond, Haidar, Julio, Budi, and Joko
console.log(showFriends([""]))
console.log(showFriends([]))
console.log(showFriends())

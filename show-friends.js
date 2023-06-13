// Display the friends with these format:
//
// Reymond
// Haidar
// Reymond and Haidar
// Reymond, Haidar, and Julio
// Reymond, Haidar, Julio, and Budi

function showFriends(friends) {
  let sentence = "";

  for (let index = 0; index < friends.length; index++) {
    const friendName = friends[index];
    const isLast = index === friends.length - 1

    if (isLast) {
      sentence += `and ${friendName}`
    } else {
      sentence += `${friendName}, `;
    }
  }

  return sentence;
}

const friends = ["Reymond", "Haidar"]

console.log(showFriends(friends))
// Reymond and Haidar

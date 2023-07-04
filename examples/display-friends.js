function displayFriends(friends) {
  let sentence = "";

  const isMoreThan1Friend = friends.length > 1;
  const isMoreThan2Friends = friends.length > 2;

  for (let index = 0; index < friends.length; index++) {
    const friendName = friends[index];
    const isLast = index === friends.length - 1;

    if (isLast && isMoreThan1Friend) {
      sentence = sentence + `and ${friendName}`;
    }
    if (!isLast && !isMoreThan2Friends) {
      sentence = sentence + `${friendName} `;
    }
    if (isLast && !isMoreThan1Friend) {
      sentence = sentence + `${friendName}`;
    }
    if (!isLast && isMoreThan2Friends) {
      sentence = sentence + `${friendName}, `;
    }
  }
  return sentence;
}
console.log(displayFriends([""]));
console.log(displayFriends(["Reymond"]));
console.log(displayFriends(["Reymond", "Haidar"]));
console.log(displayFriends(["Reymond", "Haidar", "Julio"]));

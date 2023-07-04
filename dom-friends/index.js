const friendsElement = document.getElementById("friends"); // UL

const friends = [
  { name: "Reymond J", age: 26 },
  { name: "Haidar H", age: 30 },
  { name: "Julio", age: 25 },
  { name: "Budi", age: 35 },
  { name: "Joko", age: 40 },
];

friends.forEach((friend) => {
  const friendElement = document.createElement("li"); // LI

  friendElement.innerHTML = friend.name;

  friendsElement.appendChild(friendElement);
});

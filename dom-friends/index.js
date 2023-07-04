const friends = [
  { name: "Reymond J", age: 26 },
  { name: "Haidar H", age: 30 },
  { name: "Julio", age: 25 },
  { name: "Budi", age: 35 },
  { name: "Joko", age: 40 },
];

const friendsElement = document.getElementById("friends"); // UL

friends.forEach((friend) => {
  const friendElement = document.createElement("li"); // LI

  friendElement.classList = `bg-slate-200 rounded p-2`;

  friendElement.innerHTML = `
    <h3 class="text-xl">${friend.name}</h3>
    <p class="text-slate-400">${friend.age} years old</p>
  `;

  friendsElement.appendChild(friendElement);
});

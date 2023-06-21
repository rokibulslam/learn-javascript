alert(`Welcome 👋`);

let again = true;

while (again) {
  let name = prompt(`Enter Your Name :`);

  alert(`Hello ${name}`);
  again = confirm(`Try Again?`);
}

alert(`Thank You 😄`);

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);

// -------------------

let ageOther = prompt('How old are you?', '');
let accessAllowedOther = (age > 18) ? true : false;
console.log(accessAllowedOther);

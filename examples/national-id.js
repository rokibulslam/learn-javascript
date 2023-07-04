// National ID (KTP)

// Algorithm:
// - Given a person age who was born in Indonesia
// - Check if the person is already 17 years old or above, they can get a National ID (KTP)
// - Else if not, then they cannot get it yet
// - Show the message with they age number

const personAge = 5;

if (personAge >= 17) {
  console.log(`${personAge} years old can get a National ID`);
} else if (personAge < 17) {
  console.log(`${personAge} years old can not get a National ID`);
}

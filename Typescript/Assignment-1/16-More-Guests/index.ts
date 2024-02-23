// initial list
const myGuest = ["Shehzad", "Sameer", "Imran", "Waseem"];
// ones not comming
const notCommingGuests = ["Imran", "Waseem"];
// inviting new ones
const newGuests = ["Abdul Shakoor", "Abdul Basit", "Aamir Mashori"];

// removing ones not comming and adding new ones.
const updatedGuests = myGuest
  .filter((name) => {
    return !notCommingGuests.includes(name);
  })
  .concat(newGuests);

//  adding one new guest at the beginning.
updatedGuests.unshift("Salman Khan");

// adding one guest at the middle.
updatedGuests.splice(Math.floor(updatedGuests.length / 2), 0, "Akshay Kumar");
// adding one guest at the end.
updatedGuests.push("Shahrukh Khan");

// printing finial invitation.
updatedGuests.forEach((guest) => {
  console.log(`Sallam Dear ${guest}, I would like to invite you on a dinner, which is happening tonight, thanks.
    your lovely friend Faisal Ahmed.
    `);
});

// printing not comming ones.
console.log("Not Comming Guests");
notCommingGuests.forEach((name) => {
  console.log(name);
});
console.log();
// priting good new about a bigger dinner table
console.log(
  "Good news for our guests, we just got a bigger dinner table, get ready for a something big."
);

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

// printing finial invitation.
updatedGuests.forEach((guest) => {
  console.log(`Sallam Dear ${guest}, I would like to invite you on a dinner, which is happening tonight, Thanks.
    your Lovely Friend Faisal Ahmed.
    `);
});

// printing not comming ones.
console.log("Not Comming Guests");
notCommingGuests.forEach((name) => {
  console.log(name);
});

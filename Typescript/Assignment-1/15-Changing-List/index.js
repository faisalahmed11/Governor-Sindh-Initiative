// initial list
var myGuest = ["Shehzad", "Sameer", "Imran", "Waseem"];
// ones not comming
var notCommingGuests = ["Imran", "Waseem"];
// inviting new ones
var newGuests = ["Abdul Shakoor", "Abdul Basit", "Aamir Mashori"];
// removing ones not comming and adding new ones.
var updatedGuests = myGuest
    .filter(function (name) {
    return !notCommingGuests.includes(name);
})
    .concat(newGuests);
// printing finial invitation.
updatedGuests.forEach(function (guest) {
    console.log("Sallam Dear ".concat(guest, ", I would like to invite you on a dinner, which is happening tonight, Thanks.\n    your Lovely Friend Faisal Ahmed.\n    "));
});
// printing not comming ones.
console.log("Not Comming Guests");
notCommingGuests.forEach(function (name) {
    console.log(name);
});

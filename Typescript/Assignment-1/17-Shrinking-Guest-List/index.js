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
//  adding one new guest at the beginning.
updatedGuests.unshift("Salman Khan");
// adding one guest at the middle.
updatedGuests.splice(Math.floor(updatedGuests.length / 2), 0, "Akshay Kumar");
// adding one guest at the end.
updatedGuests.push("Shahrukh Khan");
// printing finial invitation.
updatedGuests.forEach(function (guest) {
    console.log("Sallam Dear ".concat(guest, ", I would like to invite you on a dinner, which is happening tonight, thanks.\n    your lovely friend Faisal Ahmed.\n    "));
});
// printing not comming ones.
console.log("Not Comming Guests");
notCommingGuests.forEach(function (name) {
    console.log(name);
});
console.log();
// priting good new about a bigger dinner table
console.log("Good news for our guests, we just got a bigger dinner table, get ready for a something big.");
// Bed News
console.log();
console.log("Sorry guys, we are not getting our big dinner table, therefore, we have to go with 2 guests only.");
// removing guest
console.log();
var numOfGuests = updatedGuests.length;
for (var index = 0; index < numOfGuests - 2; index++) {
    console.log("Dear ".concat(updatedGuests.pop(), ", It is really hard for us to see to not comming."));
}
// our finial guest
console.log();
console.log("Lucky Guests Still Comming");
updatedGuests.forEach(function (guest) {
    console.log("".concat(guest, "."));
});
// removing each guest from the list
var listLen = updatedGuests.length;
updatedGuests.splice(0, listLen);
console.log();
console.log(updatedGuests);

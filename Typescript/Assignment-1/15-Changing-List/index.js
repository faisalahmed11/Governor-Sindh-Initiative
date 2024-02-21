var myGuest = ["Shehzad", "Sameer", "Imran", "Waseem"];
var notCommingGuests = ["Imran", "Waseem"];
var newGuests = ["Abdul Shakoor", "Abdul Basit", "Aamir Mashori"];
var updatedGuests = myGuest
    .filter(function (name) {
    var nameComming = true;
    notCommingGuests.forEach(function (notCommingName) {
        if (name === notCommingName)
            nameComming = false;
    });
    return nameComming;
})
    .concat(newGuests);
// updatedGuests.concat(newGuests);
updatedGuests.forEach(function (guest) {
    console.log("Sallam Dear ".concat(guest, ", I would like to invite you on a dinner, which is happening tonight, Thanks.\n    your Lovely Friend Faisal Ahmed.\n    "));
});
console.log("Not Comming Guests");
notCommingGuests.forEach(function (name) {
    console.log(name);
});

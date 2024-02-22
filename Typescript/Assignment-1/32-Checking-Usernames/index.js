var currentUsers = [
    { username: "elon", isAdmin: false },
    { username: "sam", isAdmin: true },
    { username: "kamran", isAdmin: true },
    { username: "irfan123", isAdmin: true },
    { username: "sheeraz", isAdmin: true },
    { username: "salman", isAdmin: true },
];
var newUsers = [
    { username: "Elon", isAdmin: false },
    { username: "sam", isAdmin: true },
    { username: "rafique", isAdmin: true },
    { username: "faisalahmed", isAdmin: true },
    { username: "anas", isAdmin: true },
    { username: "ahsan", isAdmin: true },
];
newUsers.forEach(function (userObj) {
    var username = userObj.username.toLowerCase();
    var exists = currentUsers.some(function (userObj) { return userObj.username.toLowerCase() === username; });
    if (exists) {
        console.log(username + " is not available");
    }
    else {
        console.log(username + " is available");
    }
});

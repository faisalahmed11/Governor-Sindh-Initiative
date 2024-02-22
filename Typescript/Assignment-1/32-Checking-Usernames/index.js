var currentUsers = [
    { username: "elon", isAdmin: false },
    { username: "sam", isAdmin: true },
    { username: "kamran", isAdmin: true },
    { username: "irfan123", isAdmin: true },
    { username: "sheeraz", isAdmin: true },
    { username: "salman", isAdmin: true },
];
var newUsers = [
    { username: "elon", isAdmin: false },
    { username: "sam", isAdmin: true },
    { username: "rafique", isAdmin: true },
    { username: "faisalahmed", isAdmin: true },
    { username: "anas", isAdmin: true },
    { username: "ahsan", isAdmin: true },
];
newUsers.forEach(function (user) {
    if (currentUsers.includes(user)) {
        console.log("".concat(user.username, " already exists"));
    }
    else {
        console.log("".concat(user.username, " is available"));
    }
});

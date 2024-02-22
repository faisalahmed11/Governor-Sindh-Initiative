var users = [
    { username: "alee", isAdmin: false },
    { username: "jhon", isAdmin: true },
    { username: "kamran", isAdmin: true },
    { username: "infan123", isAdmin: true },
    { username: "sheeraz", isAdmin: true },
    { username: "salman", isAdmin: true },
];
users.forEach(function (user) {
    console.log(user.isAdmin
        ? "Hello admin, would you like to see a status report?"
        : "Hello ".concat(user.username, ", thanks for logging in again."));
});

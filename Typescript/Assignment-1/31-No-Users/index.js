var users = [];
if (!users.length) {
    console.log("We need to find some users!");
}
users.forEach(function (user) {
    console.log(user.isAdmin
        ? "Hello admin, would you like to see a status report?"
        : "Hello ".concat(user.usename, ", thanks for logging in again."));
});

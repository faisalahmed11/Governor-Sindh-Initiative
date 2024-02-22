interface User {
  username: string;
  isAdmin: boolean;
}
const users: Array<User> = [];

if (!users.length) {
  console.log("We need to find some users!");
}
users.forEach((user) => {
  console.log(
    user.isAdmin
      ? "Hello admin, would you like to see a status report?"
      : `Hello ${user.usename}, thanks for logging in again.`
  );
});

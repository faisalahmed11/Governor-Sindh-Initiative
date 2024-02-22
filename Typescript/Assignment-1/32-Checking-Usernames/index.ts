interface User {
  username: string;
  isAdmin: boolean;
}
const currentUsers: User[] = [
  { username: "elon", isAdmin: false },
  { username: "sam", isAdmin: true },
  { username: "kamran", isAdmin: true },
  { username: "irfan123", isAdmin: true },
  { username: "sheeraz", isAdmin: true },
  { username: "salman", isAdmin: true },
];
const newUsers: User[] = [
  { username: "Elon", isAdmin: false },
  { username: "sam", isAdmin: true },
  { username: "rafique", isAdmin: true },
  { username: "faisalahmed", isAdmin: true },
  { username: "anas", isAdmin: true },
  { username: "ahsan", isAdmin: true },
];

newUsers.forEach((userObj) => {
  let username = userObj.username.toLowerCase();
  let exists = currentUsers.some(
    (userObj) => userObj.username.toLowerCase() === username
  );
  if (exists) {
    console.log(username + " is not available");
  } else {
    console.log(username + " is available");
  }
});

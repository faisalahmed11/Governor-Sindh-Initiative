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
  { username: "elon", isAdmin: false },
  { username: "sam", isAdmin: true },
  { username: "rafique", isAdmin: true },
  { username: "faisalahmed", isAdmin: true },
  { username: "anas", isAdmin: true },
  { username: "ahsan", isAdmin: true },
];

newUsers.forEach((user) => {
  let checkingUser = user.username;
  currentUsers.forEach((cUser) => {
    if (checkingUser.includes(/cUser.username/i)) {
    }
  });
  if (currentUsers.includes(user)) {
    console.log(`${user.username} already exists`);
  } else {
    console.log(`${user.username} is available`);
  }
});

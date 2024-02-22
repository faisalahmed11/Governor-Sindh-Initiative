const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  number === 1
    ? console.log("1st")
    : number === 2
    ? console.log("2nd")
    : number === 3
    ? console.log("3rd")
    : console.log(number, `th`);
});

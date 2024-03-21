#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number:", type: "number", name: "firstNumber" },
    {
        message: "Enter second number:",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//  conditional statement
switch (answer.operator) {
    case "Addition":
        console.log("your value is", answer.firstNumber + answer.secondNumber);
        break;
    case "Multiplication":
        console.log("your value is", answer.firstNumber * answer.secondNumber);
        break;
    case "Division":
        console.log("your value is", answer.firstNumber / answer.secondNumber);
        break;
    case "Subtraction":
        console.log("your value is", answer.firstNumber - answer.secondNumber);
        break;
}

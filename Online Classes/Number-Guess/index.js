#! /usr/bin/env node
import inquirer from "inquirer";
// getting user guess input.
const answer = await inquirer.prompt([
    {
        message: "Please guess a number between 1-10.",
        name: "guessedNumber",
        type: "number",
    },
]);
// generating ramdon number
const magicNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
if (magicNumber === answer.guessedNumber) {
    console.log("Congratulations! You guessed right number");
}
else {
    console.log("You guessed wrong number", "the correct number is", magicNumber);
}

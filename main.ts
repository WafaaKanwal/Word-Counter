#! /usr/bin/env node


// import the 'inquirer' module, which is a command line interface for Node.js

import inquirer from "inquirer"

//import chalk
import chalk from "chalk"


// Declare a  'answers' & assign it to the result of inquirer.prompt function
const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.yellowBright("Enter your sentence to count the word: ")
    }
])

const words = answers.Sentence.trim().split(" ")

// print the array of words to the console
console.log(words)

// print the word count of the sentence to the console
console.log(chalk.cyanBright(`Your sentence word count is "${chalk.yellowBright(words.length)}".`))
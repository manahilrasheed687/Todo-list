#! /usr/bin/env node
import inquirer from "inquirer";

let todo = [];
let condition = true;

while(condition) {
 let addTask = await inquirer.prompt(
    [
    {
        name: "todo",
        type: "input",
        message: "What you want to add in your todos?"
    },


    {
        name: "addMore",
        type: "confirm",
        message: "Do you want to add more?",
        default: "false"
    }

]

);
todo.push(addTask.todo)
condition = addTask.addMore
console.log(todo)
}
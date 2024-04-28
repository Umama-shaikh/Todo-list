#! /usr/bin/env node 
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what do you want to add in your Todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
let editOrDelete = await inquirer.prompt([
    {
        name: "action",
        type: "list",
        choices: ["editTask", "deleteTask", "exit"],
        message: "what would you like to do."
    }
]);
if (editOrDelete.action === "editTask") {
    let index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the task you want to edit: "
        }
    ]);
    let updatedTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Enter the updated task content. "
        }
    ]);
    todos[index.index] = updatedTask.todo;
    console.log("Task updated successfully!");
}
else if (editOrDelete.action === "deleteTask") {
    let index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the task you want to delete: "
        }
    ]);
    todos.splice(index.index, 1);
    console.log("Task deleted successfully!");
}
else {
    console.log("Exiting...");
}
console.log("final to-dos:", todos);

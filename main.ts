import inquirer from "inquirer"
let Todo = [];
let condition = "true"


while(condition){
let addtask = await inquirer.prompt(
    [
        {
            name: 'todo',
            type: "input",
            message: "what you want to add in your todo?"
},
{
    name: "addmore",
    type: "confirm",
    message: "do you want to addmore?",
    default: "false"
}
]
);
Todo.push(addtask.todo);
condition = addtask . addmore
console.log(Todo);
}

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const inquirer = require("inquirer");
const path  = require('path');
const fs  = require('fs');

const source_dir = path.resolve(__dirname, 'src');
const sourcePath = path.join(source_dir, 'team.html');


const render = require("./lib/renderHtml");


let roleArray = [];


const employees = [

    {
        type: 'list',
        name: 'type',
        message: 'What is your role as an employee',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
]

const managerRespnse = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your manager name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?',
    },
    {
        type: 'list',
        name: 'end',
        message: "Do you have any more employees?",
        choices: ['Yes','No']
    },
]

const engineerResponse = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your engineer name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github name?',
    },
    {
        type: 'list',
        name: 'end',
        message: "Do you have any more employees?",
        choices: ['Yes','No']
    },

]

const internResponse = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your intern name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?',
    },
    {
        type: 'list',
        name: 'end',
        message: "Do you have any more employees?",
        choices: ['Yes','No']
    },
]

function managerArray (input) {
    let objectArray = new Manager (input.name, input.id, input.email, input.office)
    roleArray.push(objectArray);
    if (input.end === "No"){
            fs.writeFile('./dist/team.html', render(roleArray),(err) => err? console.log(err): console.log("HTML was Creaded"));
    } else {init()}
}

function engineerArray (input) {
    let objectArray = new Engineer (input.name, input.id, input.email, input.github)
    roleArray.push(objectArray);
    if (input.end === "No"){
    fs.writeFile('./dist/team.html', render(roleArray),(err) => err? console.log(err): console.log("HTML was Created"));
    } else {init()}
}

function internArray (input) {
    let objectArray = new Intern (input.name, input.id, input.email, input.school)
    roleArray.push(objectArray);
    if (input.end === "No"){
    fs.writeFile('./dist/team.html', render(roleArray),(err) => err? console.log(err): console.log("HTML was Creaded"));
    } else {init()}
}

function init() {
    inquirer.prompt(employees)
    .then((input) => {
        if (input.type === 'Manager') {
            inquirer.prompt(managerRespnse).then((input)=> managerArray(input)
            )
    } else if (input.type === 'Engineer'){
        console.log('Engineer');
        inquirer.prompt(engineerResponse).then((input)=> engineerArray(input)
        )
    } else{
        console.log('Intern');
        inquirer.prompt(internResponse).then((input)=> internArray(input)
        )
    }
}
    )
}

init();

// function init() {
//     inquirer.prompt(employees);
// }

// init();
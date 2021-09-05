const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}
function addMember() {
    inquirer.prompt([{
        type: "input",
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "What employee title would you like to add?",
        choices: ["Engineer, Manager, Intern"],
        name:"title",
   
    },
    {
        type: "input",
        message: "Enter employee ID number",
        name: "employee_id",
},
    {
        type: "input",
        message: "Please input employee E-mail",
        name: "email",

},
    
])

.then (({name, title, employee_id, email}) =>{
    var newHire = ""
    if (title === "Intern"){
        newHire = "school"
    }
    else if(title === "Manager"){
        newHire = "officeNumber"
    }
    else {
        newHire = "github"
    }

inquirer.prompt([{
        type: "input",
        message: `What is this employee's ${newHire}`,
        name: "newhireInfo",
},
    {
        type: "input",
        message: "Would you like to add a new member to the team?",
        choices: ["Yes", "No"],
        name: "addedMember",
    }
])
.then (({newHire, addedMembers}) =>{
    var newInstance = ""
    if(title === "Engineer"){
    newInstance = new Engineer(name, email, employee_id, newHire)

    }else if (title ==="Intern") {
        newInstance = new Intern(name, employee_id,email, newHire);
    }else {
        newInstance = new Manager(name, employee_id, email, newHire)
    }

    employees.push(newInstance);
    addHtml(newInstance)
    .then (() => {
        if (addedMember === "yes"){
            addMember();
        }else {
            endHtml()
        }
    })
})
})
}

startHtml(() => {
    const html =`
    
    
    `

})
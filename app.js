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
        choices: ["Engineer", "Manager", "Intern"],
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
        name: "email"

    }, 
])

.then (({name, title, employee_id, email}) =>{
    var titleHire = ""
    if (title === "Intern"){
        titleHire = "school";

    }else if(title === "Manager"){
        titleHire = "officeNumber";

    }else {
        titleHire = "github";
    }

inquirer.prompt([{
        type: "input",
        message: `What is this employee's ${titleHire}`,
        name: "titleHire",
},
    {
        type: "list",
        message: "Would you like to add a new member to the team?",
        choices: ["Yes", "No"],
        name: "addedMember",
    }
])
.then (({titleHire, addedMember}) =>{
    var newInstance = ""
    if(title === "Engineer"){
    newInstance = new Engineer(name, email, employee_id, titleHire)

    } else if (title === "Intern") {
        newInstance = new Intern(name, employee_id, email, titleHire);
    } else {
        newInstance = new Manager(name, employee_id, email, titleHire)
    }

    employees.push(newInstance);
    addHtml(newInstance)
    .then (function() {
        if (addedMember === "yes"){
            addMember();
        } else {
            endHtml()
        }
    });
});
});
}

function startHtml() {
    const html =`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Building Profile</title>
</head>
<body>
<nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">
      </div> `;
      fs.writeFile("./dist/teambuilder.html",html, function(err){
          if (err) {
              console.log(err);
          }
          });
          console.log("start");

      };
    

 function addHtml(member) {
    return new Promise(function(resolve,reject) {
        const name = member.getName();
        const title = member.getRole();
        const employee_id = member.getId();
        const email = member.getEmail();

        let data ="";
        if (title === "Engineer"){
            const gitHub = member.getGithub();
            data = `
            <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee_id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (title === "Intern") {
            const school = member.getSchool();
            data = `
            <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Inetrn</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee_id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officeNumber = member.getofficeNumber();
            data = `
            <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee_id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${officeNumber}</li>
            </ul>
            </div>
        </div>`;
        }
        console.log("Adding a nem Member");
        fs.appendFile("./dist/teambuilder.html", data, function (err) {
            if(err){
                return reject(err);
            };
            return resolve();
        });
    }
    )};

 function endHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/teambuilder.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("member added");

 }
 initApp();

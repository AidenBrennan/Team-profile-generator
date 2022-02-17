const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./output/HTML');

const managerarr = [];
const internarr = [];
const engineerarr = [];

function profileentry() {
    inquirer
    .prompt([{
        type: "input",
        message: "What is your name?",
        name: "name",
    },

    {
        type: "number",
        message: "What is your ID?",
        name: "id",
    }, {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"]
    }
    ])
    .then(
        function ({ name, id, email, role }) {
            if (role === "Engineer") {
                    inquirer
                        .prompt([{
                            type: "input",
                            message: "What is your GitHub username?",
                            name: "github"
                        }, 
                        {
                            type: "input",
                            message: "what is your current project",
                            name: "currentproject"
            
                        }]).then(
                            function ({ github, currentproject }) {
                                const engineer = new Engineer(name, id, email, github, currentproject);
                                engineerarr.push(engineer);
                                addOtherMembers()
                            });
            } else if (role === "Intern") {
                    inquirer
                        .prompt({
                            type: "input",
                            message: "What school do you attend?",
                            name: "school"
                        }).then(
                            function ({ school }) {
                                const intern = new Intern (name, id, email, school);
                                internarr.push(intern);
                                addOtherMembers()
                            });
            } else if (role === "Manager") {
                    inquirer
                        .prompt([{
                            type: "input",
                            message: "What is your Office Number?",
                            name: "officeNumber"
                        },
                        {
                                type: "input",
                                message: "what is your title",
                                name: "title"
                        }]).then(
                            function ({ officeNumber, title }) {
                                const manager = new Manager (name, id, email,officeNumber, title)
                                managerarr.push(manager)
                                addOtherMembers()
                            }
                        )
                }
            })

}

function addOtherMembers() {
    inquirer.prompt({
        type: "list",
        message: "do you wish to add another employee",
        name: "newemployee",
                choices: [
                    "yes",
                    "no"
                ]
            })
            .then((responses) => {
if (responses.newemployee === "yes" ) {
    profileentry();
} else if (responses.newemployee === "no") {
    generateHTML;
    generatemanagers();
    generateengineers();
    generateinterns();

}

function generatemanagers() {
    for (let i = 0; i<managerarr.length; i++ ) {
            const name = managerarr[i].name;
            const id = managerarr[i].id;
            const email = managerarr[i].email;
            const officeNumber = managerarr[i].officeNumber;
            const title = managerarr[i].title;
            let newmanager =
            `<div class="card card border-dark" style="width: 40rem;">
            <div class="card-body bg-info">
              <h5 class="card-text">manager: ${title}</p>
              <p class="card-text">${name}.</p>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email Address:<a href="mailto:${email}">${email}</a></li>
              <li class="list-group-item">Office number: ${officeNumber}</li>
          </ul>
            </div>
          </div>`;
        
                fs.appendFile("./output/team.html", newmanager, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
                console.log("manager added");
        }
}
function generateengineers() {
    for (let i = 0; i<engineerarr.length; i++ ) {
        const name = engineerarr[i].name;
        const id = engineerarr[i].id;
        const email = engineerarr[i].email;
        const github = engineerarr[i].github;
        const currentproject = engineerarr[i].currentproject;
        let newengineer =
        `<div class="card card border-dark" style="width: 40rem;">
        <div class="card-body bg-success">
            <h5 class="card-text">engineer</h5>
          <p class="card-text">${name}.</p>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">current project: ${currentproject}</li>
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email Address:<a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">GitHub:<a href="https://github.com/${github}">${github}</a></li>
      </ul>
        </div>
      </div>`;

            fs.appendFile("./output/team.html", newengineer, function (err) {
                if (err) {
                    console.log(err);
                }
            });
            console.log("engineer added");
    }
}
function generateinterns() {
    for (let i = 0; i<internarr.length; i++ ) {
        const name = internarr[i].name;
        const id = internarr[i].id;
        const email = internarr[i].email;
        const school = internarr[i].school;
        let newintern =
        `<div class="card card border-dark" style="width: 40rem;">
        <div class="card-body bg-warning">
          <h5 class="card-text">intern</h5>
          <p class="card-text">${name}.</p>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email Address:<a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">Education: ${school}</li>
      </ul>
        </div>
      </div>`;

            fs.appendFile("./output/team.html", newintern, function (err) {
                if (err) {
                    console.log(err);
                }
            });
            console.log("intern added");
    }
}
})
}
profileentry()
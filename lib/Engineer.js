const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github, currentproject){
        super(name, id, email);
        this.github = github;
        this.currentproject = currentproject;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
    getcurrentproject(){
        return this.currentproject;
    }
}

module.exports = Engineer;
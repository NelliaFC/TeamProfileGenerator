const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school){
     super(namem, id, email);
     this.school = school;
    }
    getRolel(){
        return "Intern";
    }
    getSchool() {
        return this.school
    }
}
module.exports = Intern
const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.officeNum = office;
    }
    getRole(){
        return 'Manager';
    }
    getOfficeNum(){
        return this.officeNum;
    }
}

module.exports = Manager;
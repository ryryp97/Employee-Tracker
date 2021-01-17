const inquirer = require("inquirer");
const cTable = require('console.table')
const orm = require("./config/orm.js");
var connection = require("./config/connection.js");

const mainInquirer = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: ['View Departments', 'View Roles', 'View Employees', 'Update Employee roles', 'Add Employee', 'Add Department', 'Add Role'],
            }
        ])
        .then((response) => {
            if (response.action === 'View Departments') {
                
                viewDepartments();
                mainInquirer();
            } else if (response.action === 'View Roles') {
                
                viewRoles();
                mainInquirer();
            } else if (response.action === 'View Employees') {
                
                viewEmployee();
                mainInquirer();
            } else if (response.action === 'Update Employee roles') {
                
                updateInquirer();

            } else if (response.action === 'Add Employee') {
                
                addEmployeeInquirer();

            } else if (response.action === 'Add Department') {
                
                addDepartmentInquirer();

            } else if (response.action === 'Add Role') {
                
                addRoleInquirer();

            }
        });
};

mainInquirer();


const viewDepartments = () => {
    orm.allDepartments();
    
};

const viewRoles = () => {
    orm.allRoles();
    mainInquirer();
};

const viewEmployee = () => {
    orm.allEmployees();
    mainInquirer();
};

const addEmployeeInquirer = () => {

};

const addRoleInquirer = () => {

};

const addDepartmentInquirer = () => {

};

const updateInquirer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "employeeId",
                message: "Which employee (enter id) would you like to change roles for?"
            },
            {
                type: "input",
                name: "roleId",
                message: "Please input the id of the role you want this employee to have"
            }
        ])
        .then((response) => {
            let queryString = "UPDATE employee SET role_id = ? WHERE employee.id = ?"

            connection.query(queryString, [parseInt(response.roleId), parseInt(response.employeeId)], function (err, result) {
                if (err) {
                    throw err;
                };
                console.table(result)
                mainInquirer();
            });
        });
        
};
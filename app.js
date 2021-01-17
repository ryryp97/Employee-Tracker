const inquirer = require("inquirer");
const cTable = require('console.table')
const orm = require("./config/orm.js");

const employeeInquirer = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: ['View Departments', 'View roles', 'View employees', 'Update Employee role', 'Add employee', 'Add Department', 'Add Role'],
            }
        ])
        .then((response) => {
            if (response.action === 'View Departments') {
                console.log(response.action);
                viewDepartments();
            } else if (response.action === 'View roles') {
                console.log(response.action);
                viewRoles();
            } else if (response.action === 'View employees') {
                console.log(response.action);
                viewEmployee();
            } else if (response.action === 'Update employee roles') {
                console.log(response.action);
                updateInquirer();
            } else if (response.action === 'Add employee') {
                console.log(response.action);
                addEmployeeInquirer();
            } else if (response.action === 'Add Department') {
                console.log(response.action);
                addDepartmentInquirer();
            } else if (response.action === 'Add Role') {
                console.log(response.action);
                addRoleInquirer();
        }
    });
};

employeeInquirer();


const viewDepartments = () => {
    orm.allDepartments();
    employeeInquirer();
};

const viewRoles = () => {
    orm.allRoles();
    employeeInquirer();
};

const updateInquirer = () => {

};
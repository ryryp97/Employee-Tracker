var connection = require("./connection.js");
const cTable = require('console.table')
const orm = {

    allDepartments: () => {
        connection.query("SELECT * FROM department", function (err, result) {
            if (err) {
                throw err;
            };
            console.table(result)
        });
    },
    allRoles: () => {
        connection.query("SELECT * FROM role", function (err, result) {
            if (err) {
                throw err;
            };
            console.table(result)
        });
    },
    allEmployees: () => {
        let queryString = "SELECT first_name, last_name, title, salary FROM role INNER JOIN employee ON role.id = role_id"
        
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            };
            console.table(result)
        });
    },
    updateRole: () => {
        let queryString = "UPDATE employee SET role = ? WHERE employee.id = ?"
        
        connection.query(queryString, [parseInt(response.roleId), parseInt(response.employeeId)], function (err, result) {
            if (err) {
                throw err;
            };
            console.table(result)
        });
    }


};

module.exports = orm;
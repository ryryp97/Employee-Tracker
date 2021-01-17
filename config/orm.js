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
        connection.query("SELECT * FROM department", function (err, result) {
            if (err) {
                throw err;
            };
            console.table(result)
        });
    },


};

module.exports = orm;
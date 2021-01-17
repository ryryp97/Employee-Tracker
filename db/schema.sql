DROP DATABASE IF EXISTS employees_db;
CREATE database employees_db;

USE employees_db;

CREATE TABLE department
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE role
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
    salary DECIMAL(2) NOT NULL,
    department_id int NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id), 
	PRIMARY KEY (id)
);

CREATE TABLE employee
(
    id int NOT NULL AUTO_INCREMENT,
	first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id int NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id),
	PRIMARY KEY (id)
);
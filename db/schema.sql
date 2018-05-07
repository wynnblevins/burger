CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

CREATE TABLE Burgers (
	id INT NOT NULL AUTO_INCREMENT, 
    devoured BOOLEAN, 
    burger_name VARCHAR(255),
    PRIMARY KEY (id)
);
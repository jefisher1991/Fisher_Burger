CREATE DATABASE burgers_db; 

USE burgers_db; 

CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT, 
burger_name varchar(255) NOT NULL, 
devoured boolean, 
date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY (id)
); 

INSERT INTO burgers (burger_name, devoured) VALUES ("double burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("cheese burger", false );
INSERT INTO burgers (burger_name, devoured) VALUES ("veggie burger", true);


SELECT * FROM burgers; 
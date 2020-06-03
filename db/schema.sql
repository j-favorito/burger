USE hnzbcz3g1mz7hnln;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);

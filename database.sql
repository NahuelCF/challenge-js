CREATE DATABASE challenge;

CREATE TABLE operations(
    id SERIAL NOT NULL,
    concept TEXT,
    amount INTEGER,
    operationType TEXT,
    operationDate DATE
);

INSERT INTO operations VALUES
(1,'Example', 2000, 'income', '2021-01-15'),
(2,'Example', 1000, 'out', '2021-02-15'),
(3,'Example', 2000, 'income', '2021-02-05'),
(4,'Example', 3300, 'out', '2021-02-11'),
(5,'Example', 2500, 'income', '2021-02-01'),
(6,'Example', 1500, 'out', '2021-02-22'),
(7,'Example', 1300, 'income', '2021-03-05'),
(8,'Example', 2100, 'out', '2021-03-01'),
(9,'Example', 4200, 'income', '2021-02-12'),
(10,'Example', 900, 'out', '2021-02-23'),
(11,'Example', 2400, 'income', '2021-03-06'),
(12,'Example', 1900, 'out', '2021-03-06');
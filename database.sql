CREATE DATABASE challenge;

CREATE TABLE operations(
    id SERIAL PRIMARY KEY,
    concept TEXT,
    amount INTEGER,
    operationType TEXT,
    operationDate DATE
);

INSERT INTO operations (concept,amount,operationtype,operationdate) VALUES 
('Example1', 2000, 'income', '2021-01-15'),
('Example2', 2000, 'income', '2021-02-05'),
('Example3', 1000, 'out', '2021-02-15'),
('Example4', 2500, 'income', '2021-02-01'),
('Example5', 3300, 'out', '2021-02-11'),
('Example6', 1500, 'out', '2021-02-22'),
('Example7', 1300, 'income', '2021-03-05'),
('Example8', 2100, 'out', '2021-03-01'),
('Example9', 900, 'out', '2021-02-23'),
('Example10', 4200, 'income', '2021-02-12'),
('Example11', 1900, 'out', '2021-03-06'),
('Example12', 2400, 'income', '2021-03-06'),
('Example13', 3300, 'out', '2021-02-11'),
('Example14', 1500, 'out', '2021-02-22'),
('Example15', 1300, 'income', '2021-03-05'),
('Example16', 2100, 'out', '2021-03-01'),
('Example17', 900, 'out', '2021-02-23'),
('Example18', 4200, 'income', '2021-02-12'),
('Example19', 1900, 'out', '2021-03-06'),
('Example20', 2400, 'income', '2021-03-06');

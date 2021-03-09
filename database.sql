CREATE DATABASE challenge;

CREATE TABLE operations(
    id SERIAL PRIMARY KEY,
    concept TEXT,
    amount INTEGER,
    operationType TEXT,
    operationDate DATE
);

INSERT INTO operations (concept,amount,operationtype,operationdate) VALUES 
('Example1', 2000, 'income', '2021-01-01'),
('Example2', 2000, 'income', '2021-01-05'),
('Example3', 1000, 'out', '2021-01-15'),
('Example4', 2500, 'income', '2021-02-01'),
('Example5', 3300, 'out', '2021-02-11'),
('Example6', 4200, 'income', '2021-02-12'),
('Example7', 1500, 'out', '2021-02-22'),
('Example8', 900, 'out', '2021-02-23'),
('Example9', 900, 'out', '2021-02-26'),
('Example10', 1300, 'income', '2021-03-01'),
('Example11', 2100, 'out', '2021-03-05'),
('Example12', 1900, 'out', '2021-03-06'),
('Example13', 2400, 'income', '2021-03-07'),
('Example14', 3300, 'out', '2021-03-11'),
('Example15', 1500, 'out', '2021-03-22'),
('Example16', 1300, 'income', '2021-03-25'),
('Example17', 2100, 'out', '2021-03-26'),
('Example18', 4200, 'income', '2021-03-30'),
('Example19', 1900, 'out', '2021-04-06'),
('Example20', 2400, 'income', '2021-04-10');

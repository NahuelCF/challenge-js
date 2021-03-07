CREATE DATABASE challenge;

CREATE TABLE operations(
    id SERIAL PRIMARY KEY,
    concept TEXT,
    amount INTEGER,
    operationType TEXT,
    operationDate DATE
);

INSERT INTO operations (concept,amount,operationtype,operationdate) VALUES 
('Example', 2000, 'income', '2021-01-15'),
('Example', 1000, 'out', '2021-02-15'),
('Example', 2000, 'income', '2021-02-05'),
('Example', 3300, 'out', '2021-02-11'),
('Example', 2500, 'income', '2021-02-01'),
('Example', 1500, 'out', '2021-02-22'),
('Example', 1300, 'income', '2021-03-05'),
('Example', 2100, 'out', '2021-03-01'),
('Example', 4200, 'income', '2021-02-12'),
('Example', 900, 'out', '2021-02-23'),
('Example', 2400, 'income', '2021-03-06'),
('Example', 1900, 'out', '2021-03-06');
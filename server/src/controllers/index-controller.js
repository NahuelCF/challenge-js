const { Pool } = require("pg")

const config = {
    user: "postgres",
    host: "localhost",
    password: "admin",
    database: "challenge"
}

const pool = new Pool(config)

const getOperations = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM operations")
        res.status(200).json(response.rows)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getBalance = async (req, res) => {
    try {
        const response = await pool.query(`
        SELECT operationsout.out, operationsincome.income FROM
            (SELECT sum(amount) AS out  FROM operations WHERE operationtype='out') AS operationsout
            CROSS JOIN
            (SELECT sum(amount) AS income FROM operations WHERE operationtype='income') AS operationsincome;
        `)
        const out = parseInt(response.rows[0].out)
        const income = parseInt(response.rows[0].income)
        const balance = income - out
        res.status(200).json(balance)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createOperation = async (req, res) => {
    try {
        const { concept, amount, type, date } = req.body
        const response = await pool.query(`
            INSERT INTO operations (concept,amount,operationtype,operationdate) VALUES ($1,$2,$3,$4)
        `, [concept, amount, type, date])
        res.json({
            message: "Operation added successfully",
            body: {
                operation: { concept, amount, type, date }
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getOperations,
    getBalance,
    createOperation
}
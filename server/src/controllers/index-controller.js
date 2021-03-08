const { Pool } = require("pg")

const config = {
    user: "postgres",
    host: "localhost",
    password: "admin",
    database: "challenge"
}

const pool = new Pool(config)

const getOperationById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await pool.query(`
            SELECT * FROM operations WHERE id = $1;
        `, [id])
        res.status(200).json(response.rows[0])
    } catch (error) {
        res.status(500).json(error)
    }
}

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
        await pool.query(`
            INSERT INTO operations (concept,amount,operationtype,operationdate) VALUES ($1,$2,$3,$4)
        `, [concept, amount, type, date])
        res.status(200).json("Operation added successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateOperation = async (req, res) => {
    try {
        const { concept, amount, date, id } = req.body
        await pool.query(`
        UPDATE operations SET 
        concept = $1, amount = $2, operationdate = $3 
        WHERE id = $4;
    `, [concept, amount, date, id])
        res.status(200).json("Operation updated successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteOperation = async (req, res) => {
    const { id } = req.params
    try {
        await pool.query(`
            DELETE FROM operations WHERE id = $1;
        `, [id])
        res.status(200).json("Operation deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getOperations,
    getBalance,
    createOperation,
    updateOperation,
    deleteOperation,
    getOperationById
}
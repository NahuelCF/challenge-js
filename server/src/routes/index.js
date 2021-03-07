const { getOperations, getBalance, createOperation } = require('../controllers/index-controller')

// Permite definir rutas para el servidor
const { Router } = require("express")
const router = Router()

const operations = require("../sample.json")

router.get("/getOperations", getOperations)
router.get("/getBalance", getBalance)
router.post("/createOperation", createOperation)

module.exports = router
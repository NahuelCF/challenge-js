const { getOperations, getBalance, createOperation, updateOperation, deleteOperation, getOperationById } = require('../controllers/index-controller')

// Permite definir rutas para el servidor
const { Router } = require("express")
const router = Router()

const operations = require("../sample.json")

router.get("/getOperations", getOperations)
router.get("/getOperation/:id", getOperationById)
router.get("/getBalance", getBalance)
router.post("/createOperation", createOperation)
router.put("/updateOperation", updateOperation)
router.delete("/deleteOperation/:id", deleteOperation)

module.exports = router
const { getOperations } = require('../controllers/index-controller')

// Permite definir rutas para el servidor
const { Router } = require("express")
const router = Router()

const operations = require("../sample.json")

router.get("/getOperations", getOperations)

module.exports = router
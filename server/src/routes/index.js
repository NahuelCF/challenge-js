// Permite definir rutas para el servidor
const { Router } = require("express")
const router = Router()

const operations = require("../sample.json")

router.get("/getOperations", (req, res) => {
    res.json(operations)
})

module.exports = router
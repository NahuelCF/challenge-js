const express = require('express')
const app = express()

// CONFIG
app.set("json spaces", 2)

// MIDDLEWARES
//Permite al server recibir json y entenderlo
app.use(express.json())
//Para que entienda formularios que reciba desde el front (inputs)
app.use(express.urlencoded({ extended: false }))

// ROUTES
app.use(require("./routes/index"))

// STARTING THE SERVER
app.listen(3001, () => console.log("Server on port 3001"))
const express = require('express')
const app = express()

// CONFIG
app.set("json spaces", 2)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

// MIDDLEWARES
//Permite al server recibir json y entenderlo
app.use(express.json())
//Para que entienda formularios que reciba desde el front (inputs)
app.use(express.urlencoded({ extended: false }))

// ROUTES
app.use(require("./routes/index"))

// STARTING THE SERVER
app.listen(3001, () => console.log("Server on port 3001"))
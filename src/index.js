const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')


// Settings 
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes
app.use("/contact", require('./routes/routes'))

// Inicio del servidor
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto: ', app.get('port'))
})
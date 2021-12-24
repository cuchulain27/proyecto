require('dotenv').config();

const express = require('express');
const cors = require('cors')
const { dbConnection } = require('./database/config')
const nodemailer = require('nodemailer')

//crear el servidor de express

const app = express();

//lectura parseo

app.use(express.json());

//creacion de cors

app.use(cors());


//base de datos

dbConnection();

//rutas
app.use('/api/blog', require('./routes/blog'));
app.use('/api/mail', require('./routes/correo'));
app.use('/api/mail2', require('./routes/modal'));
app.use('/api/buscador', require('./routes/buscador'))


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto' + process.env.PORT);
});
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//El comentario de abajo no se puede borrar
//<cargar_rutas>



//Configuración de body-parser 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //Aquí convertimos todo el HTML que nos llegue a la API a json

//configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//hacemos publico el acceso a la carpeta images para que se pueda acceder desde el frontend
app.use("/public", express.static(path.join(__dirname, 'public')));


//El comentario de abajo no se puede borrar
//<usar_rutas>



module.exports = app;
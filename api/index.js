'use strict'
//importamos el fichero de variables de entorno
require('dotenv').config({path: './config.env'});
const mongoose = require('mongoose');

const Chalk = require('chalk');
console.log("===================");    
console.log(Chalk.bgGreen("  API  "));
console.log(Chalk.green("By AcercaST"));
console.log("===================");  

//primero checkeamos las variables de entorno
if(process.env.API_PORT &&
process.env.DB_TYPE && 
process.env.DB_HOST &&
process.env.DB_USER &&
process.env.DB_PASSWORD){
     
     const app = require('./app');
     const port = process.env.API_PORT;  
     const url_proyecto = process.env.URL_PROYECTO;

     if(process.env.DB_TYPE=="mongodb"){
          //si estamos utilizando Mongo, hay que comunicar primero con la base de datos
          console.log("Conectando a MongoDB...");
          mongoose.Promise = global.Promise;
          mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, { 
               useNewUrlParser: true,
               useUnifiedTopology: true 
          },(err,res)=> {
               if(err){
                    throw err;
               }else{
                    console.log("BBDD conectada!");
                    console.log("===================");		
                    if(process.env.DB_TYPE=="dev"){
                         console.log("Arrancando entorno de desarrollo...");
                         app.listen(port, function(){
                              console.log("Servidor API Rest escuchando en http://"+url_proyecto+":" + port);
                         });
                    }else{
                         const https = require('https');
                         const fs = require('fs');
                         //cogemos los certificados SSL del VPS
                         const options = {
                              key: fs.readFileSync('/usr/local/psa/var/modules/letsencrypt/etc/live/licencias.acercasolutions.com/privkey.pem'),
                              cert: fs.readFileSync('/usr/local/psa/var/modules/letsencrypt/etc/live/licencias.acercasolutions.com/cert.pem')
                         };
                         var httpsServer = https.createServer(options, app);
                         httpsServer.listen(port);
                         console.log("Servidor API Rest escuchando en https://"+url_proyecto+":" + port);
                    }
               }
     
          });
     }else{
          //si estamos en desarrollo
          if(process.env.NODE_ENV=="dev"){
               console.log("Arrancando entorno de desarrollo...");
               app.listen(port, function(){
                    console.log("Servidor API Rest escuchando en http://"+url_proyecto+":" + port);
               });
          }else{
               //si estamos en producción montamos un https
               console.log("Arrancando entorno de producción...");
               const https = require('https');
               const fs = require('fs');
               //cogemos los certificados SSL del VPS
               const options = {
                    key: fs.readFileSync('/usr/local/psa/var/modules/letsencrypt/etc/live/licencias.acercasolutions.com/privkey.pem'),
                    cert: fs.readFileSync('/usr/local/psa/var/modules/letsencrypt/etc/live/licencias.acercasolutions.com/cert.pem')
               };
               var httpsServer = https.createServer(options, app);
               httpsServer.listen(port);
               console.log("Servidor API Rest escuchando en https://"+url_proyecto+":" + port);
          }
     } 

}else{
     console.log(Chalk.bgRed("  FALTAN VARIABLES DE ENTORNO  "));
}
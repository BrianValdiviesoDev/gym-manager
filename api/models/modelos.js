'use strict'
var tablaLogs ={
     "nombre_tabla": "Logs",
     "descripcion": "En esta tabla guardamos un histórico de acciones de la API",
     "campos":[
               {
                    "nombre": "id",
                    "tipo": "int",
                    "tamaño": "255",
                    "nulo": null,
                    "default": null,
                    "key": "AUTO_INCREMENT PRIMARY KEY",
                    "fk":null,
                    "descripcion": "ID único, se gestiona directamente desde MySQL"
               },
               {
                    "nombre": "id_usuario",
                    "tipo": "varchar",
                    "tamaño": "255",
                    "nulo": null,
                    "default": null,
                    "key": null,
                    "fk":null,
                    "descripcion": "ID del usuario que ha hecho la petición"
               },
               {
                    "nombre": "query",
                    "tipo": "varchar",
                    "tamaño": "500",
                    "nulo": null,
                    "default": null,
                    "key": null,
                    "fk":null,
                    "descripcion": "Query realizada en la petición"
               },
               {
                    "nombre": "model",
                    "tipo": "varchar",
                    "tamaño": "5000",
                    "nulo": null,
                    "default": null,
                    "key": null,
                    "fk":null,
                    "descripcion": "Modelo de datos recibido"
               },{
                    "nombre": "res",
                    "tipo": "varchar",
                    "tamaño": "255",
                    "nulo": null,
                    "default": null,
                    "key": null,
                    "fk":null,
                    "descripcion": "Respuesta generada por la API"
               },
               {
                    "nombre": "error",
                    "tipo": "int",
                    "tamaño": "255",
                    "nulo": null,
                    "default": null,
                    "key": null,
                    "fk":null,
                    "descripcion": "Error devuelto por la API"
               },
               {
                    "nombre": "cdate",
                    "tipo": "datetime",
                    "tamaño": null,
                    "nulo": null,
                    "default": "CURRENT_TIMESTAMP",
                    "key":null,
                    "fk":null,
                    "descripcion": "Fecha de creación."
               }
     ]
};

module.exports = {
     tablaLogs,
}
// contraseña de la base de datos = mikejhos2912
// usuario = root
const mysql = require("mysql")
// let mysql = require("mysql");

let conexion = mysql.createConnection({
    host : "localhost",
    database :"wood_core",
    user: "root",
    password: "mikejhos2912"
})



conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexión exitosa");
    }
});

module.exports = conexion




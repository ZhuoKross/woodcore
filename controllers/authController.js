const authService = require("../services/authService.js")


const createUser = (req, res) =>{
    const {
        nombrePersona,
        apellidoPersona,
        tipoDocumento,
        numeroDocumento,
        tipoRol,
        email,
        password
    } = req.body;

    // prueba de código;
    //console.log("CONTROLLER: ", apellidoPersona);

    if(!nombrePersona || !apellidoPersona || !tipoDocumento || !numeroDocumento || !tipoRol || !email || !password){
        res.send({status: "ERROR", message: "Error(CONTROLLER) al recibir las tareas. Hay campos vacíos"})
    }

    const newPerson = {
        nombrePersona,
        apellidoPersona,
        tipoDocumento,
        numeroDocumento,
        tipoRol,
        email,
        password
    }

    authService.createUser(newPerson);

}


module.exports = {createUser};
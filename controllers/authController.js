const authService = require("../services/authService.js")




class PersonsController {
    constructor(){

    }


    consultarUno(req, res){
        res.send({"message": "Un usuario"});
    }

    insertar(req, res){
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

    actualizar(req, res){

    }

    eliminar(req, res){

    }
}





module.exports = new PersonsController();
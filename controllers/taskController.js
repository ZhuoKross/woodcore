const path = require("path");
const tareas = require("../services/tareas.js");
const proyectos = require("../services/proyectos.js");
const conexion = require("../model/conexion.js");
const { response } = require("express");

// const tareasProcesadas = tareas.mostrarTareas

const homePage = function(req,res){
    res.sendfile(path.resolve("views/index.html"));
}

const mostrarDashboard = function(req, res){
    res.sendfile(path.resolve("views/dashboard.html"));
}

const mostrarDatosTareas = function(req, res){
    tareas.mostrarTareas()
    .then(tareasProcesadas =>{
        res.json(tareasProcesadas)
    })
    .catch(err =>{
        console.error("Error al obtener la tareas", err);
    })
}


const mostrarLogin = function(req, res){
    res.sendfile(path.resolve("views/inicio_sesion.html"))
}


const mostrarRegistro = function(req, res){
    res.sendfile(path.resolve("views/registro.html"))
}

const recuperarContraseña = function(req, res){
    res.sendfile(path.resolve("views/recuperar.html"))
}
// const mostrarTareas = function(req, res){
//     const tareasProcesadas = tareas.mostrarTareas;
    
//     res.setHeader('Content-Type', 'application/json');

//     res.json(tareasProcesadas);
// }

const mostrarProjectos = function(req, res){
    proyectos.mostrarProyectos()
    .then(proyectosProcesados =>{
        res.json(proyectosProcesados);
    })
    .catch(err =>{
        console.error("Error al obtener los proyectos", err);
    })
}



// controlador para el formulario de crear tareas
async function addTask(req, res){
    // prueba de código de que los datos se adquirieron desde el front end
    // console.log(req.body);

    const nombre = req.body.nombre
    const prioridad = req.body.prioridad
    const descripcion = req.body.descripcion
    const estado = req.body.estado
    const encargado = req.body.encargado
    const sprint = req.body.sprint
    
    let registrarTarea = "INSERT INTO tareas_prueba (nombre_tarea, prioridad, resumen, estado, encargado_tarea, sprint_tarea) VALUES ('"+nombre+"', '"+prioridad+"', '"+descripcion+"', '"+estado+"', '"+encargado+"', '"+sprint+"')";

    conexion.query(registrarTarea, function(err){
        if(err){
            throw err
        }else{
            console.log("datos almacenados correctamente")
        }
    })
}


//Controlador para hacer la consulta individual para la acutalizacion de tareas
const getOneTask = async (req, res)=>{
    const nombreTarea = req.body.nombreTarea;

    if(!nombreTarea){
        console.log("Error al obtener la tarea(CONTROLLER)");
        res.status(400).send({status: "ERROR", message: "nombre de tarea no proporcinado"});
    }

    tareas.getOneTask(nombreTarea)
    .then(tareaProcesada =>{
        //prueba
        //console.log("CONTROLLER: La respuesta es: ", tareaProcesada)
        res.send({status: "OK", data: tareaProcesada})
    })
    .catch(err =>{
        console.log("Error en la respuesta (Controller)");
    })
}




//Controlador para hacer la actualización de los datos en la base de datos
const editOneTask = (req, res) =>{
    const {
        nombre_tarea,
        prioridad, 
        resumen,
        estado,
        encargado_tarea,
        sprint_tarea
     } = req.body


     const taskToEdit = {
        nombre_tarea,
        prioridad,
        resumen,
        estado,
        encargado_tarea,
        sprint_tarea
     }

     const nombreTarea = taskToEdit.nombre_tarea;
     //prueba
     console.log("TAREA A EDITAR (CONTROLLER): ", taskToEdit);

    tareas.editOneTask(nombreTarea, taskToEdit)
    // .then(tareaEditada =>{
    //     console.log("Tarea editada: ", tareaEditada);
    //     res.send({status: "OK", data: tareaEditada});
    // })
    // .catch(err => {
    //     console.log("error al insertar las tareas (CONTROLLER)");
    // })


}


//Controlador para eliminar una tarea en la base de datos
const deleteOneTask = (req, res)=>{

    const nombreTarea = req.body.nombreTarea;

    console.log("Tarea a eliminar(CONTROLLER): ", nombreTarea);

    if(!nombreTarea){
        console.log("ERROR: No se proporciono el nombre de la tarea (CONTROLLER)");
    }

    tareas.deleteOneTask(nombreTarea);

    res.redirect("/dashboard");

}






// controlador para el form de crear proyectos 
const addProject = function(req, res){
    // prueba de código de que los datos se adquirieron desde el front end
    // console.log(req.body);

    const nombre_proyecto = req.body.nombre_proyecto;
    const prioridad = req.body.prioridad;
    const sprint = req.body.sprint;
    const encargado_proyecto = req.body.encargado_proyecto;
    const miembros_proyecto = req.body.miembros_equipo;
    const roles_proyecto = req.body.roles_equipo;


    let registrarProyecto = "INSERT INTO proyecto_prueba (nombre_proyecto, prioridad, sprint, encargado_proyecto, miembros_proyecto, roles_proyecto) VALUES ('"+nombre_proyecto+"', '"+prioridad+"', '"+sprint+"', '"+encargado_proyecto+"', '"+miembros_proyecto+"', '"+roles_proyecto+"')";

    conexion.query(registrarProyecto, function(err){
        if(err){
            throw err
        }else{
            console.log("datos almacenados correctamente")
        }
    })


}




const addProjectForm = function(req, res){
    res.sendfile(path.resolve("views/creacion_proyectos.html"))
}



module.exports = {
    homePage,
    mostrarDatosTareas,
    mostrarDashboard,
    mostrarProjectos,
    addTask,
    addProjectForm,
    addProject,
    mostrarLogin,
    mostrarRegistro,
    recuperarContraseña,
    getOneTask,
    editOneTask,
    deleteOneTask
}
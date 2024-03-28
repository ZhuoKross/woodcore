const path = require("path");
const tareas = require("../model/tareas")
const conexion = require("../model/conexion.js");

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

const mostrarProjectos = function(req, res){}

const addTaskForm = function(req, res){}


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



const addProjectForm = function(req, res){
    res.sendfile(path.resolve("views/creacion_proyectos.html"))
}

const addProject = function(req, res){}


module.exports = {
    homePage,
    mostrarDatosTareas,
    mostrarDashboard,
    mostrarProjectos,
    addTaskForm,
    addTask,
    addProjectForm,
    addProject,
    mostrarLogin,
    mostrarRegistro,
    recuperarContraseña
}
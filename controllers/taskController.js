const path = require("path");
const tareas = require("../model/tareas")

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

const addTask = function(req, res){}

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
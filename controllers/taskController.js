const path = require("path");
const tareas = require("../model/tareas");
const proyectos = require("../model/proyectos.js");
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
    recuperarContraseña
}
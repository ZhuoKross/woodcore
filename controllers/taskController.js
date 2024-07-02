const tareas = require("../services/tareas.js");



class TasksController {
    constructor() {

    }

    consultarTodo(req, res) {
        tareas.mostrarTareas()
            .then(tareasProcesadas => {
                res.json(tareasProcesadas)
            })
            .catch(err => {
                console.error("Error al obtener la tareas", err);
            })
    }

    consultarUno(req, res) {

    }

    insertar(req, res) {
        // prueba de código de que los datos se adquirieron desde el front end
        // console.log(req.body);

        const nombre = req.body.nombre
        const prioridad = req.body.prioridad
        const descripcion = req.body.descripcion
        const estado = req.body.estado
        const encargado = req.body.encargado
        const sprint = req.body.sprint

        let registrarTarea = "INSERT INTO tareas_prueba (nombre_tarea, prioridad, resumen, estado, encargado_tarea, sprint_tarea) VALUES ('" + nombre + "', '" + prioridad + "', '" + descripcion + "', '" + estado + "', '" + encargado + "', '" + sprint + "')";

        conexion.query(registrarTarea, function (err) {
            if (err) {
                throw err
            } else {
                console.log("datos almacenados correctamente")
            }
        })
    }

    actualizar(req, res) {
        const nombreTarea = req.body.nombreTarea;

        if (!nombreTarea) {
            console.log("Error al obtener la tarea(CONTROLLER)");
            res.status(400).send({ status: "ERROR", message: "nombre de tarea no proporcinado" });
        }

        tareas.getOneTask(nombreTarea)
            .then(tarea => {
                //prueba
                //console.log("CONTROLLER: La respuesta es: ", tareaProcesada)
                res.send({ status: "OK", data: tarea })
            })
            .catch(err => {
                console.log("Error en la respuesta (Controller)");
            })
    }

    eliminar(req, res) {
        const nombreTarea = req.body.nombreTarea;

        console.log("Tarea a eliminar(CONTROLLER): ", nombreTarea);

        if (!nombreTarea) {
            console.log("ERROR: No se proporciono el nombre de la tarea (CONTROLLER)");
        }

        tareas.deleteOneTask(nombreTarea);

        res.redirect("/dashboard");
    }
}


module.exports = new TasksController();







//Controlador para hacer la actualización de los datos en la base de datos
const editOneTask = (req, res) => {
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





module.exports = new TasksController();
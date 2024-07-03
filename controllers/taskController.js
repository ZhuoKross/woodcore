const tareaService = require("../services/tareas.js");



class TasksController {
    constructor() {

    }

    consultarTodo(req, res) {
        tareaService.mostrarTareas()
            .then(tareasProcesadas => {
                res.json(tareasProcesadas)
            })
            .catch(err => {
                console.error("Error al obtener la tareas", err);
            })
    }

    consultarUno(req, res){
        const idTarea = req.params.id
        
        console.log(`El id de la tarea a buscar es: ${idTarea}`);
        if(!idTarea){
            console.log("(CONTROLLER) Error al obtener la tarea");
        }


        tareaService.getOneTask(idTarea)
        .then(tarea =>{res.json(tarea)})
        .catch(err =>{
            console.log("Error al devolver la tarea(CONTROLLER)", err);
        })

        
    }


    insertar(req, res) {
        // prueba de código de que los datos se adquirieron desde el front end
        // console.log(req.body);

        const nombre_tarea = req.body.nombre
        const prioridad = req.body.prioridad
        const resumen = req.body.descripcion
        const encargado_tarea = req.body.encargado
        const sprint_tarea = req.body.sprint

        const newTask = {
            nombre_tarea,
            prioridad,
            resumen,
            encargado_tarea,
            sprint_tarea
        }


        tareaService.crearTarea(newTask);

        
    }

    actualizar(req, res) {
        const {
            body, 
            params: {id}
        } = req;

        if (!id) {
            console.log("Error al obtener la tarea(CONTROLLER UPDATE)");
            res.status(400).send({ status: "ERROR", message: "id de tarea no proporcinado" });
        }

        console.log("el id de la tarea a actualizar es: ", id);
        console.log(`Los cambios son: ${body}`);

        tareaService.editOneTask(id, body)
        .then(tareaActualizada => res.json(tareaActualizada))
    }


    eliminar(req, res) {
        const {id} = req.params;

        console.log("Tarea a eliminar(CONTROLLER): ", id);

        if (!id) {
            console.log("ERROR: No se proporciono el id de la tarea (CONTROLLER)");
        }

        tareaService.deleteOneTask(id)
        .then(mensaje =>{
            res.json(mensaje);
        })
        
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
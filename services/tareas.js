// Código para mostrar las tareas y crearlos en el dashboard
const conexion = require("../model/conexion")
// const Task = require("../controllers/taskPrototype")
const seleccionarTareas = "SELECT * FROM tareas_prueba";




function mostrarTareas (){
    return new Promise((resolve, reject)=>{
        conexion.query(seleccionarTareas, function(err, listOfTasks){
            if(err){
                reject(err);
            }else{
                const taskInfoArray = [];
                //const cantidadTareas = listOfTasks.keys().length;
                listOfTasks.forEach((task, indice) => {
                    
                    // Creación y asignación de las propiedades del objeto taskinfo
                    const tarea_id = task.tarea_id;
                    const nombre = task.nombre_tarea;
                    const prioridad = task.prioridad;
                    const descripcion = task.resumen;
                    const estado = task.estado;
                    const encargado = task.encargado_tarea;
                    const sprint = task.sprint_tarea;
                    
                    // asignación de las propiedades de cada una de las tareas
                    const taskInfo = {
                        tarea_id,
                        nombre,
                        prioridad,
                        descripcion,
                        estado,
                        encargado,
                        sprint
                    };

                    
                    // console.log(taskInfo)
                    taskInfoArray.push(taskInfo)
                    // console.log(tarea_id, nombre, prioridad, descripcion, estado, sprint)
                    // for(const tarea of listOfTasks){
                    // }
                    
                });

                resolve(taskInfoArray);
                
            }
        })
    })
}



////////////////////////////////////////////////////////////
// CONSULTA PARA OBTENER LA TAREA INDIVIDUAL PARA EL UPDATE

const getOneTask = (nombreTarea)=>{
    const tareaABuscar = 'SELECT * FROM tareas_prueba WHERE nombre_tarea = ?';

    return new Promise((resolve, reject) =>{
        conexion.query(tareaABuscar, [nombreTarea], (err, tarea) =>{
            if(err){
                reject(err)
            }else{
                const arrayGetOneTask = [];

                tarea.forEach( tareaIndividual =>{
                    const nombre = tareaIndividual.nombre_tarea;
                    const prioridad = tareaIndividual.prioridad;
                    const descripcion = tareaIndividual.resumen;
                    const estado = tareaIndividual.estado;
                    const encargado = tareaIndividual.encargado_tarea;
                    const sprint = tareaIndividual.sprint_tarea;

                    const taskInfo = {
                        nombre,
                        prioridad,
                        descripcion,
                        estado,
                        encargado,
                        sprint
                    }

                    //console.log(taskInfo);
                    arrayGetOneTask.push(taskInfo)
                })
                
                //prueba para confirmar que la tarea se obtuvo desde el service
                //console.log("los datos de la tarea son: ", arrayGetOneTask);

                resolve(arrayGetOneTask);
            }
        })
    })
}




//////////////////////////////////////////////////////////////
// CONSULTA PARA MODIFICAR LA TAREA INDIVIDUAL DEL FORM UPDATE

const editOneTask = (nombreTarea, taskToEdit) =>{

    console.log("El nombre de la tarea a actualizar es: ", nombreTarea)
    console.log(taskToEdit);
    
    const consultaEditarTarea = "UPDATE tareas_prueba SET ? WHERE nombre_tarea = ?" 

    conexion.query(consultaEditarTarea, [taskToEdit, nombreTarea], (err) =>{
        if(err){
            console.log("ERROR al actualizar tarea (SERVICE)", err);
        }else{
            console.log("TAREA ACTUALIZADA CORRECTAMENTE");
        }
    })
}



//////////////////////////////////////////////////////////////
// CONSULTA PARA ELIMINAR UNA TAREA INDIVIDUAL


const deleteOneTask = (nombreTarea) => {
    
    //console.log("");

    const consultaEliminarTarea = "DELETE FROM tareas_prueba WHERE nombre_tarea = ?";

    conexion.query(consultaEliminarTarea, [nombreTarea], (err) =>{
        if(err){
            console.log("Error al eliminar la tarea (SERVICE)");
        }else{
            console.log("Tarea Eliminada correctamente");
        }

    })


}






module.exports = {
    mostrarTareas,
    getOneTask,
    editOneTask,
    deleteOneTask
}
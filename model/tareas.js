// Código para mostrar las tareas y crearlos en el dashboard
const conexion = require("./conexion")
// const Task = require("../controllers/taskPrototype")
const seleccionarTareas = "SELECT * FROM tareas_prueba";





function mostrarTareas (){
    return new Promise((resolve, reject)=>{
        conexion.query(seleccionarTareas, function(err, listOfTasks){
            if(err){
                reject(err);
            }else{
                const taskInfoArray = [];
                const cantidadTareas = listOfTasks.keys().length;
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



module.exports = {
    mostrarTareas
}
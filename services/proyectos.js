// Código para obtener las tareas y enviarlos al dashboard de proyectos
const conexion = require("../model/conexion");

const seleccionarProyectos = "SELECT * FROM proyecto_prueba";


function mostrarProyectos(){
    return new Promise((resolve, reject) => {
        conexion.query(seleccionarProyectos, function(err, listOfProjects){
            if(err){
                reject(err);
            }else{

                const projectsInfoArray = [];
                
                listOfProjects.forEach(project => {
                    // creación y asignación de las propiedades del objeto projectsInfo
                    const project_id = project.id_proyecto;
                    const nombre_proyecto = project.nombre_proyecto;
                    const prioridad = project.prioridad;
                    const sprint = project.sprint;
                    const encargado_proyecto = project.encargado_proyecto;
                    const miembros_proyecto = project.miembros_proyecto;
                    const roles_proyecto = project.roles_proyecto;

                    
                    // Asignación de las paropiedades al objeto projectsInfo
                    const projectsInfo = {
                        project_id,
                        nombre_proyecto,
                        prioridad,
                        sprint,
                        encargado_proyecto,
                        miembros_proyecto,
                        roles_proyecto
                    }


                    projectsInfoArray.push(projectsInfo);

                });
                
                resolve(projectsInfoArray);

            }
        })
    })
}


module.exports = {
    mostrarProyectos
}
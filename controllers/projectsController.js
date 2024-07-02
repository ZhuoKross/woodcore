const projectsService = require("../services/proyectos");


class ProjectsController {
    constructor() {

    }

    consultarTodo(req, res) {
        proyectos.mostrarProyectos()
            .then(proyectosProcesados => {
                res.json(proyectosProcesados);
            })
            .catch(err => {
                console.error("Error al obtener los proyectos", err);
            })
    }

    consultarUno(req, res) {

    }

    insertar(req, res) {
        // prueba de código de que los datos se adquirieron desde el front end
        // console.log(req.body);

        const nombre_proyecto = req.body.nombre_proyecto;
        const prioridad = req.body.prioridad;
        const sprint = req.body.sprint;
        const encargado_proyecto = req.body.encargado_proyecto;
        const miembros_proyecto = req.body.miembros_equipo;
        const roles_proyecto = req.body.roles_equipo;


        let registrarProyecto = "INSERT INTO proyecto_prueba (nombre_proyecto, prioridad, sprint, encargado_proyecto, miembros_proyecto, roles_proyecto) VALUES ('" + nombre_proyecto + "', '" + prioridad + "', '" + sprint + "', '" + encargado_proyecto + "', '" + miembros_proyecto + "', '" + roles_proyecto + "')";

        conexion.query(registrarProyecto, function (err) {
            if (err) {
                throw err
            } else {
                console.log("datos almacenados correctamente")
            }
        })
    }

    actualizar(req, res) {

    }

    eliminar(req, res) {

    }
}


module.exports = new ProjectsController();
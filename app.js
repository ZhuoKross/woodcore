const express = require("express");
const path = require("path");
const morgan = require("morgan");
const conexion = require("./model/conexion");
const tareas = require("./model/tareas")
const taskController = require("./controllers/taskController");
const cors = require("cors");

// const __dirname = path.dirname(new URL(import.meta.url).pathname)

// inicialización de express
const app = express();

// configuración del generador de plantillas
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"))



// para la configuración de morgan
app.use(morgan("dev"));
// Para la configuración de CORS
app.use(cors());


// configuración de los archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
// Configuración de las vistas
app.set("views", path.join(__dirname, "views"))

// Para que se puedan interpretar los datos
app.use(express.json());
//para la codificación de las url
app.use(express.urlencoded({extended:false}));





// rutas
app.get("/", taskController.homePage)


app.get("/dashboard", taskController.mostrarDashboard)

app.get("/task-info", taskController.mostrarDatosTareas)

app.get("/add-project", taskController.addProjectForm)

app.get("/add-task", function(req, res){
    res.sendFile(path.resolve("views/tareas.html"))
})

app.get("/login", taskController.mostrarLogin)


app.get("/sign-up", taskController.mostrarRegistro)


app.get("/recuperar", taskController.recuperarContraseña)


// Para hacer la ruta hacia el form de tareas y crear la funcionalidad 
app.post("/add-task", function(req, res){
    const datosFormTasks = req.body;

    let nombreTarea = datosFormTasks.nombre_task
    let prioridadTarea = datosFormTasks.prioridad
    let descripcionTarea = datosFormTasks.descripcion
    let estadoTarea = datosFormTasks.estado_tarea
    let encargadoTarea = datosFormTasks.encargado
    let sprintTask = datosFormTasks.sprint_task

    let registrarTarea = "INSERT INTO tareas_prueba (nombre_tarea, prioridad, resumen, estado, encargado_tarea, sprint_tarea) VALUES ('"+nombreTarea+"', '"+prioridadTarea+"', '"+descripcionTarea+"', '"+estadoTarea+"', '"+encargadoTarea+"', '"+sprintTask+"')";

    conexion.query(registrarTarea, function(err){
        if(err){
            throw err
        }else{
            console.log("tarea guardada correctamente")
            
        }
    })
})


// Para hacer la ruta hacia el form de proyectos y crear la funcionalidad
app.post("/validar", function(req, res){
    const datos = req.body;

    let nombre_proyecto = datos.nombre_proyecto
    let prioridad_proyecto = datos.Prioridad
    let sprint_proyecto = datos.Sprint
    let encargado_proyecto = datos.encargado_proyecto
    let miembors = datos.miembros
    let roles = datos.roles

    let registrar = "INSERT INTO proyecto_prueba (nombre_proyecto, sprint) VALUES ('"+nombre_proyecto+"','"+sprint_proyecto+"')";

    conexion.query(registrar, function(err){
        if(err){
            throw err
        }else{
            console.log("datos almacenados correctamente")
            // conexion.end()
        }
    })
})








app.listen(3000,function(){
    console.log("servidor creador correctamente: http://localhost:3000")
})
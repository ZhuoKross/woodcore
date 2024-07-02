const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const usersRoutes = require("./routes/personsRoutes");
const tareasRoutes = require("./routes/tareasRoutes");
const proyectosRoutes = require("./routes/proyectosRoutes");



// inicialización de express
const app = express();




///////////////////////////////////////////////////
////////////////// MIDDLEWARES ////////////////////

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




///////////////////////////////////////////////////
//////////////////// RUTAS ////////////////////////

// Para mostrar el landing page
app.get("/", (req, res) =>{
    res.sendfile(path.resolve("views/index.html"));
})
// Para mostrar el dashboard
app.get("/dashboard", (req, res) => {
    res.sendfile(path.resolve("views/dashboard.html"));
})
// Para mostrar el login
app.get("/login", (req, res) =>{
    res.sendfile(path.resolve("views/inicio_sesion.html"))
})
// Para mostrar el registro
app.get("/sig-up", (req, res) =>{
    res.sendfile(path.resolve("views/registro.html"))
})
// Para mostrar el form de recuperar
app.get("/recuperar", (req, res) => {
    res.sendfile(path.resolve("views/recuperar.html"))
})


// Para los proyectos y tareas
app.use("/dashboard/tasks", tareasRoutes);
app.use("/dashboard/projects", proyectosRoutes);
// Para los usuarios
app.use("/users", usersRoutes);



app.listen(3000,function(){
    console.log("servidor creado correctamente: http://localhost:3000")
})
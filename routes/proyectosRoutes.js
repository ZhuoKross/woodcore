const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projectsController.js")


router.route("/")
    .get("/", projectsController.consultarTodo)
    .get("/:id", projectsController.consultarUno)
    .post("/", projectsController.insertar)
    .put("/:id", projectsController.actualizar)
    .delete("/:id", projectsController.eliminar)


module.exports = router;
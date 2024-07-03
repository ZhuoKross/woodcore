const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController.js")


router
    .get("/", taskController.consultarTodo)
    .get("/:id", taskController.consultarUno)
    .post("/", taskController.insertar)
    .put("/:id", taskController.actualizar)
    .delete("/:id", taskController.eliminar)


module.exports = router;
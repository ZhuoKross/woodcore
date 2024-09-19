const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController.js")

router.get("/all", taskController.consultarTodo);
router.post("/create", taskController.insertar);

router.route("/:id")
    .get(taskController.consultarUno)
    .put(taskController.actualizar)
    .delete(taskController.eliminar)


module.exports = router;
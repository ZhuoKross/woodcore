const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projectsController.js")

router.get("/all", projectsController.consultarTodo);
router.post("/create", projectsController.insertar);

router.route("/:id")
    .get(projectsController.consultarUno)
    .put(projectsController.actualizar)
    .delete(projectsController.eliminar)


module.exports = router;
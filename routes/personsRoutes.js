const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


router.post("/", authController.insertar);


router.route("/:id")
    .get(authController.consultarUno)
    .put(authController.actualizar)
    .delete(authController.eliminar)


module.exports = router;
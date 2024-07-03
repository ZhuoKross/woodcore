const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


router
    .get("/:id", authController.consultarUno)
    .post("/", authController.insertar)
    .put("/:id", authController.actualizar)
    .delete("/:id", authController.eliminar)


module.exports = router;
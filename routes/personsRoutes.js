const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


router.route("/")
    .get("/:id", authController.consultarUno)
    .post("/", authController.insertar)
    .put("/:id", authController.actualizar)
    .delete("/:id", authController.eliminar)


module.exports = router;
const express = require("express");
const FuncionarioController = require("../controller/FuncionarioController");
const router = express.Router();
const funcionarioController = new FuncionarioController();

router.get("/", funcionarioController.getFuncionarios);
router.get("/:matricula", funcionarioController.getByMatricula);
router.delete("/:matricula", funcionarioController.delete);
router.post("/", funcionarioController.create);
router.put("/:matricula", funcionarioController.update);
router.post("/filtrar", funcionarioController.filtrar);
module.exports = router;

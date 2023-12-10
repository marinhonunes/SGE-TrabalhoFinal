const express = require('express');
const ResponsavelController = require('../controller/responsavelController');
const router = express.Router();
const responsavelController = new ResponsavelController();

router.get('/',responsavelController.getAll);
router.get('/:cpf',responsavelController.getById);
router.delete('/:cpf',responsavelController.delete);
router.post('/',responsavelController.create);
router.put('/:cpf',responsavelController.update);
router.post('/filtrar',responsavelController.filtrar)

module.exports=router;
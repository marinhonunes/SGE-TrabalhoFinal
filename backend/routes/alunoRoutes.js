const express=require('express');
const AlunoController = require('../controller/alunoController');
const router = express.Router();
const alunoController = new AlunoController

router.get('/',alunoController.getAll)
router.get('/:cpf',alunoController.getByCPF)
router.delete('/:cpf',alunoController.deleteAluno)
router.post('/',alunoController.create)
router.put('/:cpf',alunoController.update)
router.post('/filtrar',alunoController.filtrar)
module.exports=router
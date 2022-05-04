const express = require('express');
const router = express.Router();

//variavel que recebe o controller vagas
const vagasController = require('../controllers/vagas-controller');

// rortas CRUD: GET,GETid,POST,PATCH,DELETE da tabela vagas_empresa

//retorna todas as vagas
router.get('/',vagasController.getVagas);
//retorna vagas com id
router.get('/:id',vagasController.getVagasId);
//insere uma vaga
router.post('/',vagasController.insereVaga);
//altera uma vaga 
router.patch('/',vagasController.alteraVaga);
//deleta uma vaga
router.delete('/',vagasController.deletaVaga);


module.exports = router;
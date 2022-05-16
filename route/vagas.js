const express = require('express');
const router = express.Router();
const login = require('../middleware/login');


//variavel que recebe o controller vagas
const vagasController = require('../controllers/vagas-controller');

// rortas CRUD: GET,GETid,POST,PATCH,DELETE da tabela vagas_empresa

//retorna todas as vagas
router.get('/',vagasController.getVagas);
//retorna vagas com id
router.get('/:id',vagasController.getVagasId);
//vagas de uma empresa
router.get('/empresas/:id',vagasController.getVagasEmpresasID);
//insere uma vaga
router.post('/',vagasController.insereVaga);
//altera uma vaga 
router.patch('/:id',vagasController.alteraVaga);
//deleta uma vaga
router.delete('/:id',vagasController.deletaVaga);


module.exports = router;
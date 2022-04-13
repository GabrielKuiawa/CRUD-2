const express = require('express');
const router = express.Router();

//variavel que recebe o controller vagas
const vagasController = require('../controllers/vagas.controller');

// rortas CRUD: GET,GETid,POST,PATCH,DELETE da tabela vagas_empresa

//retorna todas as vagas
router.get('/',vagasController.getVagas);

module.exports = router;
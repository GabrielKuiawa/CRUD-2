const express = require('express');
const router = express.Router();

//variavel que recebe o controller empresa
const empresasController = require('../controllers/empresa_controller');

// rortas CRUD: GET,GETid,POST,PATCH,DELETE da tabela empresas

//retorna todas as empresas
router.get('/',empresasController.getEmpresas);
// retorna empresa com id 
router.get('/:id',empresasController.getEmpresasID)


module.exports = router;
const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

//variavel que recebe o controller empresa
const empresasController = require('../controllers/empresa_controller');
//variavel que recebe o controller imagem
const imagem = require('../controllers/imagem_controller'); 

// rortas CRUD: GET,GETid,POST,PATCH,DELETE da tabela empresas

//precisa de um token esta rota
//retorna todas as empresas
router.get('/', empresasController.getEmpresas);
// retorna empresa com id 
router.get('/:id',empresasController.getEmpresasID);
// insere uma empresa
router.post('/',imagem.upload.single('image'),empresasController.insertEmpresas);
// altera empresa
router.patch('/',imagem.upload.single('image'),empresasController.aleterarEmpresas);
//deleta todas as empresas
router.delete('/',empresasController.deletaEmpresa);
//loga uma empresa
router.post('/login',empresasController.loginEmpresa);


module.exports = router;
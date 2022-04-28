const express = require('express');
const router = express.Router();



//variavel que recebe controller usuarios
const usuariosController = require('../controllers/usuarios_controller');
//variavel que recebe o controller imagem
const imagem = require('../controllers/imagem_controller'); 
// cria um usuario
router.post('/cadastro',imagem.upload.single('image'),usuariosController.criaUsuario);
//retorna todos os usuarios
router.get('/',usuariosController.getUsuarios);
//retorna usuarios com email
router.get('/:email',usuariosController.usuarioEmail);
//altera usuario
router.patch('/',imagem.upload.single('image'),usuariosController.alteraUsuario);
//remove usuario
router.delete('/',usuariosController.deletaUsuario);
//login usuario
router.post('/login',usuariosController.loginUsuario);

module.exports = router;

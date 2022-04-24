const express = require('express');
const router = express.Router();

//variavel que recebe controller usuarios
const usuariosController = require('../controllers/usuarios_controller');

// cria um usuario
router.post('/cadastro',usuariosController.criaUsuario);
//retorna todos os usuarios
router.get('/',usuariosController.getUsuarios);
//retorna usuarios com email
router.get('/:email',usuariosController.usuarioEmail);
//altera usuario
router.patch('/',usuariosController.alteraUsuario);
//remove usuario
router.delete('/',usuariosController.deletaUsuario);
//login usuario
router.post('/login',usuariosController.loginUsuario);

module.exports = router;

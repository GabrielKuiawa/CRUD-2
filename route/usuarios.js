const express = require('express');
const router = express.Router();

//variavel que recebe controller usuarios
const usuariosController = require('../controllers/usuarios_controller');

// cria um usuario
router.post('/cadastro',usuariosController.criaUsuario);

module.exports = router;

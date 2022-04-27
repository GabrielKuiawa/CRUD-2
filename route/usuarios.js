const express = require('express');
const router = express.Router();
const multer = require('multer');



//variavel que recebe controller usuarios
const usuariosController = require('../controllers/usuarios_controller');
//variavel que recebe o controller imagem
const imagem = require('../controllers/imagem_controller');
router.get('/teste', function (req,res){
    res.sendFile('/home/dev/Documentos/projeto 2/CRUD-2/uploads/2022-04-27T19:33:00.008ZCaptura de tela de 2022-03-30 14-05-28.png')
})
// cria um usuario
router.post('/cadastro',imagem.upload.single('image'),usuariosController.criaUsuario);
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

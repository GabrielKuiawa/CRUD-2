const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/empresa_controller');

router.get('/',produtosController.getPodutos);



module.exports = router;
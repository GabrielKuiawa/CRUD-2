const express = require('express');
const router = express.Router();

const candidatar = require('../controllers/candidatar_controller')

//posta candidatura
router.post('/',candidatar.postaCandidatura);
//busca candidaturas por vasga
router.get('/:id_vaga',candidatar.getCandidaturasPorVagas);
//busca candidaturas por usuario
router.post('/buscar',candidatar.getCandidaturasPorUsuario);
//deleta uma candidatura
router.delete('/',candidatar.deletaCadidatura);
module.exports = router;
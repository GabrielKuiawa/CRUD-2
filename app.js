const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//recebe as rotas
const routerEmpresas = require('./route/empresas');
const routerVagas = require('./route/vagas');
const routerUsuarios = require('./route/usuarios');
const routerCandidatar = require('./route/candidatar');


app.use(morgan('dev'));

//essas são as rotas
app.use('/uploads',express.static('uploads'));
app.use('/empresas',routerEmpresas);
app.use('/vagas',routerVagas);
app.use('/usuarios',routerUsuarios);
app.use('/candidatar',routerCandidatar)




//se não encontrar rota, ele vai parar aqui
app.use((req,res,next)=>{
    const erro = new Error('não encontrado');
    erro.status=404;
    next(erro);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    return res.send({
        erro:{
            mensagem: error.message
        }
    });
});;

module.exports = app;
const jwt = require('jsonwebtoken');

 // login 
 exports.login = (req,res,next)=> {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodificar = jwt.verify(token,"segredo");
        req.usuarios = decodificar
        next();
    } catch (error) {
        return res.status(401).send({ mensagem: 'Falha na autenticação' });
    }
 };
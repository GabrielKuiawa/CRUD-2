const mysql = require("../msql");
const bcrypt = require("bcrypt")    

// cria um usuario
exports.criaUsuario = async(req,res,next)=> {
    try {
        const result = await mysql.execute("SELECT * FROM usuarios WHERE email = ?;",[req.body.email]);
        if (result.length > 0) {
            return res.status(409).send({ message: 'Usuário já cadastrado' })
        }else{
            const hash = await bcrypt.hashSync(req.body.senha, 10);

            const query = 'INSERT INTO usuarios (email,senha,nome) VALUES (?,?,?);';
            await mysql.execute(query,[req.body.email,hash,req.body.nome]);   
            const response = {
                mensagem: 'vaga inserida com secesso',
                empresaCriada: {
                    email:req.body.email,
                    senha:req.body.senha,
                    nome:req.body.nome,
                    request:{
                        tipo: 'GET',
                        descricao:'retorna usuario com email',
                        url:'http://localhost:3003/usuarios/' + req.body.email
                    }  
                }
            }       
        return res.status(201).send(response);
        }
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};

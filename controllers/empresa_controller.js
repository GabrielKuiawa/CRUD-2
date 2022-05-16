const mysql = require("../msql");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken') 



//retorna empresas
exports.getEmpresas = async(req,res,next)=> {
    try {
        const result = await mysql.execute("SELECT * FROM empresas;")
        if (result.length == 0) {
            return res.status(404).send({
                message: 'Não foi encontrado empresa'
            })
        };
    
        const response = {
            id: result.lenght,
            empresas: result.map(emp => {
                console.log(emp);
                return{
                    id: emp.id,
                    nome: emp.nome, 
                    imagem:'http://localhost:3003/'+emp.imagem,
                    request:{
                        tipo: 'GET',
                        descricao:'retorna id da empresa',
                        url:'http://localhost:3003/empresas/'+ emp.id
                    }                     
                }
            })
        }
        return res.status(200).send(response);        
    } catch (error) {
        return res.status(500).send({ error:error});        
    }
};

//retorna empresa com id
exports.getEmpresasID = async(req,res,next)=> {
    try {
        const query = 'SELECT * FROM empresas WHERE id = ?;';
        const result = await mysql.execute(query,[req.params.id]);
        
        if (result.length == 0) {
            return res.status(404).send({
                message: 'Não foi encontrado empresa com este ID'
            })
        };
        console.log(result);
        const response = {
            EmpresaId: {
                id: result[0].id,
                empresas: result[0].empresas,
                imagem:'http://localhost:3003/'+result[0].imagem,
                request:{
                    tipo: 'GET',
                    descricao:'retorna um todas empresas',
                    url:'http://localhost:3003/empresas'
                }  
            }
        };
        return res.status(201).send(response);    
    } catch (error) {
        return res.status(500).send({ error:error});                
    };
};

//insere uma empresa
exports.insertEmpresas = async(req,res,next)=> {
    try {
        const resultEmpresas = await mysql.execute("SELECT * FROM empresas WHERE cnpj = ?;",[req.body.cnpj]);
        if (resultEmpresas.length > 0) {
            return res.status(404).send({
                message: 'já exite essa empresa'
            })
        }
        const hash =  bcrypt.hashSync(req.body.senha, 10);
        const query = 'INSERT INTO empresas (cnpj,nome,senha) VALUES (?,?,?)';
        const result = await mysql.execute(query,[req.body.cnpj,req.body.nome,hash]);   
        console.log(result)
        const response = {
            mensagem: 'empresa inserida com secesso',
            empresaCriada: {
                id: result.insertId,
                cnpj: req.body.cnpj,
                nome: req.body.nome,
                nome: req.body.hash,
                imagem:'http://localhost:3003/',
                request:{
                    tipo: 'GET',
                    descricao:'retorna empresa com o id',
                    url:'http://localhost:3003/empresas/' + result.insertId
                }  
            }
        }       
        return res.status(201).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error:error});                
    };
};

// altera empresa
exports.aleterarEmpresas  = async(req,res,next)=> {
    try {
        const result = await mysql.execute("SELECT * FROM empresas WHERE id = ?;",[req.body.id]);
        if (result.length == 0) {
            res.status(404).send({
                message: 'Não foi encontrado empresa'
            });
        }else{
            const query = 
                `UPDATE empresas
                    SET nome   = ?,
                        imagem = ?
                WHERE id = ?;`;
            await mysql.execute(query,
            [
            req.body.nome,
            req.file.path,
            req.body.id            
            ]);
            const response = {
                mensagem: 'empresa atualizado com secesso',
                empresaAtualizada: {
                    id: req.body.id,
                    nome: req.body.nome,
                    imagem:'http://localhost:3003/'+req.file.path,
                    request:{
                        tipo: 'GET',
                        descricao:'retorna as empresa com id',
                        url:'http://localhost:3003/empresas/' + req.body.id
                    }  
                }
            }       
            return res.status(202).send(response);
        };  
    } catch (error) {
        return res.status(500).send({ error:error});                        
    };
};

//deleta empresa
exports.deletaEmpresa = async(req,res,next)=> {
    try {
        const result = await mysql.execute("SELECT * FROM empresas WHERE id = ?;",[req.body.id]);
        if (result.length == 0) {
            res.status(404).send({
                message: 'Não foi encontrado empresa '
            });
        }else{
            const query = `DELETE FROM empresas WHERE id = ?;`;
            await mysql.execute(query,[req.body.id]);
            const response ={
                mensagem : 'empresa removida',
                request:{
                    tipo:'GET',
                    descricao: 'retorna empresas',
                    url:'http://localhost:3003/empresas',
                }
                
            }    
            return res.status(202).send(response);    
        }       
    } catch (error) {
        return res.status(500).send({ error:error});                        
    };
}
exports.loginEmpresa = async(req,res)=> {
    try {
        const query = `SELECT * FROM empresas WHERE cnpj = ?`;
        var results = await mysql.execute(query, [req.body.cnpj]);
        console.log(req);
        if (results.length < 1) {
            return res.status(401).send({ message: 'Falha na autenticação' })
        }
        if (bcrypt.compareSync(req.body.senha, results[0].senha)) {
            const token = jwt.sign({
                cnpj: results[0].cnpj
            },
            "segredo",
            {
                expiresIn: "1h"
            });
            return res.status(200).send({
                message: 'Autenticado com sucesso',
                id:results[0].id,
                token: token,
            });
        };
        return res.status(401).send({ message: 'Falha na autenticação' })
    } catch (error) {
        return res.status(500).send({ message: 'Falha na autenticação' });
    };
};
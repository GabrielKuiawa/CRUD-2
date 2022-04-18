const mysql = require("../msql");

//retorna empresas
exports.getEmpresas = async(req,res,next)=> {
    try {
        const result = await mysql.execute("SELECT * FROM empresas;")
        const response = {
            id: result.lenght,
            empresas: result.map(emp => {
                return{
                    id: emp.id,
                    empresas: emp.nome, 
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
        const response = {
            empresaCriada: {
                id: result[0].id,
                empresas: result[0].empresas,
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
exports.getInsertEmpresas = async(req,res,next)=> {
    try {
        const query = 'INSERT INTO empresas (nome) VALUES (?)';
        const result = mysql.execute(query,[req.body.nome]);   
        const response = {
            mensagem: 'empresa inserida com secesso',
            empresaCriada: {
                id: result.insertID,
                nome: req.body.nome,
                request:{
                    tipo: 'GET',
                    descricao:'retorna todos as empresas',
                    url:'http://localhost:3003/empresas' 
                }  
            }
        }       
        return res.status(201).send(response);

    } catch (error) {
        return res.status(500).send({ error:error});                
    };
};

// altera empresa
exports.getAleterarEmpresas  = async(req,res,next)=> {
    try {
        const result = await mysql.execute("SELECT * FROM empresas WHERE id = ?;",[req.body.id]);
        if (result.length == 0) {
            res.status(404).send({
                message: 'Não foi encontrado empresa com este ID'
            });
        }else{
            const query = 
                `UPDATE empresas
                    SET nome = ?
                WHERE id = ?;`;
            await mysql.execute(query,
            [
            req.body.nome,
            req.body.id            
            ]);
            const response = {
                mensagem: 'empresa atualizado com secesso',
                empresaAtualizada: {
                id: req.body.id,
                nome: req.body.nome,
                request:{
                    tipo: 'GET',
                    descricao:'retorna todas as empresas',
                    url:'http://localhost:3003/empresas/'
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
exports.getDeletaEmpresa = async(req,res,next)=> {
    try {
        const result = await mysql.execute("SELECT * FROM empresas WHERE id = ?;",[req.body.id]);
        if (result.length == 0) {
            res.status(404).send({
                message: 'Não foi encontrado empresa com este ID'
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

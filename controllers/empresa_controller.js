const mysql = require("../msql").pool;

//retorna empresas
exports.getEmpresas = (req,res,next)=> {
    mysql.getConnection((error,conn)=> {
        if(error){return res.status(500).send({ error:error})}
        conn.query(
            'SELECT * FROM empresas',
            (error,result)=>{
                if(error){return res.status(500).send({ error:error})}
                conn.release;
                const response = {
                    id: result.lenght,
                    empresas: result.map(prod => {
                        return{
                            id: prod.id,
                            empresas: prod.nome, 
                            request:{
                                tipo: 'GET',
                                descricao:'retorna id da empresa',
                                url:'http://localhost:3003/empresas/'+ prod.id
                            }                     
                        }
                    })
                }
                return res.status(200).send(response);    
            }
        )        
    });
}

//retorna empresa com id
exports.getEmpresasID = (req,res,next)=> {
    mysql.getConnection((error,conn)=>{
        if(error){return res.status(500).send({ error:error})}        
        conn.query(
            'SELECT * FROM empresas WHERE id = ?;',[req.params.id],
            (error,result)=>{
                conn.release;
                if(error){return res.status(500).send({ error:error})}
                if (result.length == 0) {
                    return res.status(404).send({
                        message: 'Não foi encontrado empresa com este ID'
                    })
                }
                const response = {
                    produtoCriado: {
                        id: result[0].id,
                        empresas: result[0].empresas,
                        request:{
                            tipo: 'GET',
                            descricao:'retorna um todas empresas',
                            url:'http://localhost:3003/empresas'
                        }  
                    }
                }
                return res.status(201).send(response)    
            }
        );        
    }    
)};

//insere uma empresa
exports.getInsertEmpresas = (req,res,next)=> {
    mysql.getConnection((error,conn)=> {
        if(error){return res.status(500).send({ error:error})}        
        conn.query(
            'INSERT INTO empresas (nome) VALUES (?)',[req.body.nome],
            (error,result)=> {
                conn.release();
                if(error){return res.status(500).send({ error:error})}   
                const response = {
                    mensagem: 'empresa inserida com secesso',
                    produtoCriado: {
                        id: result.id,
                        nome: req.body.nome,
                        request:{
                            tipo: 'GET',
                            descricao:'retorna todos as empresas',
                            url:'http://localhost:3003/empresas'
                        }  
                    }
                }       
                return res.status(201).send(response);
            }
        );        
    });
};

// altera empresa
exports.getAleterarEmpresas  = (req,res,next)=> {
    mysql.getConnection((error,conn)=> {
        conn.query(
            `UPDATE empresas
                SET nome = ?
              WHERE id = ?`,
             [
                 req.body.nome,
                 req.body.id
             ],
             (error)=> {
                conn.release();
                if(error){return res.status(500).send({ error:error})}
                const response = {
                    mensagem: 'empresa atualizado com secesso',
                    produtoAtualizado: {
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
            }
        )
    });
};

const mysql = require("../msql").pool;

//retorna todos os produtos da tabela empresas
exports.getEmpresas = (req,res,next)=> {
    mysql.getConnection((error,conn)=> {
        if(error){return res.status(500).send({ error:error})}
        conn.query(
            'SELECT * FROM empresas',
            (error,result)=>{
                if(error){return res.status(500).send({ error:error})}
                const response = {
                    id: result.lenght,
                    empresas: result.map(prod => {
                        return{
                            id: prod.id,
                            empresas: prod.nome, 
                            request:{
                                tipo: 'GET',
                                descricao:'retorna id do produto',
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
                if(error){return res.status(500).send({ error:error})}
                if (result.length == 0) {
                    return res.status(404).send({
                        message: 'Não foi encontrado produto com este ID'
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
        )        
    }    
)};
const mysql = require("../msql").pool;


//retorna vagas 
exports.getVagas = (req,res,next) =>{
    mysql.getConnection((error,conn)=> {
        if(error){return res.status(500).send({ error:error})};
        conn.query(
            'SELECT * FROM vagas_emprego',
            (error,result)=>{
                if(error){return res.status(500).send({ error:error})}
                conn.release;
                const response = {
                    id: result.lenght,
                    vagas: result.map(vagas => {
                        return{
                            id: vagas.id,
                            titulo: vagas.titulo,
                            salario:vagas.salario,
                            descricao:vagas.descricao,
                            empresa_id:vagas.empresa_id,
                            request:{
                                tipo: 'GET',
                                descricao:'retorna id da vaga',
                                url:'http://localhost:3003/vagas/'+ vagas.id
                            }                     
                        }
                    })
                }
                return res.status(200).send(response);    
            }
        )        
    });
};
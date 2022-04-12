const mysql = require("../msql").pool;

exports.getPodutos = (req,res,next)=>{
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
                            empresas: prod.nome,                      
                        }
                    })
                }
                return res.status(200).send(response);    
            }
        )        
    });
}
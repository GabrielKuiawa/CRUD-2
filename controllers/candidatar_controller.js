const mysql = require("../msql");

//posta candidatura
//validar vagas,usuario,candidatura
exports.postaCandidatura = async(req,res)=> {
    try {
        const queryVagas = 'SELECT * FROM vagas_emprego WHERE id = ?;'
        const queryUsuario = 'SELECT * FROM usuarios WHERE email = ?;'
        const queryCandidatura = 'SELECT * FROM candidatar WHERE id_vaga = ?;'
        console.log(queryVagas.length)
        if(queryVagas.length == 0){
            return res.status(404).send({mensagem:"não existe esta vaga"})
        };
        if(queryUsuario.length == 0){
            return res.status(404).send({mensagem:"não existe esta empresa"})
        };
        if(queryCandidatura.length > 0){
            return res.status(404).send({mensagem:"já existe esta candidatura"})
        };
        const query = 'INSERT INTO candidatar (id_vaga,id_usuario) VALUES (?,?)';
        await mysql.execute(query,[req.body.id_vaga,req.body.id_usuario]);   
        const response = {
            mensagem: 'candidatura validada com secesso',
            candidatura: {
                tipo: 'POST',
                descricao:'se candidatar a mais vagas ',
                url:'http://localhost:3003/candidatar/' 
            }
        }       
        return res.status(201).send(response);
    } catch (error) {
        return res.status(500).send({ error:error});                        
    }
};
exports.getCandidaturasPorVagas = async(req,res)=> {
    try {
        const result = await mysql.execute("SELECT * FROM candidatar WHERE id_vaga = ?;",[req.params.id_vaga]);
        return res.status(200).send(result);        
    } catch (error) {
        return res.status(500).send({ error:error}); 
    }
};
exports.getCandidaturasPorUsuario = async(req,res)=> {
    try {
        const result = await mysql.execute("SELECT * FROM candidatar WHERE id_usuario = ?;",[req.body.id_usuario]);
        return res.status(200).send(result);        
    } catch (error) {
        return res.status(500).send({ error:error}); 
    }
};
exports.deletaCadidatura = async(req,res)=> {
    try {
        const result = await mysql.execute("SELECT * FROM candidatar WHERE id_vaga = ?;",[req.body.id_vaga]);
        if (result.length == 0) {
            res.status(404).send({
                message: 'Não foi encontrado'
            });
        }else{
            const query = `DELETE FROM candidatar WHERE id_vaga = ? and id_usuario=?;`;
            await mysql.execute(query,[req.body.id_vaga,req.body.id_usuario]);
            const response ={
                mensagem : 'candidatra removida'
            }    
            return res.status(202).send(response);    
        }       
    } catch (error) {
        return res.status(500).send({ error:error});                        
    };
};
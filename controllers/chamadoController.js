const chamadoService = require('../services/chamadoService');

function criar(req, res){
    try{
        console.log("1 - CONTROLLER recebeu", req.body);
        const chamado = chamadoService.criar(req.body)
        res.status(201).json(chamado);
    }catch(erro){
        res.status(404).json(error.message)
    }

}

module.exports = { criar } 
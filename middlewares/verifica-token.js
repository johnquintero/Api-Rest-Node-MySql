const jwt = require('jsonwebtoken');
const config = require('../config/config.json').development;
const express =  require('express');

//Validacion del token
const verificaToken = express.Router();

verificaToken.use((req, res, next) => {
    const token = req.headers['access-token'];
    if(token){
        jwt.verify(token,config.llave,(err, decoded)=>{
            if(err){
                return res.json({ message : 'Invalid Token'});
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        return res.send({ message : 'Token no enviada'});
    };
})

module.exports = {
    verificaToken : verificaToken
}
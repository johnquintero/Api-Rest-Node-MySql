const router = require('express').Router();
const config = require('../config/config.json').development;
const usuarioRoute = require('../usuario/usuario');
const usuarioController =  require('../usuario/usuario.controller');
const middleware = require('../middlewares/verifica-token');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//routes features
router.use('/usuario',middleware.verificaToken,usuarioRoute);



// management all request to /api
router.get('/', (req,res)=>{
    res.send('hola mundo');
});

//VALIDACION DE USUARIO Y GENERACION DE TOKEN
router.get('/login', async (req, res)=>{
    await usuarioController.login(req.body.STRUSUARIO)
        .then(userdb => {
            if (bcrypt.compareSync(req.body.STRPASSWORD,userdb.STRPASSWORD)){
                const payload = {
                    check : true,
                    user : userdb.STRUSUARIO
                }
                const token = jwt.sign(payload, config.llave,{ expiresIn : '5m'});
                return res.json({
                    mensaje: 'Autenticación correcta',
                    token: token
                });
            }
            res.send('Informacion incorrecta');
        })
        .catch(err =>{
            res.status(409).send({ message: 'Se ha presentado un error', error : err });
        });
});


module.exports = router;
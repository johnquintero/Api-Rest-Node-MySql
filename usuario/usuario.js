const usuarioController = require('./usuario.controller');
const router = require('express').Router();
const sjs = require('sequelize-json-schema');
const db = require('../db/index');
const Ajv = require('ajv');
const Usuario = db.Usuario;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json').development;



//OBTENER TODOS LOS USUARIOS
router.get('/', usuarioController.index);

//CREAR UN NUEVO USUARIO
router.post('/', async (req, res)=>{
    //Utilizo sequelize-json-schema para poder validar lo que llega en el req
    //defino en opcions los campos que no necesito validar del schema
    const options = {exclude: ['IDUSUARIO', 'INTNUMINTENTOS', 'BITACTIVO','INTTIPOUSUARIO']};
    //Genero el schema para la validacion
    const UserSchema = sjs.getModelSchema(Usuario, options);
    //console.log(UserSchema);
    //valida el json enviado con el schema, sin tener encuenta los formatos
    var ajv = new Ajv({validateSchema:true, format:false});

    var valid = ajv.validate(UserSchema,req.body);
    if(!valid) {
        console.log(ajv.errors);
        res.status(400).send({ params : ajv.errors[0].params, message : ajv.errors[0].message });
    }

    var nuevoUsuario = Usuario.build({
        STRUSUARIO : req.body.STRUSUARIO,
        STRPASSWORD : bcrypt.hashSync(req.body.STRPASSWORD,10),
        INTNUMINTENTOS : 1,
        BITACTIVO : 1,
        INTTIPOUSUARIO : 10
    });

    await usuarioController.newUser(nuevoUsuario)
        .then(res =>{
            res.status(201);
        })
        .catch(err => {
            console.log(`Error newUser: ${err}`);
            res.status(409).send({ message: 'Se ha presentado un error', error: err.errors[0].message });
        });
    //res.status(200).send('ok');
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
                res.json({
                    mensaje: 'Autenticación correcta',
                    token: token
                });
            }
            res.send('Informacion incorrecta');
        })
        .catch(err =>{
            res.status(409).send({ message: 'Se ha presentado un error' });
        });
});



module.exports = router;
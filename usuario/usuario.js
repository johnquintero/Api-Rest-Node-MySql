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

router.get('/:userid', usuarioController.fndUser);

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
        // console.log(ajv.errors);
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
        .then( () =>{
            res.status(201).json({ status : 'success', message : 'User created'});
        })
        .catch(err => {
            // console.log(`Error newUser: ${err}`);
            // if (err.errors.length >  0) {
                return res.status(409).send({ message: 'Se ha presentado un error', error: err.errors[0].message });
            // }
            // return res.status(409).send({ message: 'Se ha presentado un error', error: err });

        });
    //res.status(200).send('ok');
});

router.delete('/:user', async (req, res)=>{
    await usuarioController.delUser(req.params.user)
        .then(data => {
            if (data === 0) {
                return res.status(200).send({ status : 'success', message : 'User not exist'});
            }
            res.status(200).send({ status : 'success', message : 'User deleted'});
        })
        .catch(err => {
            console.log('entro al error');
            res.status(500).send(err);
        })
});

router.put('/:userid', async (req, res) =>{
    await usuarioController.updUser(req.body,req.params.userid)
        .then(data => {
            console.log(data);
            res.status(200).send({ status : 'success', message : 'User updated'});
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
});


router.patch('/:userid', async (req, res) =>{
    await usuarioController.updUser2(req.body,req.params.userid)
        .then(data => {
            console.log(data);
            res.status(200).send({ status : 'success', message : 'User updated'});
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
});





module.exports = router;
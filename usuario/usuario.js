const usuarioController = require('./usuario.controller');
const router = require('express').Router();
const sjs = require('sequelize-json-schema');
const db = require('../db/index');
const Ajv = require('ajv');
const Usuario = db.Usuario;



router.get('/', usuarioController.index);

router.post('/', (req, res)=>{
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
        STRPASSWORD : req.body.STRPASSWORD,
        INTNUMINTENTOS : 1,
        BITACTIVO : 1,
        INTTIPOUSUARIO : 10
    });

    usuarioController.newUser(nuevoUsuario)
        .then(res =>{
            res.status(201);
        })
        .catch(err => {
            console.log(`Error newUser: ${err}`);
            res.status(500).send('Se ha presentado un error');
        });
    //res.status(200).send('ok');
})

module.exports = router;
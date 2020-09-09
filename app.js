const express = require('express');
const bodyParser = require('body-parser');
const ROUTER_INDEX = require('./routes/index');
const helmet = require('helmet'); 
const config = require('./config/config.json').development;
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

//MIDDLEWARES
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Helmet ayuda a proteger la aplicación de algunas vulnerabilidades web conocidas mediante el establecimiento correcto de cabeceras HTTP.
app.use(helmet());


//Autenticacion y generacion de token
// app.post('/autenticar', (req, res) => {
//     if(req.body.usuario === "primo" && req.body.contrasena === "primoapi") {
//         const payload = {
//             check:  true,
//             user: req.body.usuario
//         };
//         const token = jwt.sign(payload, app.get('llave'), {
//             //expiresIn: '20s'
//         });
//         res.json({
//             mensaje: 'Autenticación correcta',
//             token: token
//         });
//     } else {
//         res.json({ mensaje: "Usuario o contraseña incorrectos"})
//     }
// })

//Validacion del token
//const verificaToken = express.Router();

// verificaToken.use((req, res,next)=>{
//     const token = req.headers['access-token'];
//     if(token){
//         jwt.verify(token,app.get('llave'),(err, decoded)=>{
//             if(err){
//                 return res.json({ message : 'Invalid Token'});
//             }
//             else {
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//     }
//     else {
//         res.send({ message : 'Token no enviada'});
//     }
// });


//Routes
app.use('/api', ROUTER_INDEX);


module.exports =  app;
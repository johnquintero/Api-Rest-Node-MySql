const router = require('express').Router();
const config = require('../config/config.json')
const usuarioRoute = require('../usuario/usuario');

//routes features
router.use('/usuario',usuarioRoute);



// management all request to /api
router.get('/', (req,res)=>{
    res.send('hola mundo');
});



module.exports = router;
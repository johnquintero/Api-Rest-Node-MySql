const db = require('../db/index');
const Usuario = db.Usuario;
const Op = db.SEQUELIZE.Op;


const Index = async (req, res) => {
    // const users = 'Users list not happends';
    // res.send(users);
    await Usuario.findAll()
        .then(data =>{
            res.json(data);
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || 'Ocurrio un error'
            });
        });
}

const NewUser = async (newUser) =>{
    try {
        //console.log(newUser instanceof Usuario);
        await newUser.save();
        return;
    } catch (error) {
       throw error;
    }
        
}

module.exports = {
    index : Index,
    newUser :NewUser
}
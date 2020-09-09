const db = require('../db/index');
const Usuario = db.Usuario;
const Op = db.SEQUELIZE.Op;
const bcrypt = require('bcryptjs');


const Index = async (req, res) => {
    // const users = 'Users list not happends';
    // res.send(users);
    await Usuario.findAll()
        .then(data =>{
            return res.json(data);
        })
        .catch(err =>{
            return res.status(500).send({
                message : err.message || 'Ocurrio un error'
            });
        });
}

const findUser = async (req, res) => {
    await Usuario.findOne({where :{IDUSUARIO : req.params.userid}})
        .then(data =>{
            return res.json(data);
        })
        .catch(err =>{
            return res.status(500).send({
                message : err.message || 'Ocurrio un error'
            });
        });
}

const NewUser = async (newUser, res) =>{
    try {
        //console.log(newUser instanceof Usuario);
        res = await newUser.save();
        return res;
    } catch (error) {
       throw error;
    }
        
}

const UpdateUser = async (userupd, userid) => {
    try {
        return res = await Usuario.update(userupd ,{
            where :{ IDUSUARIO : userid }
        });
    } catch (error) {
        throw error;
    }
}

const UpdateUser2 = async (userupd, userid) => {
    try {
        await Usuario.update({ 
                                INTNUMINTENTOS : userupd.INTNUMINTENTOS, 
                                BITACTIVO : userupd.BITACTIVO 
                            },
                            { where : { IDUSUARIO : userid }})
                            .then(updatedUser => {
                                return updatedUser;
                            });
    } catch (error) {
        throw error;
    }
}

const DeleteUser = async (user,res) => {
    try {
        res = await Usuario.destroy({
            where :{ STRUSUARIO : user}
        });
        return res;
    } catch (error) {
        throw error;
    }
}

const Login = async(user)=>{
    try {
        const userReg = await Usuario.findOne({
            where:{ STRUSUARIO : user }
        });
        if (userReg) {
            return userReg;
        }
        throw new error('NO existe');
    } catch (error) {
        throw error;
    }
}

module.exports = {
    index : Index,
    newUser :NewUser,
    login : Login,
    delUser : DeleteUser,
    updUser : UpdateUser,
    updUser2 : UpdateUser2,
    fndUser : findUser
}
const auth = require("../configs/compare");
const bc = require("../configs/crypt");

const Users = require("../models/Users");

const AlterUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const body = req.body;
        const filter = {_id};
        const data = {"username": body.username}
        const update = {new: true}
        const users = await Users.findByIdAndUpdate(filter, data, update).exec();
        return res.status(200).json({users});
    } catch (error) {
        console.log(error);
    }
}

const Login = async (req, res) => {
    try{

        const body = req.body;
        const users = await Users.findOne({'username':body.username}).exec();
        return await auth.Comparar(body.password, users.password);

    } catch(error){
        console.log(error);
    }
};

const CreateUser = async (req, res) => {
    try{
      const body = req.body;
      const password =await bc.Crypt(req.body.password);
      console.log(password);
      const users = await Users.create({ email: body.email, displayName:body.displayName, username: body.username, name: body.name, password: password, phonenumber: body.phonenumber});
      return res.status(200).json({users});
    } catch(error){
        console.log(error);
    }
}

const DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const users = await Users.remove({'_id':id}).exec();
        return res.status(200).json({users});
    } catch (error) {
        console.log(error);
    }
}

const FindUser = async (req, res) => {
    try {
        const username = req.params.username;
        //ModelObj.findById(IdValue).exec(callback);
        const users = await Users.findOne({'username':username}).exec();
        return res.status(200).json({users});
    } catch (error) {
        console.log(error);
    }
}

const UsersAll = async (req, res) => {
    try {
        const users = await Users.find({}).exec()
        res.status(200).json({users});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {AlterUser, Login, CreateUser, DeleteUser, FindUser, UsersAll}
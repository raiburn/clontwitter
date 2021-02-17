const {Schema, SchemaType, model} = require('mongoose');

const usuarioSchema = new Schema({
    email:{
        type: String,
        unique: true,
        trim: true
    },
    displayName:{
        type: String,
        unique: true,
        trim: true
    },
    username:{
        type: String,
        unique: true,
        trim: true,
    },
    name:{
        type: String,
        unique: false,
        trim: true
    },
    password:{
        type: String,
        required: true,
        unique: false,
        trim: false
    },
    phonenumber:{
        type: String,
        unique:false
    }
});

const Users = model('Users', usuarioSchema);
module.exports = Users;
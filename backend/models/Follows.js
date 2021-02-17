const {Schema, model, Mongoose} = require('mongoose');

const followersSchema = new Schema({
    followers:{
        type: Schema.ObjectId,
        ref:"Users"
    },
    following:{
        type:Schema.ObjectId,
        ref:'Users'
    }
});

const Followers = model('Followers', followersSchema);
module.exports = Followers;
const {Schema, model, Mongoose} = require('mongoose');

const tweetSchema = new Schema({
    message:{
        type: String,
        trim:true
    },
    created_at:{
        type: Date,
        trim:true
    },
    users:{
        type: Schema.ObjectId,
        ref:'Users'
    }
});

const Tweets = model('Tweets', tweetSchema);
module.exports = Tweets;
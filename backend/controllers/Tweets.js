const Tweets = require("../models/Tweets");

const CreateTweet = async (req, res) => {
    try{
      const body = req.body;
      const tweet = await Tweets.create({ message: body.message, created_at: body.created_at, users: body.users});
      return res.status(200).json({tweet});
    } catch(error){
        console.log(error);
    }
}

const TweetsAll = async (req, res) => {
    try {
        const tweets = await Tweets.find({}).populate('users').sort({created_at:'desc'}).exec();
        res.status(200).json({tweets});
    } catch (error) {
        console.log(error);
    }
}

const DeleteTweet = async (req, res) => {
    try {
        const id = req.params.id;
        const tweets = await Tweets.remove({'_id':id}).exec();
        return res.status(200).json({tweets});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {CreateTweet, TweetsAll, DeleteTweet}
const { Router } = require('express');
const deleteTweet = Router();
const deleteTweetController = require('../../controllers/Tweets');

deleteTweet.delete('/tweets/:id', deleteTweetController.DeleteTweet);

module.exports = deleteTweet;
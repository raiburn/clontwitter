const { Router } = require('express');
const createTweet = Router();
const createTweetController = require('../../controllers/Tweets');

createTweet.post('/tweets', createTweetController.CreateTweet);

module.exports = createTweet;
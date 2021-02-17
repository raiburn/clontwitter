const { Router } = require('express');
const tweets = Router();
const tweetsController = require('../../controllers/Tweets');

tweets.get('/tweets', tweetsController.TweetsAll);

module.exports = tweets;
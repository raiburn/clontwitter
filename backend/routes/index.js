const auth = require('./User/Auth');
const createuser = require('./User/CreateUser');
const users = require('./User/Users');
const finduser = require('./User/FindUser');
const deleteuser = require('./User/DeleteUser');
const alteruser = require('./User/AlterUser');
const createtweet = require('./Tweet/CreateTweet');
const tweets = require('./Tweet/Tweets');
const deletetweet = require('./Tweet/DeleteTweet');

module.exports = [auth, createuser, users, finduser, deleteuser, alteruser, createtweet, tweets, deletetweet];
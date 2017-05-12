var mongoose = require('mongoose');
var db = require('../dao/db');

var userSchema = new mongoose.Schema({
    weixinID: String,
    friends: Array,
    registerTime: String
});

module.exports = db.model('user', userSchema);
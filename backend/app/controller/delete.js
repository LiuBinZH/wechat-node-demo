/**
 * [express description]
 * @type {[type]}
 */
var express = require('express');
var userModel = require('../model/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var wechatID = req.query.wechatID;
    var username = req.query.username;
    if (!wechatID) {
        res.json({code: 201, msg: '缺少参数wechatID'});
        return;
    }
    if (!username) {
        res.json({code: 201, msg: '缺少参数username'});
        return;
    }
    var firObj = {username: username};
    userModel.update({wechatID: wechatID}, {'$pull':{'friends': firObj} })
        .then((user) => {
            console.log('success =>' + JSON.stringify(user));
            res.json({code: 200, data: user});
    });
    // res.render('index', { title: 'delete' });
});

module.exports = router;
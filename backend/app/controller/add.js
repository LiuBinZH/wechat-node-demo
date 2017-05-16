var express = require('express');
var userModel = require('../model/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var weixinID = req.query.weixinID;
    var username = req.query.username;
    var password = req.query.password;
    var nickname = req.query.nickname;

    if (!weixinID) {
        res.json({code: 201, msg: '缺少参数weixinID'});
        return;
    }
    if (!username) {
        res.json({code: 201, msg: '缺少参数username'});
        return;
    }
    if (!password) {
        res.json({code: 201, msg: '缺少参数password'});
        return;
    }
    if (!nickname) {
        res.json({code: 201, msg: '缺少参数nickname'});
        return;
    }
    // res.send('respond with a resource');

    getUser(weixinID, user => {
        var firObj = {username: username, password: password, nickname: nickname};

        //判断用户是否存在
        if (!user) {
            var userObj = {weixinID: weixinID, friends: []};
            userObj.friends.push(firObj);
            userModel.create(userObj)
                .then((user) => {
                    console.log('success => ' + JSON.stringify(user));
            });
        } else {
            userModel.update({weixinID: weixinID}, {'$push':{'friends': firObj} })
                .then((user) => {
                    console.log('success => ' + JSON.stringify(user));
                    res.json({code: 200, data: user});
                });
        }
    });

    //获取用户信息
    function getUser (weixinID, callback) {
        userModel.findOne({weixinID: weixinID})
            .then((user) => {
                console.log('find =>' + JSON.stringify(user));
                callback(user);
        });
    }
    // res.render('index', { title: 'add' });
});

module.exports = router;
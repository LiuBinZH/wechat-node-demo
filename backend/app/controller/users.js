var express = require('express');
var userModel = require('../model/user');
var router = express.Router();

/* GET users listing. */
//返回所有用户信息
router.get('/', function(req, res, next) {
    var weixinID = req.query.weixinID;
    if (!weixinID) {
        res.json({code: 201, msg: '缺少参数weixinID.'});
        return;
    }
    userModel.find({weixinID: weixinID})
        .then((user) => {
            console.log('success =>' + JSON.stringify(user));
            res.json({code: 201, data: user});
    });
});

module.exports = router;

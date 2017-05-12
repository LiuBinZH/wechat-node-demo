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
    if (!wechatID) {
        res.json({code: 201, msg: '缺少参数wechatID'});
        return;
    }
    userModel.findOne({wechatID: wechatID})
        .then((user) => {
            console.log('find =>' + JSON.stringify(user));
            res.json({code: 201, data: user});
    });
    // res.render('index', { title: 'search' });
});

module.exports = router;
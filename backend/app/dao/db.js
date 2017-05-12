var mongoose = require('mongoose');
mongoose.Promise = Promise;

//连接数据库 数据库名称是backend
var db = mongoose.createConnection('mongodb://localhost:27017/backend/');

db.on('error', (error) => console.log('数据库错误 => ' + error));
db.on('open', () => console.log('数据库连接...'));

module.exports = db;

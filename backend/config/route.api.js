/**
 * 接口 路由配置
 * @type {Object}
 */
module.exports = [{
    'api': '/',
    'route': './app/controller/index'
}, {
    'api': '/api/demo/user/list',
    'route': './app/controller/users'
}, {
    'api': '/api/demo/user/add',
    'route': './app/controller/add'
}, {
    'api': '/api/demo/user/delete',
    'route': './app/controller/delete'
}, {
    'api': '/api/demo/user/update',
    'route': './app/controller/update'
}, {
    'api': '/api/demo/user/search',
    'route': './app/controller/search'
}];
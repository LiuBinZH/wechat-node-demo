//index.js
//获取应用实例
var app = getApp()
var user_lis = '/api/demo/user/list'
var user_add = '/api/demo/user/add'
var user_sea = '/api/demo/user/search'
var user_upd = '/api/demo/user/update'
var user_del = '/api/demo/user/delete'

Page({
  data: {
    users: [],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    console.log('onLoad')
    var that = this
      //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    wx.showLoading({
      title: '请稍后~',
      mark: true
    });
    //获取用户list列表
    wx.request({
      url: user_lis,
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        wx.hideLoading();
        var data = res.data || [];
        that.setData({
          users: data
        })
      },
      fail: function(res) {
        console.log('error => ' + res.msg || res.error || '');
        wx.showToast({
          title: '网络不流畅，请稍后重试~',
          icon: 'loading',
          duration: 2000
        })
      }
    })
  },
  add: function () {
    console.log('add')

  },
  update: function () {

  },
  delete: function () {

  },
  submit: function () {

  }
})






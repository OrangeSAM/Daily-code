//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navList: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getNavList: function() {
    let that = this
    wx.request({
      url: 'http://www.hengyishun.cn/login/navlist',
      success(res) {
        if (res.statusCode === 200) {
          that.setData({
            navList: res.data
          })
        }
      }
    })
  },
  onLoad: function () {
    this.getNavList()
  },
})

//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    circleBag: [],
    navList: []
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  createCircleBag: function createCircleBag() {
    for (var t = 12, e = 360 / t, a = [], i = 0; i < t; i++) {
        a.push({
            transform: "translate(0, -50%) rotateZ(".concat(i * e, "deg)")
        });
    }
    this.setData({
        circleBag: a
    });
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
  getUserInfo(e){
    console.log(e)
  },
  onLoad: function () {
    this.getNavList()
    this.createCircleBag()
  },
})

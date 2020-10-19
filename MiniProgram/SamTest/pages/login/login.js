// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberFocus: false
  },

  phoneFocus: function (e) {
    this.setData({
      numberFocus: true
    })
  },
  phoneBlur: function (e) {
    this.setData({
      numberFocus: false
    })
  },
  login: function () {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(2)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(3)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(4)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(5)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(6)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(7)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log(8)
  }
})
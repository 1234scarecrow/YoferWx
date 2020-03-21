// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: [{
        src: "../../images/ES5801.jpg"
      },
      {
        src: "../../images/ES5802.jpg"
      },
      {
        src: "../../images/ES5803.jpg"
      },
      {
        src: "../../images/ES5804.jpg"
      }
    ],
    suits: [{
        title: "Lynk&Co 03",
        src: "../../images/lynk1.jpg"
      },
      {
        title: "Lexus ES新品",
        src: "../../images/ES5802.jpg"
      },
      {
        title: "领克03 '新衣'",
        src: "../../images/lynk3.jpg"
      },
      {
        title: "Camry",
        src: "../../images/swiper4.jpg"
      },
    ]
  },
  /**
   * 事件
   */
  toSuits: function() {
    wx.navigateTo({
      url: '../suits/suits', //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
      success: function() {}, //成功后的回调；
      fail: function() {}, //失败后的回调；
      complete: function() {} //结束后的回调(成功，失败都会执行)
    })
  },
  toCases:function(){
    wx.navigateTo({
      url: '../cases/cases'
    })
  },
  toDealer:function(){
    wx.navigateTo({
      url: '../dealer/dealer',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    
  }
})
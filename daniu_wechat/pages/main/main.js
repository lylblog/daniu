// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxNews:"",
    adList:'',
    adList1:""
  },

  /**
   * 下载公网文件
   */
  downString:function () {
    var that = this 
    wx.request({
      url: 'http://www.chinaweb5.cn/',
      success:function(res){
        console.log(res.data)
        that.setData({
          wxNews:res.data
        })
      }
    })
  },
  clientTest:function(){
    var that = this
    wx.request({
      url: 'http://127.0.0.1:65530/api/article',
      dataType:'json',
      method:'get',
      success:function(res){
        console.log(res.data)
        that.setData({
          adList:res.data
        })
      }
    })
  },
  clientTest1:function(){
    var that = this
    wx.request({
      url: 'http://127.0.0.1:65530/api/categorys',
      dataType:'json',
      method:'get',
      success:function(res){
        console.log(res.data)
        that.setData({
          adList1:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.clientTest()
    this.clientTest1()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
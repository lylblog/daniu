// http://www.manongjc.com/detail/51-fgnqcbzgleqgbfs.html   富文本解析插件
Page({
  data: {
    adList:'',
    bookData: '',
  },


  clientTest:function(){
    var that = this
    var id = that.options.id
    // console.log(id)   // 打印调试
    wx.request({
      url: 'http://localhost:65530/api/article/'+id+'/',
      data: {  'format': 'json' },
      dataType:'json',
      method:'get',
      success:function(res){
        // console.log(res.data.content)   // 打印调试
        that.setData({
          adList:res.data,
          // bookData:res.data.content
        })
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.clientTest()
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
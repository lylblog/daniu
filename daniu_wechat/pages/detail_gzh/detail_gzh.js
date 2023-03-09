// http://www.manongjc.com/detail/51-fgnqcbzgleqgbfs.html   富文本解析插件
import { LABEL } from "../../base.js";
Page({
  data: {
    adList:'',
    bookData: '',
    label: LABEL,
    page: 4,
    img: 'https://api.ixiaowai.cn/api/api.php',
  },

// 1、请求access_token
// 2、根据access_token和article_id获取正文
clientTest:function(){
  var that = this
  wx.request({
    url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx05f90217d2733da4&secret=e8af6ae692b260edccbb697bd8993fb4',
    data: {
    },
    header: {
      'content-type': 'application/json' // 默认值
    //  "Content-Type": "application/x-www-form-urlencoded" //用于post
    },
    method: 'GET',
    success: function (res) {
      console.log("res", res.data.access_token);
      that.setData({
        ACCESS_TOKEN:res.data.access_token
      })
      var access_token = that.data.ACCESS_TOKEN
      var id = that.options.id
      console.log(id)   // 打印调试
      wx.request({
        url: 'https://api.weixin.qq.com/cgi-bin/freepublish/getarticle?access_token=' + access_token,
        data: {  'article_id': id },
        dataType:'json',
        method:'post',
        success:function(res){
          // console.log(res.data.content)   // 打印调试
          that.setData({
            adList:res.data,
            // bookData:res.data.content
          })
        }
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
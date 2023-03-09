import { LABEL } from "../../base.js";
Page({

  /** 页面的初始数据 **/
	data:{
    adList:'',
    label: LABEL,
    page: 0,
    img: 'https://api.ixiaowai.cn/api/api.php',
    imgUrls: [
      'http://png.hkiii.cn/blog/1.png',
      'http://png.hkiii.cn/blog/2.png',
      'http://png.hkiii.cn/blog/3.png'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动播放
    interval: 3000, //停留时间间隔
    duration: 1000, //播放时长
    previousMargin: '50px', //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    nextMargin: '50px', //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    circular: true, //是否采用衔接滑动
    swiperHeight: 180,
    currentSwiperIndex: 0, //swiper当前索引,
    wordsData: [],
    backTopValue: false,
    nickname:'',
    excerpt: '',
    inter: '',  //定时器参数
    ACCESS_TOKEN: '',  //公众号  ACCESS_TOKEN
  },

    /**
   * 启动定时器
   */
  startInter: function(){
    var that = this;
    that.data.inter= setInterval(
      function () {
        // TODO 你需要无限循环执行的任务
        console.log('setInterval 启动定时器');
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
            access_token:res.data.access_token
          },
         })
      }, 5400000);
  },
  /**
   * 结束定时器
   */
  endInter: function(){
    var that = this;
    clearInterval(that.data.inter)
    console.log('setInterval 结束定时器')
  },

 // 1、请求access_token
//  2、根据access_token获取发布文章列表
 get_access_token:function(){
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
      console.log("that.data.ACCESS_TOKEN", that.data.ACCESS_TOKEN);
      var access_token = that.data.ACCESS_TOKEN
      // console.log("access_token", access_token);
      wx.request({
        url: "https://api.weixin.qq.com/cgi-bin/freepublish/batchget?access_token=" + access_token,
        data: {
            "offset":0,
            "count":20,
            "no_content":0
        },
        dataType:'json',
        method:'post',
        success:function(res){
          that.setData({
            adList:res.data
          })
        }
      })
    }
   })
},

  // 请求文章数据
  clientArticle:function(){
    var that = this
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/freepublish/batchget?access_token=66_Yfc8fF1k-m3Ga8-PG7htMztFjQAJ0MHV-lqTqZpESjg00PeP_rxbPtKYVOehrnVpizQqovbTVkm5pOoeFd8XdPKDU_Nn2DmBMpW_7PnLIVAtSi8UwNQZrgbp5e8WAXhAEAKOL',
      data: {
          "offset":0,
          "count":20,
          "no_content":0
      },
      dataType:'json',
      method:'post',
      success:function(res){
        that.setData({
          adList:res.data
        })
      }
    })
  },
  // 详情页跳转
  toDetailPage(e) {
    // console.log(e.currentTarget.dataset.bid)
    const bid = e.currentTarget.dataset.bid
    wx.navigateTo({
      url: `../detail_gzh/detail_gzh?id=${bid}`,
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.get_access_token()
    // this.clientArticle()
    // this.startInter()
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
    // this.endInter()
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
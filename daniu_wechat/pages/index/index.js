
Page({

  /**
   * 页面的初始数据
   */

	data:{
    adList:'',
    page: 0,
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
    currentSwiperIndex: 0, //swiper当前索引,
    wordsData: [],
    backTopValue: false,
    nickname:'',
    excerpt: '',
	},
  toDetailPage(e) {
    // console.log(e.currentTarget.dataset.bid)
    const bid = e.currentTarget.dataset.bid
    wx.navigateTo({
      url: `../main/main`,
    })
  },
  goSortLogs: function (event) {
    console.log(event)
    var sid = event.currentTarget.dataset.sid;
    var sortname = event.currentTarget.dataset.sortname;
    wx.navigateTo({
      url: '../sorts-log/blog?sid=' + sid + '&sortname=' + sortname
    });
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
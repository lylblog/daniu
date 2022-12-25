// resume.js
import util from '../../utils/util.js'
let app = getApp();        
var videoAd = null;
Page({
1: function () {
  qq.navigateToMiniProgram({
  appId: '1109684198',
  extraData: {
    foo: 'bar'
  },
  envVersion: 'release',
  success(res) {
    // 打开成功
  }
})
},
2: function () {
  qq.navigateToMiniProgram({
  appId: '1109607307',
  extraData: {
    foo: 'bar'
  },
  envVersion: 'release',
  success(res) {
    // 打开成功
  }
})
},
  onShareAppMessage: function (res) {
    return {
      title: '',
      imageUrl: 'https://api.ixiaowai.cn/api/api.php', // 图片 URL
      path: ''
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    setting: {}
  },
  //  onReady: function () {
  //   app.getSetting(setting => {
  //     this.setData({
  //       setting: setting
  //     })
  //   })
  // },
})


// qq.getUserInfo({
//   success(res) {
//     const userInfo = res.userInfo
//     const nickName = userInfo.nickName
//     const avatarUrl = userInfo.avatarUrl
//     const gender = userInfo.gender // 性别 0：未知、1：男、2：女
//     const province = userInfo.province
//     const city = userInfo.city
//     const country = userInfo.country
//   }
// })

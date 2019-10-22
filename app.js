//app.js
App({
  onLaunch: function () {
      let that = this
    wx.getSystemInfo({
        success: function(res) {
            let str = res.system.toLowerCase()
            console.log(str, str.indexOf('ios'))
            if (str.indexOf('ios')>-1){
                that.globalData.isIOS = true
            }
        },
    })
  },
  globalData: {
    userInfo: null,
    isIOS: false
  }
})
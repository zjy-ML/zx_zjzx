const gFunc = {
    globalFail(err) {
        console.error('错误原因', err);
    },
    getDetailData(val) {
        return val.detail
    },
    getDataset(val) {
        return val.currentTarget.dataset;
    },
    showToast(msg) {
         
        wx.showToast({
            title: msg,
            icon: 'none',
            duration: 1500
        })
    },
    isIdentify(status) {
        let sta = status || wx.$store.state.user.wechat_user.status
        if (sta != 'DONE' && sta != 'FRESH') {
            console.log('status', sta)
            wx.showTabBarRedDot({
                index: 3
            })
            return false
        } else {
            wx.hideTabBarRedDot({
                index: 3
            })
            return true
        }
    },
}

export {gFunc}
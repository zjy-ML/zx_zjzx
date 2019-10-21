// 网络情况处理
const network = function() {
    return new Promise((resolve, reject) => {
        wx.getNetworkType({
            success: (res) => {
                if (res.networkType == "none") {
                    wx.navigateTo({
                        url: '/pages/errNetwork/index',
                    })
                    reject();
                } else {
                    resolve()
                }
            }
        })

        // 监听网络情况
        wx.onNetworkStatusChange((res) => {
            if (!res.isConnected) {
                wx.navigateTo({
                    url: '/pages/errNetwork/index',
                })
            }
        });
    })
}

module.exports = {
    network
}
// pages/cart/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cart: [{
            url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1328874460,2431333110&fm=26&gp=0.jpg',
            title: '艾医生水乳精华小瓶装艾医生水乳精华小瓶装',
            store: 533,
            sale: 2345,
            price: 345,
            checked: false
        }, {
            url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1328874460,2431333110&fm=26&gp=0.jpg',
            title: '艾医生水乳精华小瓶装艾医生水乳精华小瓶装',
            store: 533,
            sale: 2345,
            price: 345,
            checked: false
        }, {
            url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1328874460,2431333110&fm=26&gp=0.jpg',
            title: '艾医生水乳精华小瓶装艾医生水乳精华小瓶装',
            store: 533,
            sale: 2345,
            price: 345,
            checked: false
        }, {
            url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1328874460,2431333110&fm=26&gp=0.jpg',
            title: '艾医生水乳精华小瓶装艾医生水乳精华小瓶装',
            store: 533,
            sale: 2345,
            price: 345,
            checked: false
        }, {
            url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1328874460,2431333110&fm=26&gp=0.jpg',
            title: '艾医生水乳精华小瓶装艾医生水乳精华小瓶装',
            store: 533,
            sale: 2345,
            price: 345,
            checked: false
        }],
        type: 'done', //edit or done
        isSelectAll: false
    },
    //编辑或完成
    editCart() {
        if (this.data.type == 'done') {
            this.setData({
                type: 'edit'
            })
        } else {
            this.setData({
                type: 'done'
            })
        }
    },
    selectAllChange(e) {
        console.log(this.data.isSelectAll)
        this.setData({
            isSelectAll: !this.data.isSelectAll
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
        this.setData({
            isIOS: getApp().globalData.isIOS
        })
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
// pages/product/search/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        productList:[],
        // productList: [{
        //     url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1328874460,2431333110&fm=26&gp=0.jpg',
        //     title: '艾医生水乳精华小瓶装艾医生水乳精华小瓶装',
        //     store: 533,
        //     sale: 2345,
        //     price: 345
        // }, {
        //     url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1328874460,2431333110&fm=26&gp=0.jpg',
        //     title: '艾医生水乳精华小瓶装艾医生水乳精华小瓶装',
        //     store: 533,
        //     sale: 2345,
        //     price: 345
        // }, {
        //     url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1328874460,2431333110&fm=26&gp=0.jpg',
        //     title: '艾医生水乳精华小瓶装艾医生水乳精华小瓶装',
        //     store: 533,
        //     sale: 2345,
        //     price: 345
        // }, {
        //     url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1328874460,2431333110&fm=26&gp=0.jpg',
        //     title: '艾医生水乳精华小瓶装艾医生水乳精华小瓶装',
        //     store: 533,
        //     sale: 2345,
        //     price: 345
        // }, {
        //     url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1328874460,2431333110&fm=26&gp=0.jpg',
        //     title: '艾医生水乳精华小瓶装艾医生水乳精华小瓶装',
        //     store: 533,
        //     sale: 2345,
        //     price: 345
        // }],
        history: ['面霜', '化妆品', '艾医生', '手霜', '精华补水液','补水霜'],
        searchText:''
    },
    searchInput(e){
        this.setData({
            searchText: e.detail.value
        })
    },
    clearSearch(){
        this.setData({
            searchText: ''
        })
    },
    goSearch(e){
        wx.navigateTo({
            url: './searchResult?value='+ e.detail.value,
        })
    },
    goResult(e){
        this.setData({
            searchText: e.currentTarget.dataset.value
        })
        wx.navigateTo({
            url: './searchResult?value=' + e.currentTarget.dataset.value,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
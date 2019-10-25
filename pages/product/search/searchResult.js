// pages/product/search/index.js
import $API from "../../../api/apiList";
import {gFunc} from "../../../globlFunc";
import {publicParam, pubclieFunc} from "../public";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // productList: [],
        ...publicParam,
        history: ['面霜', '化妆品', '艾医生', '手霜', '精华补水液', '补水霜'],
        searchText: ''
    },
    searchInput(e) {
        this.setData({
            searchText: e.detail.value
        })
    },
    goBack(){
        wx.navigateBack({
            delta:1
        })
    },
    breakProduct(val) {
        let _val = gFunc.getDataset(val)
        pubclieFunc.breakProduct(this, Number(_val.id), Number(_val.index))
    },
    pushProductList() {
        let _name = this.data.searchText ? this.data.searchText : ''
        pubclieFunc.pushProductList(this, _name);
    },
     
    addCart(id){
        pubclieFunc.addCart(Number(gFunc.getDataset(id).id))
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(options.value){
            this.setData({
                searchText: options.value
            })
        }
        this.pushProductList()
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
        console.log("到底");
        let _pageNum = this.data.pageNum
        if(_pageNum.last_page && _pageNum.page > _pageNum.last_page){
            console.log("最后一页");
            gFunc.showToast("最后一页")
            return ;
        } else {
            this.setData({
                showLodding: true
            })
            this.pushProductList()
        }
    },

    /**
     * 用户点击右上角分享
     */
    // onShareAppMessage: function () {

    // }
})
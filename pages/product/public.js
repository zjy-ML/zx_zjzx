import $API from "../../api/apiList";
import { gFunc } from "../../globlFunc";


let publicParam = {
    /**
     * 商品列表
     */
    productList: [],
    /**
     * 分页参数
     */
    pageNum: {
        page: 1,
        per_page: 10,
        last_page: null
    },
    /**
     * 加载动画显示隐藏
     */
    showLodding: false,
    /**
     * 商品详情弹窗
     */
    showDetail: false,
    detail: {
        image_url: ''
    }
}
const pubclieFunc = {
    /**
     * 获取相关商品列表，name 为 undefined 时返回全部商品
     * @param {Object} that 页面对象，this
     * @param {string} name 商品名称
     */
    pushProductList(that ,name) {  
        $API.getProductList({title: name, ...that.data.pageNum})
            .then((res)=>{
            //   console.log(res.model.data);
              res.model.data
              that.setData({
                  showLodding: false,
                  productList: [...that.data.productList, ...res.model.data],
                  'pageNum.page': (res.model.current_page + 1),
                  'pageNum.last_page': res.model.last_page
              })

            })
            .catch((err)=>{
                console.log(err);
            })
    },

    /**
     * 刷新单个商品库存
     * @param {Object} that 页面对象，this
     * @param {number} product_id 商品ID
     * @param {number} index 商品列表数组下标
     */
    breakProduct(that,product_id, index){
        let _obj = {
            product_id: product_id
        }
        let _index = index
        $API.getProductStock(_obj)
            .then((res)=>{
               console.log(res);
               that.setData({
                   [`productList[${_index}].stock_count`]: res.model.stock_num
               })
               wx.showToast({
                   title: '刷新成功',
                   icon: "success",
                   duration: 600
               })
            })
            .catch((err)=>{
                console.log(err);
                wx.showToast({
                    title: '刷新失败',
                    icon: "none",
                    duration: 600
                })
            })
    },
    /**
     * 商品添加到购物车
     * @param {number} id 商品ID 
     */
    addCart(id){
        console.log(id);
        gFunc.showToast("添加购物车成功")
    },
}

export {publicParam, pubclieFunc}
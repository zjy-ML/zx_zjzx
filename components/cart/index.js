// components/cart/index.js
Component({
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的属性列表
     */
    properties: {
        cartList: {
            type: Array,
            value: []
        },
        type:{
            type:String,
            value:'done'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        checkStatus(index) {
            console.log(index)
            let checked = this.data.cartList[index].checked
            this.setData({
                ['cartList[' + index + '].checked']: !checked
            })
        }
    }
})
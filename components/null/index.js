// components/null/index.js
Component({
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的属性列表
     */
    properties: {
        type: {
            type: String,
            /**
             * value: search | address | order | msg | cart
             */
            value: '' 
        },
        url:{
            type:String,
            value:''
        },
        text:{
            type: String,
            value:''
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

    }
})

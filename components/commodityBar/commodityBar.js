// components/commodityBar/commodityBar.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    imgUrl: {
      type: String,
      value: ''
    },
    select: {
      type: Boolean,
      value: true
    },
    isSelect: {
      type: Boolean,
      value: false
    },
  },
  pageLifetimes: {
    show(){
      // console.log(this.data.imgUrl);
    },  
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
    switchSelect(){
      this.setData({
        select: !this.data.select,
      })
    }
  }
})

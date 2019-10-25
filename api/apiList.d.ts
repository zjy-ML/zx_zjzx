
interface RETURNVALUE{
    code: number,
    message: string,
    model: any,
    success: boolean
}
interface PAGENUM{
    page: number,
    per_page: number
}
interface PRODUCTLIST extends PAGENUM {
    title: string
}
declare const $API: {
    /**
     * 微信授权
     * @param data : {iv: string,encryptedData: string,rawData: string}
     */
    wxAuthorize(data: any): Promise<boolean>;
    /**
     * 微信登录
     * 
     */
    wxLogin(): Promise<object>;
    /**
     * 获取手机号授权
     * @param {*} data 
     */
    postPhoneNumber(data:any): Promise<RETURNVALUE>;

    /**
     * 文件上传
     * @param {*} data 
     */
    postUploadFile(data: any): Promise<RETURNVALUE>;

    /**
     * ### 商品列表
     * @param {Object} data 参数
     * @prop {string} data.title 产品名称
     * @page_num {number} res.model.current_page 当前页码 
     * @returns {Object} res.model.data 返回数据
     * @prop {number} res.model.data.id 主商品ID
     * @prop {string} res.model.data.title 商品名
     * @prop {string} res.model.data.image_url 图片地址
     * @prop {string} res.model.data.barcode 产品条码
     * @prop {string} res.model.data.specode 产品编码
     * @prop {Object} res.model.data.box_gauge 箱规 (注：一箱的规格)
     * @prop {string} res.model.data.box_gauge.name 品牌名
     * @prop {number} res.model.data.trade_item_count 今日销量
     * @prop {number} res.model.data.stock_count 库存
     * @prop {number} res.model.data.sale_price 销售价
     */
    getProductList(data:PRODUCTLIST): Promise<RETURNVALUE>;

    /**
     * ### 商品列表
     * @param {Object} data 参数
     * @prop {number} data.product_id 产品ID
     * @returns {Object} res.model.data 返回数据
     * @prop {number} res.model.data.stock_num 库存
     */
    getProductStock(data:{product_id: number}): Promise<RETURNVALUE>;
}

export default $API
declare const gFunc: {
    globalFail(err: any): void
    getDetailData(val: $.DETAILDATA): any
    getDataset(val: $.DATASET): any
    showToast(msg: string): void,
    isIdentify(status?: string): boolean,
}

export {gFunc}
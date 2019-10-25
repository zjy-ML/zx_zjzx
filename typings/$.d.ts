declare namespace $ {
  interface QUERY{
    url: string;
    data: {
      [key: string]: any
    };
    token: boolean;
  }
  interface DETAILDATA{
    detail: unknown
  }
  interface DATASET{
    currentTarget: {
        dataset: unknown
    }
  }
  interface RETURNVALUE{
    code: number,
    message: string,
    model: any,
    success: boolean
  }
  interface STORE {
    debug: boolean;
    state: {
      [key:string]: any
    }
    setValueAction(updateValue: any): void
    clearValueAction(updateValue: any): void
    clearStorage(expires: number): void
    errorHandle(err: wx.GeneralCallbackResult): {
      msg: string
      type: boolean
    } | undefined
    openBTadapter(): Promise<
      {
        msg: string
        type: boolean
      }
    >
    onBTadapterStateChange(): void 
    createBLEConnection(): Promise<
      {
        msg: string
        type: boolean
      }
    >
    initalblueTooth():any 
    closeBluetoothAdapter():void
    startBluetoothDevicesDiscovery():void
    getConnectedBluetoothDevices():void
    onBluetoothDeviceFound():void
    getBLEDeviceCharacteristics(deviceId: any, uuid: any):void
    notifyBLECharacteristicValueChange(deviceId: any, serviceId: any, uuid: any, arg3: boolean):void
    writeBLECharacteristicValue(deviceId: any, serviceId: any, writeId: any,writeValue:string):void
    onBLECharacteristicValueChange():void
    getServiceId(deviceId: any):void
    
    stopBluetoothDevicesDiscovery():void
    writeBlue(e:DATASET):void
    createBLEConnection(deviceId:string):void
    // closeBLEConnection();
    ab2hex(buffer:ArrayBuffer):void
    onBLEConnectionStateChange():void
  }
  interface APILIST　{
    phoneLogin(): object;
    wxAuthorize(data: any): Promise<boolean>;
    wxLogin(): Promise<object>;
    postPhoneNumber(data:any): Promise<RETURNVALUE>;
    postUploadFile(data: any): Promise<RETURNVALUE>;
    getSubjectList(data: any): Promise<RETURNVALUE>;
    subjiectConfirm(data: any): Promise<RETURNVALUE>;
    getBrandList(data: any): Promise<RETURNVALUE>;
    postMyProducts(data: any): Promise<RETURNVALUE>;
    postMyProductsStore(data:any): Promise<RETURNVALUE>;
    postEfficacy(): Promise<RETURNVALUE>;
    postProducts(data: any): Promise<RETURNVALUE>;
    postProductsDetail(data:any): Promise<RETURNVALUE>;
    postReportsStore(data:any): Promise<RETURNVALUE>;
    postReportsContinue(data:any): Promise<RETURNVALUE>;
    postReportsBefore(data:any): Promise<RETURNVALUE>;
    postReportsAfter(data:any): Promise<RETURNVALUE>;
    postReportsReport(data:any): Promise<RETURNVALUE>;
    postReportsAffirm(data:any): Promise<RETURNVALUE>;
    getUserInfo(): Promise<RETURNVALUE>;
    getMyKinList(data: any): Promise<RETURNVALUE>;
    getRankList(data: any): Promise<RETURNVALUE>;
    tryReport(id:any): Promise<RETURNVALUE>;
  }
}

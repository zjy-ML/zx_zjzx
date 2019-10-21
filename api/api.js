function getToken(token) {
    // console.log('getToken', token);
    if (token) {
        let _obj = wx.getStorageSync('user');
        if (_obj !== '' && JSON.parse(_obj)) {
            api.header.Authorization = 'bearer' + JSON.parse(_obj).access_token;
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }

}

let api = {
    header: {
        'content-type': 'application/json',
        'Authorization': ''
    },
    errToken() {
        return new Promise((resolve, reject) => {
            reject('缺少Token');
        });
    },
    errCode(res) {
        if (res.statusCode > 200) {
            console.error('请求错误', res);
            if (res.statusCode == 401) {
                wx.reLaunch({
                    url: '/pages/login/login',
                })

            }
        } else if (!res.data.success) {
            switch (res.data.code) {
                case 100001:
                    wx.hideLoading()
                    console.error(res.data.message);
                    wx.showToast({
                        title: res.data.message,
                        icon: 'none',
                        duration: 1500,
                        success: res => {
                            console.log('success')
                            console.log(res)
                        },
                        fail(err) {
                            console.log('ert', err)
                        }
                    })

                    if (res.data.message == '用户未认证') {
                        setTimeout(() => {
                            wx.navigateBack({
                                delta: 1
                            })
                        }, 1500)
                    }
                    break;
                case 100119:
                    wx.hideLoading()
                    console.error(res.data.message);
                    wx.showToast({
                        title: res.data.message,
                        // title:"",
                        icon: 'none',
                        duration: 1500,
                    })
                    wx.reLaunch({
                        url: '/pages/login/login',
                    });

                    break;
                case 201: //研报详情付费
                    console.error(res.data.message);
                    wx.showToast({
                        title: res.data.message,
                        icon: 'none',
                        duration: 1500,
                        success: res => {
                            setTimeout(() => {
                                wx.navigateBack({
                                    delta: 1
                                })
                            }, 1500)
                        }
                    })
                    wx.hideLoading()
                default:
                    break;
            }
        } else {
            return true;
        }
    },
    uploadFile({
        url,
        data,
        token
    }) {
        if (getToken(token)) {
            return this.errToken();
        }
        let _this = this;
        return new Promise((resolve, reject) => {
            console.log({
                url: url,
                filePath: data.upload_file,
                name: data.key,
                formData: {
                    folder: data.folder,
                    file_type: data.file_type
                }
            });
            wx.uploadFile({
                url: url,
                filePath: data.filePath,
                name: data.upload_file,
                header: {
                    'content-type': 'multipart/form-data',
                    'Authorization': _this.header.Authorization
                },
                formData: {
                    method: 'POST',
                    folder: data.folder,
                    file_type: data.file_type
                },
                success: (res) => {
                    console.log('upload', res)
                    res.data = JSON.parse(res.data)
                    if (_this.errCode(res)) {
                        resolve(res.data);
                    }
                },
                fail: (err) => {
                    console.error('调用失败', err);
                    reject('error');
                },
            });

        })
    },
    pushRequest(
        url,
        data,
        type
    ) {
        let _this = this
        return new Promise((resolve, reject) => {
            wx.request({
                url: url,
                data: {
                    ...data
                },
                header: _this.header,
                method: type,
                dataType: 'json',
                responseType: 'text',
                success(res) {
                    if (_this.errCode(res)) {
                        resolve(res.data);
                    } else {
                        reject(res.data);
                    }
                },
                fail(err) {
                    console.error('调用失败', err);
                    reject('error');
                },
            });
        });
    },
    get({
        url,
        data,
        token
    }) {
        if (getToken()) {
            return this.errToken();
        }
        return this.pushRequest(url, data, 'GET');
    },
    post({
        url,
        data,
        token
    }) {
        if (getToken(token)) {
            return this.errToken();
        }
        return this.pushRequest(url, data, 'POST');
    },
    put({
        url,
        data,
        token
    }) {
        if (!getToken(token)) {
            return this.errToken();
        }
        return this.pushRequest(url, data, 'PUT');
    },
    delete({
        url,
        data,
        token
    }) {
        if (!getToken(token)) {
            return this.errToken();
        }
        return this.pushRequest(url, data, 'DELETE');
    }
}

export default api;
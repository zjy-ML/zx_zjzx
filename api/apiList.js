import api from './api';

const path = '';

export default {
    //微信授权
    wxAuthorize(data) {
        console.log(data);
        return new Promise((resolve, reject) => {
            wx.login({
                success(res) {
                    api.post({
                            token: false,
                            url: `${path}/auth/authorization`,
                            data: {
                                code: res.code,
                                encryptedData: encodeURIComponent(data.encryptedData),
                                iv: encodeURIComponent(data.iv),
                            },
                        })
                        .then((res) => {
                            console.log();
                            let _user = {
                                ...res.model,
                                ...JSON.parse(data.rawData)
                            }
                            wx.setStorageSync('user', JSON.stringify(_user));
                            wx.$store.setValueAction({
                                user: _user
                            });
                            gFunc.isIdentify(res.model.wechat_user.status)
                            wx.$store.clearStorage(res.model.expires_in)

                            resolve(true);
                        });
                },
                fail(err) {
                    console.error(err);
                },
            });
        })
    },
    //微信登录
    wxLogin(data) {
        return new Promise((resolve, reject) => {
            wx.login({
                success(res) {
                    api.post({
                            token: false,
                            url: `${path}/auth/login`,
                            data: {
                                code: res.code,
                            },
                        })
                        .then((res) => {
                            console.log(res);
                            let _user = {
                                ...res.model,
                                // ...JSON.parse(data.rawData)
                            }
                            wx.setStorageSync('user', JSON.stringify(_user));
                            wx.$store.setValueAction({
                                user: _user
                            });
                            // wx.$store.clearStorage(res.model.expires_in)
                            console.log('getApp....', getApp())
                            getApp().clearStorage(res.model.expires_in)
                            gFunc.isIdentify(res.model.wechat_user.status)
                            resolve(true);
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                },
                fail(err) {
                    console.error(err);
                },
            });
        })
    },
    // 获取手机号授权
    postPhoneNumber(data) {
        console.log(data);
        return new Promise((resolve, reject) => {
            wx.login({
                success(res) {
                    api.post({
                            token: false,
                            url: `${path}/auth/phone`,
                            data: {
                                code: res.code,
                                encryptedData: encodeURIComponent(data.encryptedData),
                                iv: encodeURIComponent(data.iv),
                                wechat_id: wx.$store.state.user.wechat_user.id
                            },
                        })
                        .then((res) => {
                            wx.$store.state.user.wechat_user.phone = res.model;
                            let _user = {
                                ...wx.$store.state.user,
                            }
                            wx.setStorageSync('user', JSON.stringify(_user));
                            wx.$store.setValueAction({
                                user: _user
                            });
                            resolve(res);
                        });
                },
                fail(err) {
                    console.error(err);
                    reject(res)
                },
            });
        })
    },
    postUploadFile(data) {
        console.log(data);
        return api.uploadFile({
            token: false,
            url: `${path}/upload`,
            data: {
                filePath: data.filePath,
                key: data.name || data.key,
                folder: data.folder,
                file_type: data.file_type,
                upload_file: data.upload_file
            }
        });
    },
    // 关注项目列表
    postFollowproject(data) {
        return api.post({
            token: true,
            url: `${path}/followproject/list`,
            data: {
                ...data,
            }
        });
    }
}
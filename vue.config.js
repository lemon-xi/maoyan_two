/*jshint esversion: 6 */
const path = require('path')

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.join(__dirname, './src'))
    },

    devServer: {
        proxy: {
            '/mmdb': {
                target: 'https://wx.maoyan.com',
                changeOrigin: true, //开启跨域
            },
            '/ajax': {
                target: 'https://m.maoyan.com',
                changeOrigin: true, //开启跨域
            }
        }
        // 'api':{
        //     target: 'https://localhost:',
        //     changeOrigin: true, //开启跨域

        // }

    }

}


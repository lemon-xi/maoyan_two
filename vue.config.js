/*jshint esversion: 6 */
const path = require('path')
console.log('hello')
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.join(__dirname, './src'))
    },

    devServer: {
        host: 'localhost',//target host
        port: 8080,
        proxy: {
            '/mmdb': {
                target: 'https://wx.maoyan.com',
                changeOrigin: true, //开启跨域
            }
        }

    }

}


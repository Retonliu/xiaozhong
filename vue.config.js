module.exports = {
    configureWebpack: {
        devServer: {
            proxy: 'https://openapi.yiban.cn'
        }
    },
}
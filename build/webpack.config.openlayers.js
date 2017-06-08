var webpack = require('webpack');
module.exports = {
    //页面入口文件配置
    entry: {},
    //入口文件输出配置
    output: {
        path: __dirname + '/../dist',
        filename: 'iclient9-openlayers.js'
    },

    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.css']
    },
    externals: {
        'echarts': 'echarts',
        'openlayers': 'ol',
        'mapv': 'mapv'
    },

    module: {
        noParse: /[\/\\]node_modules[\/\\]openlayers[\/\\]dist[\/\\]ol\.js$/,
        rules: [{
            test: /MapvLayer\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};
var path = require('path');
// var webpack = require('webpack');
// // var ExtractTextPlugin = require('extract-text-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// module.exports = {
//     mode: 'none',
//     entry: path.join(__dirname, 'dev_js/build.js'),
//     output: {
//         path: path.resolve(__dirname, 'public'), //打包后的文件存放的地方
//         filename: "[name].js" //打包后输出文件的文件名
//     },
//     // module: {
//     //     rules: [{
//     //         test: /\.css$/,
//     //         use: [
//     //             { loader: 'style-loader' },
//     //             {
//     //                 loader: 'css-loader',
//     //                 options: {
//     //                     modules: true
//     //                 }
//     //             }
//     //         ]
//     //     }]
//     // }
//     // module: {
//     //     rules: [{
//     //         test: /\.css$/,
//     //         use: ExtractTextPlugin.extract({
//     //             use: ['css-loader']
//     //         })
//     //     }]
//     // },
//     module: {
//         rules: [{
//             test: /\.css$/,
//             use: [MiniCssExtractPlugin.loader, 'css-loader?minimize', ]
//         }]
//     },
//     plugins: [
//         new MiniCssExtractPlugin({
//             filename: 'css/[name]-[contenthash].css'
//         })
//     ]

// }
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: 'development',
    // mode: 'none',
    // entry: path.join(__dirname, 'dev_js/build.js'),
    // output: {
    //     path: path.resolve(__dirname, 'public'), //打包后的文件存放的地方
    //     filename: "[name].js" //打包后输出文件的文件名
    // },
    entry: {
        index: path.join(__dirname, 'dev_css/index.less')
    },
    output: {
        path: path.resolve(__dirname, 'public/'), //打包后的文件存放的地方
        filename: "[name].css" //打包后输出文件的文件名
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: "[name].css",
            filename: 'css/[name].css'
                // chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            }
        ]
    }
}
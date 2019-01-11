var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //抽取css插件
const CopyWebpackPlugin = require('copy-webpack-plugin'); //复制静态文件插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); //提取HTML模板的插件
const optimizeCss = require('optimize-css-assets-webpack-plugin'); //压缩css的插件
module.exports = {
    mode: 'development',
    entry: {
        base: path.join(__dirname, 'dev_css/base.css'),
        index: path.join(__dirname, 'dev_css/index.less'),
    },
    output: {
        path: path.resolve(__dirname, 'dist/'), //打包后的文件存放的地方
        // filename: "css/[name].css" //打包后输出文件的文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html'),
            favicon: 'favicon.ico'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: "[name].css",
            filename: '[name].css'
                // chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([{
                from: path.resolve(__dirname, 'images/'),
                to: path.resolve(__dirname, 'dist/images/')
            }
            // , {
            //     from: path.resolve(__dirname, 'dev_css/base.css'),
            //     to: path.resolve(__dirname, 'dist/base.css')
            // }
        ]),
        new optimizeCss({
            assetNameRegExp: /.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
    ],
    // optimization: {
    //     minimizer: [new optimizeCss({})]
    // },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.jpg|\.png|\.jpeg|\.svg|\.ttf|\.woff$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                    }
                }]
            }
        ]
    }
}
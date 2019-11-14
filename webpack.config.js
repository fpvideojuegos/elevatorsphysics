const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/ts/index.ts'),
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, './dist')
    },
    watch: false,
    devtool: "source-map",
    mode: "development",
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                use: [
                    {loader: "babel-loader"},
                    {loader: "ts-loader"}
                ]
            },
            {
                test: /\.(png|jpg|gif|)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: 'assets'
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                context: './src',
                from: 'assets',
                to: path.resolve(__dirname, 'dist/assets'),
            }
        ]),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            hash: false
        })
    ]
};
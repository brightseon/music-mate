const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || 3000;

const config = {
    mode : 'development',
    entry : path.join(__dirname, '/src/index.tsx'),
    output : {
        filename : 'bundle.[hash].js',
        path : path.join(__dirname, '/dist')
    },
    resolve : {
        extensions : ['.js', '.json', '.ts', '.tsx']
    },
    devtool : 'inline-source-map',
    module : {
        rules : [
            {
                test : /\.(ts|tsx)$/,
                exclude : /node_modules/,
                use : ['ts-loader']
            },
            {
                test : /\.(scss|css)$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader',
                        options : {
                            modules : true,
                            camelCase : true,
                            sourceMap : true,
                            localIdentName : '[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader : 'sass-loader',
                        options : {
                            sourceMap : true,
                            data : `@import './src/globalStyles';`
                        }
                    }
                ]
            },
            {
                test : /\.(jpg|png|svg|ico|icns)$/,
                loader : 'file-loader',
                options : {
                    name : '[path][name].[ext]'
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, './public/index.html')
        })
    ],
    devServer : {
        host : 'localhost',
        port : PORT,
        historyApiFallback : true,
        open : true
    }
};

module.exports = config;
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {presets: ['@babel/env']}
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader?name=public/icons/[name].[ext]'
            }
        ]
    },
    resolve:{extensions: ['*', '.js', '.jsx']},
    output: {
        path: path.resolve(__dirname,'public', 'dist'),
        publicPath: './dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port:5000,
        publicPath: 'http://localhost:5000/dist/',
        hot: true,
        historyApiFallback: true,
    }
};
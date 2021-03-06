var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.html')
});

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};

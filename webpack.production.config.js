var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
    filename: 'style.css'
});

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [MiniCssExtractPluginConfig]
};

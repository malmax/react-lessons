var path = require('path');
var webpack = require('webpack');
//AMD
//CommonJS
//ES6

var context = path.join(__dirname,'src');

module.exports = {
    context: context,
    entry: 'main',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[hash].[ext]'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: 'babel',
            query: {
                presets: ['react','es2015','stage-0'],
            }
        },{
            test: /\.css$/,
            loaders: 'style-loader!css-loader',

        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
    ]
};

var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

//AMD - define ['module','module', function() { }]
//CommonJS - require / module.exports
//ES6 - import/export



module.exports = {
    //context: context,
    entry: [
        path.join(__dirname,'src','blog'),
    ], //входной файл, может быть несколько через массив
    output: { //выходной путь, выходной файл. в нижнем регистре
        path: path.join(__dirname, 'dist'),
        // TODO: почему [name] равен main? Хотя входной файл lesson02hw
        filename: '[name].js' //[name]_[hash].[ext] оригинальное название входного файла, хэш и расширение
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                //cacheDirectory: true, //кэширование
                presets: ['react','es2015','stage-0'],
            }
        },{
            test: /\.sass$/,
            loader: 'style!css!sass',  
            // exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            loader: 'style!css',
            // exclude: /node_modules/,
        },{
            test: /\.json$/,
            loader: 'json',
        },
        {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]'
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff2&name=./fonts/[name].[ext]'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]'
        }, {
            test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-otf&name=./fonts/[name].[ext]',
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file?name=./fonts/[name].[ext]'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml&name=./fonts/[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css','.sass'] //расширения какие webpack будет воспринимать и обрабатывать
        //modulesDirectories: ['node_modules','bower_components']
    },
    plugins: [
        new webpack.NoErrorsPlugin(), // запрещает создание выходных файлов если есть хоть одна ошибка
        new HtmlWebpackPlugin({ 
            template: path.join(__dirname,'src','index.html'), //берет этот файл, добавляет output файл с вебпака
            filename: path.join(__dirname,'dist','index.html'), // и сохраняет сюда
        }),
         new webpack.ProvidePlugin({
            'jQuery': 'jquery',
            '$': 'jquery'
        }),
        new BrowserSyncPlugin({ // обновляет страницу и хостит
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['dist']
            }
        })
    ]
};

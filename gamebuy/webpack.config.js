var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

//AMD - define ['module','module', function() { }]
//CommonJS - require / module.exports
//ES6 - import/export

var context = path.join(__dirname,'src');

module.exports = {
    //context: context,
    entry: [
        path.join(__dirname,'src','lesson03'),
    ], //входной файл, может быть несколько через массив
    output: { //выходной путь, выходной файл. в нижнем регистре
        path: path.join(__dirname, 'dist'),
        // TODO: почему [name] равен main? Хотя входной файл lesson02hw
        filename: 'lesson03.js' //[name]_[hash].[ext] оригинальное название входного файла, хэш и расширение
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
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        },{
            test: /\.json$/,
            loader: 'json',
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'] //расширения какие webpack будет воспринимать и обрабатывать
        //modulesDirectories: ['node_modules','bower_components']
    },
    plugins: [
        new webpack.NoErrorsPlugin(), // запрещает создание выходных файлов если есть хоть одна ошибка
        new HtmlWebpackPlugin({ 
            template: path.join(__dirname,'src','index.html'), //берет этот файл, добавляет output файл с вебпака
            filename: path.join(__dirname,'dist','index.html'), // и сохраняет сюда
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

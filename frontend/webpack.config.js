const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: './app/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer:{
      historyApiFallback: true,
      port: 8080,
      contentBase: './public'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias:{
          modules: __dirname + '/node_modules'
      }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        rules: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015','react'],
              plugins:['transform-object-rest-spread']
            }
          }, {
            test:/\.css$/,
            loader: [ 'style-loader', 'css-loader' ] //ExtractTextPlugin.extract('style-loader', 'css-loader')
       
           }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
          }]
      }
    }
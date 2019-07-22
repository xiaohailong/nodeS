
const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode:'development',
  entry: './public/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'public','dist')
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   // contentBase: './public/dist',
  //   hot: true
  // },
  // plugins:[
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  // babel: {
  //   presets: ['es2015']
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.styl/,
        use: [
            'style-loader',
            'css-loader',
            'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.es$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
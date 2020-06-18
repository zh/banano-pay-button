const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "banano_button.min.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Rules to load css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // Rules to load scss
      {
      // Some change here
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: '',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
      }),
    ],
  },
};

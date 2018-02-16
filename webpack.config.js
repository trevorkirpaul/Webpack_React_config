const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// set up sass extractor
const extractSass = new ExtractTextPlugin({
  filename: 'main.css'
})

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.sass$/,
        use: extractSass.extract({
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ]
        })
      }
    ]
  },
  plugins: [
    // clean up dist folder
    new CleanWebpackPlugin(['dist']),
    // create dynamic HTML file
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html'
    }),
    // sass files
    extractSass
  ]
}
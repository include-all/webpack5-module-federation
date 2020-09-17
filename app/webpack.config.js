const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    'app': "./src/index"
  },
  output: {
    filename: '[name].js',
    publicPath: 'http://localhost:7789/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: 'index.html',
      chunks: ['app']
    }),
    new ModuleFederationPlugin({
      name: "appRemote",
      library: { type: "var", name: "appRemote" },
      filename: "app-remote-entry.js",
      exposes: {
        myText: "./src/components/text.vue"
      },
      remotes: {
        app1Remote: 'app1Remote'
      },
      shared: ['vue']
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "../"),
    port: 7789,
    open: true
  }
}
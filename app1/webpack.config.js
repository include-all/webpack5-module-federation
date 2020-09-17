const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    'app1': "./src/index"
  },
  output: {
    filename: '[name].js',
    publicPath: 'http://localhost:7788/'
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
      chunks: ['app1']
    }),
    new ModuleFederationPlugin({
      // 导出包名
      name: "app1Remote",
      library: { type: "var", name: "app1Remote" },
      // 入口文件名
      filename: "app1-remote-entry.js",
      // 要导出的内容
      exposes: {
        myButton: "./src/myButton.vue",
        // EleInput: './node_modules/element-ui/packages/input/src/input.vue'
        utils: "./src/utils/index"
      },
      remotes: {
        appRemote: 'appRemote'
      },
      shared: ['vue']
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "../"),
    port: 7788,
    open: !true
  }
}
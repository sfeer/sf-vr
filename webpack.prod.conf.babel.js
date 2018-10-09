import path from 'path'
import VueLoaderPlugin from 'vue-loader/lib/plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  mode: 'production',
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'static/js/[name].[chunkhash:16].js',
    publicPath: 'static'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          publicPath: '../',
          outputPath: 'static/',
          name: 'img/[name].[hash:16].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          publicPath: '../',
          outputPath: 'static/',
          name: 'fonts/[name].[hash:16].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './dist/index.html'),
      template: 'index.html',
      // 文档: https://github.com/kangax/html-minifier#options-quick-reference
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:16].css'
    })
  ],
  optimization: {
    // 文档: https://webpack.js.org/plugins/split-chunks-plugin/
    splitChunks: {
      cacheGroups: {
        // 处理入口chunk
        vendors: {
          test: /[\\/]node_modules[\\/](.*)\.js$/,
          chunks: 'initial',
          name: 'vendors',
        },
        // 处理异步chunk
        'async-vendors': {
          test: /[\\/]node_modules[\\/](.*)\.js$/,
          chunks: 'async',
          name: 'async-vendors'
        }
      }
    },
    runtimeChunk: {name: 'manifest'}
  }
}

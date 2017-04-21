var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    // filename: 'build_[hash].js'
    filename: 'build.js'
  },
  //此段代码目前没有起作用
  devServer: {
		contentBase: './dist',
		host: 'localhost',
		port: 8000,
    historyApiFallback: false,
    proxy: {
			'/api': {
				target: "http://local.kofuf.com:9090",
				pathRewrite: {
					'^/api': '',
				},
				changeOrigin: true
			}
		}
	},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
      },
      {
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader!sass-loader'
				})
			},
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  performance: {
    hints: false
  },
  // devtool: '#eval-source-map',//开发环境map
  externals: {
    // 'jquery': 'window.jQuery',
		'vue-resource': 'window.VueResource',
    'vue-router':'window.VueRouter'
	},
  plugins: [
		//压缩js
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		}),
    //抽离css
    new ExtractTextPlugin({
			// filename: 'app_[hash].css',
			filename: 'app.css',
			disable: false,
			allChunks: true
		}),
    //生成html
    new HtmlWebpackPlugin({
   			template: './index.html',
   			filename: 'index.html',
   			title: ''
 		}),
  ]
}

// if (process.env.NODE_ENV === 'production') {
//   // module.exports.devtool = '#source-map'
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     // new HtmlWebpackPlugin({
// 		// 	template: './index.html',
// 		// 	filename: 'index.html',
// 		// 	title: ''
// 		// }),
//     new ExtractTextPlugin({
// 			// filename: 'app_[hash].css',
// 			filename: 'app.css',
// 			disable: false,
// 			allChunks: true
// 		}),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }

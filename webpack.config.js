/**
 * 
 */
var path = require('path');
module.exports = {
	context: path.resolve(__dirname, 'src/main/jax'),
	entry: { /* 프로젝트의 진입점을 설정함(진입점을 여러개 설정 할 수 있다.) */
		reactHello: './ReactHello.jax'
	},
	devtool: 'sourcemaps', /* 소스맵을 설정하여 개발자 도구에서 코드의 행 번호를 정한다. */
	cache: true,
	output: {
		path: __dirname,
		filename: './src/main/webapp/js/react/[name].bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: 'env'
				}
			}]
		}, {
			test: /\.jax$/,
			use: [{
				loader: MiniCssExtractPlugin.loader
			}, {
				loader: 'css-loader'
			}]
		},


		{
			test: /\.(css)$/,
			use: [{
				loader: MiniCssExtractPlugin.loader
			}, {
				loader: 'css-loader'
			}]
		}, {
			test: /\.(jpe?g|png|gif)$/i,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 1024 * 10 // 10kb
				}
			}]
		}, {
			test: /\.(svg)$/i,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'images/'
				}
			}]
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			path: outputPath,
			filename: '[name].css'
		})
	]
}
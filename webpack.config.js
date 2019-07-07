const path = require('path');

// Webpack configuration.
module.exports = {
	entry: './src/index.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					'html-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './dist')
	},
	resolve: {
		alias: {
			'@component': path.resolve(__dirname, './')
		}
	},
	watch: true
};
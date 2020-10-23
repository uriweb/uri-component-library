/**
 * Webpack config for Gutenberg implementation
 * allows us to work in JSX
 */

const debug = 'production' !== process.env.NODE_ENV;
const webpack = require( 'webpack' );

const plugins = [];

module.exports = {
	context: __dirname,
	devtool: debug ? 'inline-source-map' : null,
	mode: debug ? 'development' : 'production',
	entry: './src/js/blocks/blocks.js',
	output: {
		path: __dirname + '/js/',
		filename: 'blocks.built.js',
	},
	module: {
		rules: [ {
			test: /\.js$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'babel-loader',
				},
			],
		} ],
	},
	plugins,
};

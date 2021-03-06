const path = require('path')
const webpack = require('webpack')
module.exports ={
	entry: {
		webpack: 'webpack-dev-server/client?http://0.0.0.0:3000',
		bundle: './src/index.jsx'
	},
	output: {
		path: '/'
	},
	devtool: 'source-maps',
	quiet: true,
	resolve: {
        extensions: ['','.js','.jsx']
    },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: [ path.resolve(__dirname, "src") ],
				loader: 'babel',
				query: {
					presets: ['es2015','react','stage-0'],
					plugins: ['transform-class-properties']	
				}
			},
			{
				test: /\.css$/,
				loader : 'style!css!autoprefixer?browsers=last 2 versions'
			},
			{
				test: /\.(svg|png|jpg)$/,
				loader: 'file?name=[name].[ext]'
			}
		]
	},
	plugins: [
		 new webpack.HotModuleReplacementPlugin()
	],
	externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'socket.io-client': 'io'
    }
}
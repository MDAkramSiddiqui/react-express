const {merge} = require('webpack-merge');
const commonConfig = require('./common.config');

module.exports = merge(commonConfig, {
    devServer: {
		historyApiFallback: true,
		port: 3000,
		proxy: {
			"/api": "http://localhost:9090",
		},
	},
	mode: "development",
})

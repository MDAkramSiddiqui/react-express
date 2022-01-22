const {merge} = require('webpack-merge');
const commonConfig = require('./common.config');

module.exports = merge(commonConfig, {
    devServer: {
		historyApiFallback: true,
		proxy: {
			"/api": "http://localhost:9090",
		},
	},
})

const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    port: 3001,
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'cheap-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.DefinePlugin({}), new BundleAnalyzerPlugin()],
};

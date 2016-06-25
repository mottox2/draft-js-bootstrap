var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: [
    './src/index.js',
    'webpack-hot-middleware/client',
  ],
  output: {
    path:       path.join(__dirname, 'dist'),
    filename:   'bundle.js',
    publicPath: '/dist/',
  },
  watch: true,
  module: {
    loaders: [
      {
        test:    /\.js$/,
        exclude: /(node_modules)/,
        loader:  'babel?presets[]=react,presets[]=es2015'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

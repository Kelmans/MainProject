module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js',
  },
  watch: true,
  devtool: 'source-map',
  module: {},
};

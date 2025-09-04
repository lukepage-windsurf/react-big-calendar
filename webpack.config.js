const path = require('path');

module.exports = {
  mode: 'development',
  entry: './examples/App.js',
  output: {
    path: path.resolve(__dirname, 'examples/static'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.md$/,
        use: ['babel-loader', 'markdown-jsx-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'react-big-calendar': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'examples'),
    },
    port: 3000,
    hot: true
  }
};

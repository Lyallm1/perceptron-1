const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'demo.html'), to: path.resolve(__dirname, 'dist', 'index.html') },
        { from: path.resolve(__dirname, 'dist', 'index.html'), to: path.resolve(__dirname, 'docs', 'index.html') },
        { from: path.resolve(__dirname, 'dist', 'main.js'), to: path.resolve(__dirname, 'docs', 'main.js') },
      ],
    }),
  ],
  mode: 'development',
};
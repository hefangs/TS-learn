const path = require('path')
module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'app.ts',
    path: path.resolve(__dirname, 'public/dist')
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: 'ts-loader',
        exclude: /node_modules/,
        publicPath: '/dist/'
      }
    ]
  }
}

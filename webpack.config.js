const path = require('path')

const WebpackBarPlugin = require('webpackbar')

const sourcePath = path.resolve(__dirname, 'src')
const outputPath = path.resolve(__dirname, 'public')

function webpackConfig(rawEnv, optionArg) {
  return {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
      path: outputPath,
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          include: sourcePath,
          use: 'ts-loader'
        },
        {
          test: /\.(js|jsx)?$/,
          include: sourcePath,
          use: 'babel-loader'
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new WebpackBarPlugin({
        name: 'react-app',
        color: 'green',
        profile: true,
        fancy: true
      })
    ],
    resolve: {
      modules: [sourcePath, 'node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devServer: {
      contentBase: outputPath,
      compress: true,

      disableHostCheck: false
    }
  }
}

module.exports = webpackConfig

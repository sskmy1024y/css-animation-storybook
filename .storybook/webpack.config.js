const path = require('path')

const sourcPath = path.resolve(__dirname, '../src')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: 'ts-loader'
  })
  config.resolve.modules.push(sourcPath)
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}

let config = {}

switch (process.env.NODE_ENV) {
  case ('development'):
  case ('test'):
    console.log('dev')
    config = require('./config.dev.json')
    break
  default:
    console.log('prod')
    config = require('./config.prod.json')
}

module.exports = config

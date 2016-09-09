import chalk = require('chalk')
import logger = require('@zkochan/logger')

export default function err (error) {
  logger.error('', error)
  console.error('')
  if (error.host && error.path) {
    console.error('' + error.message)
    console.error('' + error.method + ' ' + error.host + error.path)
  } else {
    console.error(chalk.red(' ! ' + (error.message || error)))
    if (process.env.DEBUG_PROMISE && error.stack && !error.silent) {
      console.error(chalk.red(error.stack))
    }
  }
  console.error('')
  process.exit(1)
}
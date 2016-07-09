/* @flow */

import invariant from 'assert'

function bootstrap(processName: string, defaultDebugKey?: string) {
  invariant(typeof processName === 'string' && processName, 'processName must be a string')
  invariant(!defaultDebugKey || (typeof defaultDebugKey === 'string'), 'defaultDebugKey must be nullable string')

  process.title = processName
  process.on('unhandledRejection', function(reason) {
    console.error('unhandledRejection', reason)
  })
  process.on('uncaughtException', function(error) {
    console.error('uncaughtException', error && error.stack)
  })
  if (defaultDebugKey && !{}.hasOwnProperty.call(process.env, 'DEBUG')) {
    process.env.DEBUG = `${defaultDebugKey}:*`
  }
}

module.exports = bootstrap

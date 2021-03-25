import dotenv from 'dotenv'

dotenv.config()

process.env.PORT = process.env.PORT || '3001'

function logEnv() {
  const logger = require('@root/setup/logger')

  const log = logger.default('setup/dotenv')
  log('start')


  const {
    DEBUG,
    NAMESPACE,
    PUBLIC_URL,
    SESSION_SECRET,
    PORT
  } = process.env

  log({
    DEBUG,
    NAMESPACE,
    PUBLIC_URL,
    SESSION_SECRET,
    PORT
  })

  log('end')
}

logEnv()
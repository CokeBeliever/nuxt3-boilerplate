const dotenv = require('dotenv')
const processEnv = {}

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
  processEnv,
})

module.exports = {
  apps: [
    {
      name: 'nuxt3-boilerplate',
      script: './.output/server/index.mjs',
      instances: 1,
      exec_mode: 'cluster',
      out_file: '/dev/null',
      error_file: '/dev/null',
      env: processEnv,
    },
  ],
}

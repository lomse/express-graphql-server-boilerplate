'use strict'

import * as Joi from '@hapi/joi'

const validEnvs = ['development', 'stage', 'production', 'test']

const schema = Joi.object({
  NODE_ENV: Joi.string()
    .required()
    .valid(...validEnvs)
    .default('development'),
  PORT: Joi.number()
    .required()
    .min(1)
    .max(65535),
  DB_CONNECTION_URL: Joi.string().required().uri({
    scheme: ['mongodb']
  })
})

const vars = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: +process.env.PORT,
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL
}

const { error, value } = schema.validate(vars)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

export default value

require('dotenv').config()
const Hapi = require('@hapi/hapi');
const AuthBearer = require('hapi-auth-bearer-token');
const routes = require('./src/routes');
const { BearerDefault, BearerMlDefault } = require('./src/auth')

const init = async () => {
  const server = Hapi.server({
    port: process.env.NODE_ENV === 'production'? process.env.PORT : 3000,
    host: '0.0.0.0',
  })

  await server.register({
    plugin: AuthBearer
  })

  server.auth.strategy('simple-default', 'bearer-access-token', BearerDefault)
  server.auth.strategy('ml-default', 'bearer-access-token', BearerMlDefault)

  server.route(routes)
  await server.start()
}

process.on('unhandledRejection  ', err => {
  console.error(err);
})

init();
const personajesRouter = require('./personajesRouter')

const personajesRouterApi = (app) => {
  app.use('/personajes', personajesRouter)
}

module.exports = personajesRouterApi

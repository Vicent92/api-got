const routerHouses = require('./housesRouter')

const housesRouterApi = (app) => {
  app.use('/houses', routerHouses)
}

module.exports = housesRouterApi

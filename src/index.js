const express = require('express')
const housesRouterApi = require('./houses/index')
const personajesRouterApi = require('./personajes/index')
const { logError, handleError, boomError } = require('./middleware/handleError')

const app = express()
const Port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('My API')
})

housesRouterApi(app)
personajesRouterApi(app)

app.use(logError)
app.use(boomError)
app.use(handleError)

app.listen(Port, () => {
  console.log(`server listening on port ${Port}`)
})

const express = require('express')
const personajes = require('./personajesService')

const router = express.Router()
const service = new personajes

router.get('/', async (req, res, next) => {
  try {
    const personajes = await service.find()
    return res.status(200).json(personajes)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const personaje = await service.findOne(id)
    res.status(200).json(personaje)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const body = req.body
    const personaje = await service.create(body)
    res.status(201).json(personaje)
  } catch (err) {
    next(err)
  }
})

module.exports = router

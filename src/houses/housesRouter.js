const express = require('express')
const houses = require('./houseService')

const router = express.Router()
const service = new houses

router.get('/', async (req, res) => {
  const houses = await service.find()
  res.json(houses)
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const houses = await service.findOne(id)
    res.json(houses)
  } catch(err) {
    next(err)
  }
})

router.post('/', async (req, res) => {
  const body = req.body
  const houses = await service.create(body)
  res.json(houses)
})

module.exports = router

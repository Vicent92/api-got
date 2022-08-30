const boom = require('@hapi/boom');
const pool = require('../../libs/postgres')

class House {
  constructor() {
    this.houses = []
    this.pool = pool
    this.pool.on('error', (err) => console.log(err))
  }

  async find() {
    const query = 'SELECT * FROM houses'
    const rta = await this.pool.query(query)
    return rta.rows
  }

  async findOne(id) {
    const house = this.houses.find(house => house.id === id)
    if (!house) {
      throw boom.notFound('House not found')
    }
    return house
  }

  async create(data) {
    this.houses.push(data)
    return this.houses
  }
}

module.exports = House;

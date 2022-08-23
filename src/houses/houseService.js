const boom = require('@hapi/boom');

class House {
  constructor() {
    this.houses = []
  }

  async find() {
    return this.houses
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

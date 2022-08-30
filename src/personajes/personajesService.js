const boom = require('@hapi/boom')

class Personaje {
  constructor() {
    this.personajes = []
  }

  async find() {
    return this.personajes
  }

  async findOne(id) {
    const personaje = this.personajes.find(house => house.id === id)
    if (!personaje) {
      throw boom.notFound('House not found')
    }
    return personaje
  }

  async create(data) {
    this.personajes.push(data)
    return this.personajes
  }
}

module.exports = Personaje

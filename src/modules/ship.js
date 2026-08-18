// ./src/modules/ship.js

export default class Ship {
  static #instances = new Set()

  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.coordinates = null
    this.id = crypto.randomUUID()

    Ship.#instances.add(this)
  }

  hit() {
    this.hits++
  }

  isSunk() {
    return this.hits === this.length
  }

  // STATIC METHODS

  // Returns an Instance of Ship based on unique ID
  static findShip(shipId) {
    return Ship.getAllInstances().find(inst => inst.id === shipId)
  }

  // Transforms Set of class instances into an array
  static getAllInstances() {
    return Array.from(Ship.#instances)
  }


}

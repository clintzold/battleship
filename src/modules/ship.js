// ./src/modules/ship.js

export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.coordinates = null
  }

  hit() {
    this.hits++
  }

  isSunk() {
    return this.hits === this.length
  }

  static placeShip(coordinates, ship) {
    ship.coordinates = coordinates
  }


}

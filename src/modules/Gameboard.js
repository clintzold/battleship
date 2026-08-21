// ./src/modules/Gameboard.js
import Ship from './Ship.js'

export default class Gameboard {
  constructor() {
    this.grid = Gameboard.generateGrid()
    this.ships = this.#buildShips()
  }
  
  // PUBLIC METHODS
  placeShip(coordinate, shipId) {
    const ship = Ship.findShip(shipId)
    this.grid[coordinate].ship = ship
  }

  receiveHit(coordinate) {
    this.#markGridHit(coordinate)
    this.#hitShip(this.grid[coordinate].ship)
  }

  // PRIVATE METHODS
  //
  // Record coordinate attacks
  #markGridHit(coordinate) {
    if (this.grid[coordinate].hit) {
      throw new Error('Coordinates have already been hit!')
    }
    this.grid[coordinate].hit = true
  }

  // Record ship attack if it exists in coordinates
  #hitShip(ship) {
    if (ship) {
      ship.hit()
    }
  }

  // Build inital set of ships
  #buildShips() {
    array = [
      new Ship(2),
      new Ship(2),
      new Ship(3),
      new Ship(4),
      new Ship(4)
    ]
    return array
  }


  // STATIC METHODS
  //
  // Generate 100 position gameplay grid
  static generateGrid() {
    // Grid is an Object instead of Array for instant key/value retrieval
    const gridObject = {}
    const xValues = [...Array(10).keys()].map(x => x + 1)

    // Attach Y values to X values and insert as coordinates
    xValues.forEach(value => {
      for (let i = 1; i <= 10; i++) {
        const coordinate = `${value}-${i}`    
        gridObject[coordinate] = {
          ship: null,
          hit: false
        }
      }
    })
    return gridObject
  }
}

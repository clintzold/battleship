// ./src/modules/Gameboard.js

export default class Gameboard {
  constructor() {
    this.grid = Gameboard.generateGrid()
  }

  receiveHit(coordinate) {
    this.grid[coordinate].hit = true
  }

  static generateGrid() {
    // grid is an Object instead of Array for instant key/value retrieval
    const gridObject = {}
    const xValues = [...Array(10).keys()].map(x => x + 1)

    // Insert grid keys as x-y pair coordinates
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

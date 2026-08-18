// ./src/modules/Gameboard.js

export default class Gameboard {
  constructor() {
    this.grid = Gameboard.generateGrid()
  }

  static generateGrid() {
    const array = []
    
    for (let i = 0; i < 100; i++) {
      array.push(i)
    }
    return array
  }
}

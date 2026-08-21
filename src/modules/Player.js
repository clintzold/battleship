// ./src/modules/Player.js
import Gameboard from './Gameboard.js'

export default class Player {
  static #instances = new Set()

  constructor() {
    this.turn = true
    this.gameboard = new Gameboard()

    Player.#instances.add(this)
  }

  // STATIC METHODS
  //
  static allPlayers() {
    return Array.from(Player.#instances)
  }
}

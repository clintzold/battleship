// ./src/modules/Player.js
import Gameboard from './Gameboard.js'

export class Player {
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

  static clearPlayers() {
    Player.#instances.clear()
  }

  static changeTurn() {
    Player.allPlayers().forEach(player => {
      if (player.turn) {
        player.turn = false
      } else {
        player.turn = true
      }
    })
  }
}

export class ComputerPlayer extends Player {
  constructor() {
    super()
    this.turn = false

  }
  
}

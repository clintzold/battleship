// ./src/tests/Player.test.js
import Player from '../modules/Player.js'
import Gameboard from '../modules/Gameboard.js'

describe('Player: Properties', () => {
  let player
  beforeEach(() => {
    player = new Player()
  })

  it('has one gameboard instance in gameboard property', () => {
    expect(player.gameboard).toBeInstanceOf(Gameboard)
  })

  it('has a turn property that defaults to true', () => {
    expect(player.turn).toBe(true)
  })
})

describe('Player: Static Methods', () => {
  let player 
  beforeEach(() => {
    player = new Player()
  })

  describe('allPlayers()', () => {
    it('returns an array', () => {
      expect(Array.isArray(Player.allPlayers())).toBe(true)
    })
    it('returns an array of Player instances', () => {
      expect(Player.allPlayers()[0]).toBeInstanceOf(Player)
    })
  })
})

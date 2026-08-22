// ./src/tests/Player.test.js
import { Player, ComputerPlayer } from '../modules/Player.js'
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

  describe('clearPlayers()', () => {
    it('removes all instances from record', () => {
      Player.clearPlayers()
      expect(Player.allPlayers().length).toBe(0)
    })
  })

  describe('changeTurn()', () => {
    it('toggles turn boolean for each Player instance', () => {
      const computerPlayer = new ComputerPlayer()
      expect(player.turn).toBe(true)
      expect(computerPlayer.turn).toBe(false)

      Player.changeTurn()
      expect(player.turn).toBe(false)
      expect(computerPlayer.turn).toBe(true)
    })
  })
})

describe('ComputerPlayer', () => {
  let computerPlayer
  beforeEach(() => {
    computerPlayer = new ComputerPlayer()
  })
  
  it('has a turn property set to false', () => {
    expect(computerPlayer).toHaveProperty('turn')
  })

  it('has a gameboard instance', () => {
    expect(computerPlayer).toHaveProperty('gameboard')
    expect(computerPlayer.gameboard).toBeInstanceOf(Gameboard)
  })

  it('is stored in the Player class static variable array', () => {
    expect(Player.allPlayers().at(-1)).toBeInstanceOf(ComputerPlayer)
  })

  describe('ComputerPlayer: Functions', () => {
    describe('attack()', () => {
    })
  })
})

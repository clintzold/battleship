// ./src/tests/Gameboard.test.js
import Gameboard from '../modules/Gameboard.js'
import Ship from '../modules/Ship.js'


describe('Gameboard: Grid', () => {
  let gameboard
  beforeEach(() => {
    gameboard = new Gameboard()
  })

  it('is a plain javascript Object', () => {
    expect(gameboard).toHaveProperty('grid')
    expect(typeof gameboard.grid).toBe('object')
  })

  it('has 100 keys', () => {
    expect(Object.keys(gameboard.grid).length).toBe(100)
  })

  describe('Grid: Keys', () => {
    it('is properly formatted x-y value pairs in ascending order to 10', () => {
      for (let x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
          const key = `${x}-${y}`
          expect(gameboard.grid[key]).toBeDefined()
        }
      }
    })

    it("contains a nested 'ship' key that is null by default", () => {
      expect(gameboard.grid['1-1'].ship).toBeDefined()
      expect(gameboard.grid['1-1'].ship).toBe(null)
    })

    it("contains a nested 'hit' key that is false by default", () => {
      expect(gameboard.grid['1-1'].hit).toBeDefined()
      expect(gameboard.grid['1-1'].hit).toBe(false)
    })
  })
})

describe('Gameboard: Functions', () => {
  let gameboard
  beforeEach(() => {
    gameboard = new Gameboard()
  })

  describe('placeShip()', () => {
    it('adds an instance of the Ship class to the ship key at a given coordinate', () => {
      const ship = new Ship(3)

      expect(gameboard.grid['1-1'].ship).toBe(null)
      gameboard.placeShip('1-1', ship.id)
      expect(gameboard.grid['1-1'].ship).toBe(ship)
    })
  })

  describe('receiveHit()', () => {
    it("changes grid coordinates 'hit' property to true", () => {
      const coordinate = '1-1'

      expect(gameboard.grid[coordinate].hit).toBe(false)
      gameboard.receiveHit(coordinate)
      expect(gameboard.grid['1-1'].hit).toBe(true)
    })

    it('increments the hit property of a ship if it exists within the coordinate', () => {
      const ship = new Ship(3)
      gameboard.placeShip('1-1', ship.id)
      gameboard.receiveHit('1-1')
      expect(ship.hits).toBe(1)
    })

    it('throws an error if coordinate has already been hit', () => {
      gameboard.receiveHit('1-1')
      expect(() => gameboard.receiveHit('1-1')).toThrow(Error)
    })
  })
  
  describe('allSunk()', () => {
    
    it('returns false if all ships are not sunk', () => {
      expect(gameboard.allSunk()).toBe(false)
    })

    it('returns true if all ships are sunk', () => {
      gameboard.ships.forEach(ship => {
        for (let i = 0; i < ship.length; i++) {
          ship.hit()
        }
      })
      expect(gameboard.allSunk()).toBe(true)
    })
  })
})

describe('Gameboard: Ships', () => {
  let gameboard

  beforeEach(() => {
    gameboard = new Gameboard
  })
  it('exists as a class property', () => {
    expect(gameboard).toHaveProperty('ships')
  })
  it('contains 5 instances of Ship', () => {
    expect(gameboard.ships.length).toBe(5)
    expect(gameboard.ships[0]).toBeInstanceOf(Ship)
  })
})

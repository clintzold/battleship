// ./src/tests/Gameboard.test.js
import Gameboard from '../modules/Gameboard.js'

describe('Gameboard: Grid', () => {
  let gameboard
  beforeEach(() => {
    gameboard = new Gameboard()
  })

  it('exists as a property that is an Object', () => {
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

  it("has a receiveHit() function that changes grid coordinates 'hit' property to true", () => {
    const coordinate = '1-1'

    expect(gameboard.grid[coordinate].hit).toBe(false)
    gameboard.receiveHit(coordinate)
    expect(gameboard.grid['1-1'].hit).toBe(true)
  })
})

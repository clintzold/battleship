// ./src/tests/Gameboard.test.js
import Gameboard from '../modules/Gameboard.js'

describe('Gameboard: Grid', () => {
  let gameboard
  beforeEach(() => {
    gameboard = new Gameboard()
  })

  it('exists as a property that is an Array', () => {
    expect(gameboard).toHaveProperty('grid')
    expect(Array.isArray(gameboard.grid)).toBe(true)
  })

  it('is an array with 100 entries', () => {
    expect(gameboard.grid.length).toBe(100)
  })

  it('has entries that contain a coordinates key', () => {
    expect(gameboard.grid[0]).toHaveProperty('coordinates')
  })
})

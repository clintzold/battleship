// ./src/tests/ship.test.js
import Ship from '../modules/ship.js'

test('creates a new Ship instance', () => {
  const ship = new Ship(3)
  expect(ship).toBeInstanceOf(Ship)
})

describe('Ship: Properties', () => {
  const ship = new Ship(3)

  test('has a length property', () => {
    expect(ship).toHaveProperty('length')
  })

  test('has a hits property', () => {
    expect(ship).toHaveProperty('hits')
  })
})

describe('Ship: Functions', () => {
  let ship

  beforeEach(() => {
    ship = new Ship(3)
  })

  test('has a hit() function that increments the hits property', () => {
    ship.hit()
    expect(ship.hits).toBe(1)
    ship.hit()
    expect(ship.hits).toBe(2)
    ship.hit()
    expect(ship.hits).toBe(3)
  })

  test('has a isSunk() function that returns a boolean', () => {
    expect(typeof ship.isSunk()).toBe('boolean')
  })

  test('isSunk() returns false if hits are less than length', () => {
    ship.hit()
    expect(ship.isSunk()).toBe(false)
  })

  test('isSunk() returns true if hits are equal to length', () => {
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true)
  })
})

describe('Ship: Static Functions', () => {
  let ship

  beforeEach(() => {
    ship = new Ship(3)
  })

  test('placeShip gives a ship a set of coordinates', () => {
    Ship.placeShip([3, 5], ship)
    expect(ship.coordinates).toStrictEqual([3, 5])
  })
})

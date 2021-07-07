const sweep = require('../src/sweepCircle.js')

describe('sweepCircle 03 tests', () => {
  const circle = {
    centre: {x: 2, y: 4},
    radius: Math.sqrt(8),
  }

  describe('inside y= 2', () => {
    const [left, right] = sweep.sweepCircle(circle, 2)

    test('left should be 0', () => {
      expect(left).toBeCloseTo(0, 5)
    })

    test('right should be 4', () => {
      expect(right).toBeCloseTo(4, 5)
    })
  })

  describe('inside y= 6', () => {
    const [left, right] = sweep.sweepCircle(circle, 6)

    test('left should be 0', () => {
      expect(left).toBeCloseTo(0, 5)
    })

    test('right should be 4', () => {
      expect(right).toBeCloseTo(4, 5)
    })
  })
})
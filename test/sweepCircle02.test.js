const sweep = require('../src/sweepCircle.js')

describe('sweepCircle 02 tests', () => {
  const circle = {
    centre: {x: 0, y: 0},
    radius: Math.sqrt(8),
  }

  describe('inside y = 2', () => {
    const [left, right] = sweep.sweepCircle(circle, 2)

    it('left should be -2', () => {
      expect(left).toBeCloseTo(-2, 5)
    })

    it('right should be 2', () => {
      expect(right).toBeCloseTo(2, 5)
    })
  })

  describe('inside y = -2', () => {
    const [left, right] = sweep.sweepCircle(circle, -2)

    it('left should be -2', () => {
      expect(left).toBeCloseTo(-2, 5)
    })

    it('right should be 2', () => {
      expect(right).toBeCloseTo(2, 5)
    })
  })
})
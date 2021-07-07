const sweep = require('../src/sweepCircle.js')

describe('sweepCircle 01 tests', () => {
  const circle = {
    centre: {x: 0, y: 0},
    radius: 5,
  }

  test('topY', () => {
    const actual = sweep.getTopY(circle)
    expect(actual).toBe(-5)
  })

  test('bottomY', () => {
    const actual = sweep.getBottomY(circle)
    expect(actual).toBe(5)
  })

  test('outside y=-6', () => {
    const actual = sweep.sweepCircle(circle, -6)
    expect(actual).toHaveLength(0)
  })

  test('outside y= 6', () => {
    const actual = sweep.sweepCircle(circle, 6)
    expect(actual).toHaveLength(0)
  })

  test('inside y= -5', () => {
    const actual = sweep.sweepCircle(circle, -5)
    expect(actual).toEqual(expect.arrayContaining([0]))
  })

  test('inside y= 5', () => {
    const actual = sweep.sweepCircle(circle, 5)
    expect(actual).toEqual(expect.arrayContaining([0]))
  })

  test('inside y= 0', () => {
    const actual = sweep.sweepCircle(circle, 0)
    expect(actual).toEqual(expect.arrayContaining([-5, 5]))
  })
})
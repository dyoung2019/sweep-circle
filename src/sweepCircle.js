
const getTopY = (circle) => {
  return circle.centre.y - circle.radius;
}

const getBottomY = (circle) => {
  return circle.centre.y + circle.radius;
}

function sweepCircle(circle, y) {
  const topY = getTopY(circle);
  const bottomY = getBottomY(circle);

  if (y < topY || y > bottomY) {
    return []
  } else {
    // ax^2 +bx + c = 0
    // x^2 -2cx * x + (y^2 - r^2 - 2 * cy * y + y^2  + cx^2) = 0
    // => a = 1, b = -2 * cx, c = y^2 - r^2 - 2 * cy * y + cy^2 + cx^2)

    // const a = 1;

    const {x:cx, y: cy} = circle.centre
    const b = -2 * cx

    const r = circle.radius
    //const c = y * y - r * r - 2 * cy * y + cy * cy + cx * cx;
    const c = (y * y) - (r * r) + cy * (-2 * y + cy) + cx * cx;

    // b^2 - 4ac
    const det = b * b - 4 * c 
    
    if (det > 0) {
      const offset = Math.sqrt(det)
      const tMin = (-b - offset) / 2
      const tMax = (-b + offset) / 2
      // two roots
      return [tMin, tMax]
    } else {
      const offset = Math.sqrt(det)
      const t0 = (-b + offset) / 2
      return [t0]
    }
  }
}

module.exports = {
  sweepCircle,
  getTopY,
  getBottomY
}
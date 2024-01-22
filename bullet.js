class Bullet {
  constructor() {
    this.x = playerX
    this.y = playerY
    this.xvel = 0
    this.yvel = 0
    if (shootDir == "n") {
      this.yvel = 20
    }
    if (shootDir == "s") {
      this.yvel = -20
    }
    if (shootDir == "e") {
      this.xvel = 20
    }
    if (shootDir == "w") {
      this.xvel = -20
    }
  }
  show() {
    strokeWeight(3)
    stroke('#f5e8d1')
    fill('#110e24')
    circle(this.x, this.y, bulletSize)
  }
  update() {
    this.y -= this.yvel
    this.x += this.xvel
    if (this.y < -10) {
      let indexToKill = bullets.indexOf(this)
      bullets.splice(indexToKill, 1)
    }
  }
}
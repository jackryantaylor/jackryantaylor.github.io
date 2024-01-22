function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


class Enemy {
  constructor() {
    this.dead = false
    this.vel = random(1, 3)
    this.yvel = 0
    this.xvel = 0
    this.side = getRandomIntInclusive(0, 3)
    this.power = ""
    if (this.vel <= 1.5) {
      this.found = false
      while (this.found == false) {
        this.powerrand = getRandomIntInclusive(0, 4)
        if (this.powerrand == 0 && playerSpd <= 10) {
          this.power = "ms"
          this.found = true
        }
        if (this.powerrand == 1 && bulletSize <= 50) {
          this.power = "bs"
          this.found = true
        }
        if (this.powerrand == 2 || this.powerrand == 4) {
          if (doubleFire == false) {
            this.power = "df"
            this.found = true
          }
          else {
            if (quadFire == false) {
              this.power = "qf"
              this.found = true
            }
            else {
              if (autoFire == false) {
                this.power = "af"
                this.found = true
              }
            }
          }
        }
        if (this.powerrand == 3) {
          if (offscreen == false) {
            this.power = "ot"
            this.found = true
          }
        }
      }
    }

    if (this.side == 0) {
      this.x = random(30, width - 30)
      this.y = -120
      this.yvel = this.vel
    }
    if (this.side == 1) {
      this.x = random(30, width - 30)
      this.y = height + 120
      this.yvel = -this.vel
    }
    if (this.side == 2) {
      this.x = -120
      this.y = random(30, height - 30)
      this.xvel = this.vel
    }
    if (this.side == 3) {
      this.x = width + 120
      this.y = random(30, height - 30)
      this.xvel = -this.vel
    }
    this.size = (200 / this.vel)
    this.origsize = this.size
  }
  show() {
    if (this.dead == false) {
      //'#ef476f'
      fill('#110e24')
      strokeWeight(3)
      // stroke('#f5e8d1')
      // circle(this.x, this.y, this.size + 5)
      if (this.vel <= 2.5) {
        stroke("#00ffaa")
      }
      else {
        stroke('#eb3838')
      }
      circle(this.x, this.y, this.size)

      textSize(15)
      fill('#20a5a6')
      rectMode(CENTER)
      textAlign(CENTER, CENTER)
      noStroke()
      if (this.power == "ms") {
        text('+ Player Speed', this.x, this.y);
      }
      if (this.power == "bs") {
        text('+ Bullet Size', this.x, this.y);
      }
      if (this.power == "df") {
        text('Double Fire', this.x, this.y);
      }
      if (this.power == "qf") {
        text('Quad Fire', this.x, this.y);
      }
      if (this.power == "ot") {
        text('Offscreen Teleport', this.x, this.y);
      }
      if (this.power == "af") {
        text('Autofire', this.x, this.y);
      }
    }
    else {
      fill('#f5e8d1')
      strokeWeight(3)
      stroke('#f5e8d1')
      circle(this.x, this.y, this.size + 5)
      circle(this.x, this.y, this.size)
    }
  }
  update() {
    if (this.y < -200 || this.y > height + 200 || this.x > width + 200 || this.x < -200) {
      let indexToKill = enemies.indexOf(this)
      enemies.splice(indexToKill, 1)
    }

    if (this.dead == true) {
      this.size += (this.size) / 10
    }
    if (this.size >= this.origsize * 1.5) {
      let index = enemies.indexOf(this)
      enemies.splice(index, 1)
    }
    if (this.dead == false) {
      this.y += this.yvel
      this.x += this.xvel
      for (let b of bullets) {
        let hit = collideCircleCircle(this.x, this.y, this.size, b.x, b.y, 5)
        if (hit) {
          this.dead = true
          let index = bullets.indexOf(b)
          bullets.splice(index, 1)
          score += 1
          if (this.power == "ms") {
            playerSpd += 2
          }
          if (this.power == "bs") {
            bulletSize += 5
          }
          if (this.power == "df") {
            doubleFire = true
          }
          if (this.power == "qf") {
            quadFire = true
          }
          if (this.power == "ot") {
            offscreen = true
          }
          if (this.power == "af") {
            autoFire = true
          }
        }
      }
    }
  }
}
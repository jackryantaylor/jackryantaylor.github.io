let playerX, playerY
let bullets = []
let enemies = []

gameOver = false

playerSpd = 2
bulletSize = 5
doubleFire = false
quadFire = false
offscreen = false
autoFire = false

shootDir = "n"
score = 1

function setup() {
  createCanvas(750, 422)
  playerX = width / 2
  playerY = height - 30

}

function draw() {
  if (autoFire == true) {
    if (frameCount % 12 == 0) {
      shootDir = "n"
      bullets.push(new Bullet())
      shootDir = "s"
      bullets.push(new Bullet())
      shootDir = "e"
      bullets.push(new Bullet())
      shootDir = "w"
      bullets.push(new Bullet())
    }
  }

  //#06d6a0
  background('#110e24')


  if (gameOver) {
    showGameOverScreen()
  }
  else {
    doBullets()
    drawPlayer()
    movePlayer()
    if (frameCount % 60 / score == 0) {
      enemies.push(new Enemy())
    }
    for (let e of enemies) {
      e.show()
      e.update()
    }
  }
  strokeWeight(0)
  fill("#f5e8d1")
  textAlign(TOP, RIGHT)
  text(('score:' + score), 1200, 30)
  texts = "Powerups:"
  texts += ("\nPlayer Speed x" + playerSpd / 4)
  texts += ("\nBullet Size x" + bulletSize / 10)
  if (quadFire == true) { texts += "\nQuad Fire" }
  else { if (doubleFire == true) { texts += "\nDouble Fire" } }
  if (autoFire == true) { texts += "\nAuto Fire" }
  if (offscreen == true) { texts += "\nOffscreen Teleport" }
  text(texts, 80, 30)
  fill('#00ffaa10')
  circle(100, 400, 400)
  fill('#eb383810')
  circle(400, 0, 500)
}

function showGameOverScreen() {
  textAlign(CENTER, CENTER)
}

function keyPressed() {
  if (autoFire == false) {
    if (quadFire == true) {
      if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
        shootDir = "n"
        bullets.push(new Bullet())
        shootDir = "s"
        bullets.push(new Bullet())
        shootDir = "e"
        bullets.push(new Bullet())
        shootDir = "w"
        bullets.push(new Bullet())
      }
    }
    else {
      if (keyCode === UP_ARROW) {
        shootDir = "n"
        bullets.push(new Bullet())
        if (doubleFire == true) {
          shootDir = "s"
          bullets.push(new Bullet())
        }
      }
      else if (keyCode === DOWN_ARROW) {
        shootDir = "s"
        bullets.push(new Bullet())
        if (doubleFire == true) {
          shootDir = "n"
          bullets.push(new Bullet())
        }
      }
      else if (keyCode === RIGHT_ARROW) {
        shootDir = "e"
        bullets.push(new Bullet())
        if (doubleFire == true) {
          shootDir = "w"
          bullets.push(new Bullet())
        }
      }
      else if (keyCode === LEFT_ARROW) {
        shootDir = "w"
        bullets.push(new Bullet())
        if (doubleFire == true) {
          shootDir = "e"
          bullets.push(new Bullet())
        }
      }
    }
  }
}

function doBullets() {
  for (let b of bullets) {
    b.show()
    b.update()
  }
}

function drawPlayer() {
  //#118ab2
  fill('#110e24')
  strokeWeight(3)
  // stroke('#f5e8d1')
  // ellipse(playerX,playerY, 55)
  stroke('#00ffaa')
  ellipse(playerX, playerY, 30)
  // rect(playerX,playerY,playerX,playerY)
}

function movePlayer() {
  xvel = 0
  yvel = 0
  if (keyIsDown(65)) {
    xvel -= playerSpd
  }
  if (keyIsDown(68)) {
    xvel += playerSpd
  }
  if (keyIsDown(87)) {
    yvel -= playerSpd
  }
  if (keyIsDown(83)) {
    yvel += playerSpd
  }
  playerX += xvel
  playerY += yvel

  if (offscreen == true) {
    if (playerX > width + 15) {
      playerX = 0
    }
    if (playerX < -15) {
      playerX = width
    }
    if (playerY > height + 15) {
      playerY = -15
    }
    if (playerY < -15) {
      playerY = height
    }
  }
  else {
    playerX = constrain(playerX, 0, width)
    playerY = constrain(playerY, 0, height)
  }
}
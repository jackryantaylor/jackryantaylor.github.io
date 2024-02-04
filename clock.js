

// let c = 0
// function setup(){
//   createCanvas(600,600)
//   colorMode(HSB)
//   textSize(70)
//   textAlign(CENTER,CENTER)

// }

// function draw(){

// }


rocketposX = 9999
rocketposY = 9999

starY = []


let angle = 0




function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB)
  textSize(70)
  textAlign(CENTER, CENTER)
  angleMode(DEGREES)

  for (i = 0; i <= windowWidth; i++) {
    fill('whitesmoke')
    noStroke()
    starY.push(random(windowHeight))
    circle(i, i, 2)
  }

}

function draw() {
  let d = new Date()
  millisecs = d.getMilliseconds()

  secs = d.getSeconds() + (millisecs / 1000)

  mins = d.getMinutes() + (secs / 60)

  if (d.getHours() < 12) {
    hrsto12 = d.getHours()
  }
  else {
    hrsto12 = d.getHours() - 12
  }
  hrsto12 = hrsto12 + (mins / 60)

  days = d.getDay() + (d.getHours() / 24)

  background('#110e24')


  
  translate(0, 0)
  textFont('lato')
  textSize(12)
  noStroke()
  fill('#46406e30')
  text("© Jack Taylor", 40, 10)

  

  for (i = 0; i <= windowWidth; i += 3) {
    fill('#46406e')
    noStroke()
    circle(i, starY[i], 2)
  }

  // c = map(mouseX, 0, 600, 360, 0)
  // d = map(mouseY, 0, 600, 100, 0)
  // background(c, 100, d)
  // text(c,50,50)
  // push()
  // translate(400,240)
  // rotate(-angle*2)
  // rect(-50,-20,100,40)
  // pop()
  // push()
  // translate(300,240)
  // rotate(angle)
  // rect(-150,-40,300,80)
  // pop()
  // angle++

  translate(windowWidth / 2, windowHeight / 2)

  fill('whitesmoke')
  noStroke()
  circle(0, 0, (windowHeight / 10) + 8)

  strokeWeight(5)
  fill('#f0c651')
  stroke('#d69224')
  circle(0, 0, windowHeight / 10)

  // push()
  // rotate(secs*6)
  // strokeWeight(2)
  // line(0, 0, 0, -280)
  // pop()

  // push()
  // fill('#857863')
  // stroke('#6b554a')
  // rotate(((millisecs/1000)*360)+90)
  // strokeWeight(5)
  // ellipse(-70, 0, 10)
  // pop()



  noFill()
  strokeWeight(2)
  stroke('#46406e')
  ellipse(0, 0, windowHeight / 5)



  push()


  rotate((((hrsto12) / 12) * 360) - 90)


  fill('whitesmoke')
  noStroke()
  circle(windowHeight / 10, 0, 32)


  fill('#969696')
  stroke('#6e6e6e')

  strokeWeight(5)
  ellipse(windowHeight / 10, 0, 24)


  translate(windowHeight / 10, 0)
  rotate(90 - (((hrsto12) / 12) * 360))
  noStroke()
  textFont('lato')
  textSize(12)
  fill('whitesmoke')
  if (d.getHours()<10) {
    text("0"+ d.getHours(), 0, 0);
  }
  else {
    text(d.getHours(), 0, 0);
  }

  pop()

  noFill()
  strokeWeight(2)
  stroke('#46406e')
  ellipse(0, 0, windowHeight / 3.5)


  push()

  rotate(((mins / 60) * 360) - 90)

  fill('whitesmoke')
  noStroke()
  circle(windowHeight / 7, 0, 38)

  fill('#b55f3a')
  stroke('#913923')

  strokeWeight(5)
  ellipse(windowHeight / 7, 0, 30)

  translate(windowHeight / 7, 0)
  rotate(90 - ((mins / 60) * 360))
  noStroke()
  textFont('lato')
  textSize(12)
  fill('whitesmoke')
  if (d.getMinutes()<10) {
    text("0"+d.getMinutes(), 0, 0);
  }
  else {
    text(d.getMinutes(), 0, 0);
  }
  if (d.getSeconds() == 20 && (rocketposX >= windowWidth)){
    rocketposX = 0
    rocketposY = 0
  }


  noStroke()
  fill('#46406e75')
  stroke('#46406e75')
  rotate(((mins / 60) * 360) - 90)
  rect(rocketposX-4, rocketposY-2.5, 18, 5)
  triangle(rocketposX - 8, rocketposY-3, rocketposX - 4, rocketposY, rocketposX - 7, rocketposY)
  triangle(rocketposX - 8, rocketposY + 3, rocketposX - 4, rocketposY, rocketposX - 7, rocketposY)
  
  triangle(rocketposX + 15, rocketposY-3, rocketposX + 19, rocketposY, rocketposX + 15, rocketposY + 3)

  rocketposX += 1.5


  pop()

  noFill()
  strokeWeight(2)
  stroke('#46406e')
  ellipse(0, 0, windowHeight / 2.5)


  push()

  rotate(((secs / 60) * 360) - 90)

  fill('whitesmoke')
  noStroke()
  circle(windowHeight / 5, 0, 38)



  fill('#4da6d6')
  stroke('#2a74b5')

  strokeWeight(5)
  ellipse(windowHeight / 5, 0, 30)

  translate(windowHeight / 5, 0)
  rotate(90 - ((secs / 60) * 360))
  noStroke()
  textFont('lato')
  textSize(12)
  fill('whitesmoke')

  if (d.getSeconds() <10) {
    text("0"+d.getSeconds(), 0, 0);
  }
  else {
    text(d.getSeconds(), 0, 0);
  }



  fill('lightgrey')
  stroke('lightgrey')
  rotate(((millisecs / 1000) * 360) + 180)
  strokeWeight(5)
  translate(5, 0)
  ellipse(windowHeight * 0.03, 0, 4)

  pop()

  noFill()
  strokeWeight(2)
  stroke('#46406e')
  ellipse(0, 0, windowHeight / 1.5)

  push()


  rotate(((days / 7) * 360) - 90 - 51.43)
  fill('whitesmoke')
  noStroke()
  circle((windowHeight / 3), 0, 68)
  strokeWeight(5)
  fill('#bf883f')
  stroke('#9e6836')
  ellipse(windowHeight / 3, 0, 60)


  translate(windowHeight / 3, 0)
  rotate(51.43+90 - ((days / 7) * 360))
  noStroke()
  textFont('lato')
  textSize(12)
  fill('whitesmoke')

  if (days <= 2) { text("Mon", 0, 0); }
  else if (days <= 3) { text("Tue", 0, 0); }
  else if (days <= 4) { text("Wed", 0, 0); }
  else if (days <= 5) { text("Thu", 0, 0); }
  else if (days <= 6) { text("Fri", 0, 0); }
  else if (days <= 7) { text("Sat", 0, 0); }
  else if (days <= 8) { text("Sun", 0, 0); }
  
  
  pop()


  // push()
  // fill('#857863')
  // stroke('#6b554a')
  // rotate(secs*6)+90)
  // strokeWeight(5)
  // ellipse(-80, 0, 10)
  // pop()

  for (i = 1; i <= 60; i++) {
    push()
    let numAngle = map(i, 0, 60, 0, 360)
    rotate(numAngle)
    strokeWeight(1)
    fill('#46406e')
    stroke('#46406e')
    ellipse(0, windowHeight * 0.25, 4)
    pop()
  }

  for (i = 1; i <= 12; i++) {
    push()
    let numAngle = map(i, 0, 12, 0, 360)
    rotate(numAngle)
    strokeWeight(5)
    fill('whitesmoke')
    stroke('whitesmoke')
    ellipse(0, windowHeight * 0.25, 5)
    pop()
  }




  for (i = 1; i <= 14; i++) {
    push()
    let numAngle = map(i, 0, 14, 0, 360)
    rotate(numAngle)
    strokeWeight(1)
    fill('whitesmoke')
    stroke('whitesmoke')
    ellipse(0, windowHeight * 0.45, 3)
    pop()
  }

  for (i = 1; i <= 7; i++) {
    push()
    let numAngle = map(i, 0, 7, 0, 360)
    rotate(numAngle + 25.7)
    strokeWeight(5)
    fill('whitesmoke')
    stroke('whitesmoke')
    ellipse(0, windowHeight * 0.45, 5)
    pop()
  }


}

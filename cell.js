let cells = []

let ruleValue = 22
let ruleSet
let w = 3;
let total
let y = 0

let nextCells = []

let textboxinput = document.getElementById('textboxinput')
let buttoninput = document.getElementById('buttoninput')


buttoninput.addEventListener('click', function(){
  num = int(random(0, 255));
  textboxinput.value = num
  ruleValue = num
  setup()
})



function setup() {
  createCanvas(windowWidth, (windowHeight*2))
  y = 0
  ruleSet = ruleValue.toString(2).padStart(8, "0")
  console.log(ruleSet)
  cells = []
  total = width / w
  for (let i = 0; i < total; i++) {
    cells[i] = 0
  }
  background('#110e24')
  cells[floor(total / 2)] = 1
}


function keyPressed() {
  if (keyCode === ENTER) {
    ruleValue = parseInt(textboxinput.value)
    setup()
  }
}

function draw() {
  noStroke()
  for (let i = 1; i < cells.length - 1; i++) {
    let x = i * w
    if (cells[i] == 1) {
      colour = round(random(0, 1))
      if (colour == 0) {
        fill('#00ffaa')
      }
      if (colour == 1) {
        fill('#178069')
      }
    }
    else {
      fill('#110e24')
    }
    // fill(255 - cells[i] * 255)
    square(x, y, w)
  }

  y += w

  nextCells = []
  // nextCells[0] = cells[0]
  // nextCells[cells.length -1] = cells[cells.length]

  let len = cells.length
  for (let i = 0; i < cells.length; i++) {
    let left = cells[(i - 1 + len) % len]
    let right = cells[(i + 1 + len) % len]
    let state = cells[i]
    let newState = calculateState(left, state, right)
    nextCells[i] = newState
  }
  cells = nextCells
}

function calculateState(left, state, right) {
  let neighbourhood = '' + left + state + right
  let value = 7 - parseInt(neighbourhood, 2)
  return parseInt(ruleSet[value])
}
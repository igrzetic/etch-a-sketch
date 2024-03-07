function populateBoard(size) {
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  board.style.borderRadius = "20px";
  board.style.boxShadow = "inset 0 0 7.5px rgba(0, 0, 0, 0.5)";

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    board.append(square);
  }
}
populateBoard(16);

// EVENT LISTENER ZA GUMB ZA PROMJENU VELIČINE
const sizeBtn = document.getElementById('sizeBtn');
sizeBtn.addEventListener('click', function() {
    let newSize = document.querySelector('.input').value;
    changeSize(newSize)
    console.log("new size: " + newSize);
});

//FUNKCIJA ZA PROMJENU VELIČINE KVADRATIĆA
function changeSize(newSize) {
  if (newSize >= 2 && newSize <= 100) {
    document.querySelector(".error").style.display = "none";
    populateBoard(newSize);
  } else {
    document.querySelector(".error").style.display = "block";
  }
}

// FUNKCIJA KOJA MI BOJA DIV
let color = "black";
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');

function colorSquare() {
  if (click) {
    if (color === "rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function clearBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.setAttribute('style', 'backgoundColor: "white"; borderRadius = 20px; boxShadow: inset 0 0 7.5px rgba(0, 0, 0, 0.5)')))
}

// FUNKCIJA KADA KLIKNEM NA BODY DA MI PRESTANE CRTATI
let click = true;

document.querySelector(".board").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
        document.querySelector('.mode').textContent = "Mode: Coloring";
    } else {
        document.querySelector('.mode').textContent = "Mode: Not Coloring";
    }
  }
});

// DARK MODE
const checkbox = document.getElementById('darkMode');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.querySelector('body').classList.add('dark-mode');
        document.querySelector('body').style.backgroundColor = '#212121';
        document.querySelector('.mode').style.color = '#00CCCC';
        document.querySelector('.error').style.color = '#00CCCC';
        console.log("Checked")
    } else {
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('body').style.backgroundColor = '#e7e7e7';
        document.querySelector('.mode').style.color = 'white';
        document.querySelector('.error').style.color = 'white';
        console.log("Not Checked")
    }
});
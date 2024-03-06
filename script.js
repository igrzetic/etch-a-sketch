function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

const sizeBtn = document.getElementById('sizeBtn');
sizeBtn.addEventListener('click', function() {
    let newSize = document.querySelector('.input').value;
    changeSize(newSize)
    console.log("new size: " + newSize);
});

function changeSize(newSize) {
  if (newSize >= 2 && newSize <= 100) {
    document.querySelector(".error").style.display = "none";
    populateBoard(newSize);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

// FUNKCIJA KOJA MI BOJA DIV
let color = "black";

function colorSquare() {
  if (click) {
    // if (color === "random") {
    //   this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    // } else {
      this.style.backgroundColor = color;
    // }
  }
}

// function changeColor(choice) {
//   color = choice;
// }

// function resetBoard() {
//   let board = document.querySelector(".board");
//   let squares = board.querySelectorAll("div");
//   squares.forEach((div) => (div.style.backgroundColor = "white"));
// }

// FUNKCIJA KADA KLIKNEM NA BODY DA MI PRESTANE CRTATI
let click = true;

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
  }
});
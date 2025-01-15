// create  element head 
const metaCharset = document.createElement("meta");
const metaViewport = document.createElement("meta");
const title = document.createElement("title");

//metaCharset
metaCharset.setAttribute("charset", "UTF-8");

// metaViewport
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1.0";

//title
title.textContent = "ClickColorCase";

//append in head 
document.head.appendChild(metaCharset);
document.head.appendChild(metaViewport);
document.head.appendChild(title);

// body part 
const allCase = document.createElement("div");

// style display cube 
Object.assign(allCase.style, {
    display: "grid",
    gridTemplateColumns: "repeat(10, 20px)",
    gridTemplateRows: "repeat(10, 20px)",
    gap: "2px" 
});

//body style 
Object.assign(document.body.style, {
    margin: "0"
});

//parent container
const wrapper = document.createElement("div");
//style 
Object.assign(wrapper.style, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0",
    backgroundColor: "#727874",
    gap: "20px"
});

// create 100 cubes 
for (let i = 0; i < 100; i++) {
    const test = document.createElement("div");
    test.id= i;
    Object.assign(test.style, {
        backgroundColor: "white",
        border: "1px solid black", 
        width: "20px",
        height: "20px"
    });
    allCase.appendChild(test);
}

// append in container
wrapper.appendChild(allCase);

// Create input color
const colorPicker = document.createElement("input");
colorPicker.type = "color";
Object.assign(colorPicker.style, {
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
});

// add input container parent
wrapper.appendChild(colorPicker);

// append in document all
document.body.appendChild(wrapper);

allCase.addEventListener("click", (event) => {
    if (event.target && event.target.style) {
        if (color){
            event.target.style.backgroundColor = color; 
        }
        else{
            console.log("error, color picker")
        }
    }
});

//stock color
let color = "";
function choiceColor(){
    colorPicker.addEventListener("change", (event) => {
        if (event.target.value !== "#ffffff"){
            color = event.target.value;
            console.log("Selected color:", color); // Debugging statement
        }
        else{
            alert("color is white, impossible")
        }
    })
};

choiceColor();

// New code for Tic-Tac-Toe
const ticTacToe = document.createElement("div");

// style display Tic-Tac-Toe
Object.assign(ticTacToe.style, {
    display: "grid",
    gridTemplateColumns: "repeat(3, 60px)",
    gridTemplateRows: "repeat(3, 60px)",
    gap: "5px",
    position: "absolute",
    left: "20px",
    top: "20px"
});

// create 9 cells for Tic-Tac-Toe
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.id = `cell-${i}`;
    Object.assign(cell.style, {
        backgroundColor: "white",
        border: "2px solid black",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        cursor: "pointer"
    });
    ticTacToe.appendChild(cell);
}

// append Tic-Tac-Toe in document
document.body.appendChild(ticTacToe);

let FirstPlayer = "X";
const cells = Array.from(ticTacToe.children);

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent === "") {
            cell.textContent = FirstPlayer;
            if (checkWinner()) {
                alert(`${FirstPlayer} a gagné !`);
                resetGame();
            } else {
                FirstPlayer = FirstPlayer === "X" ? "O" : "X";
            }
        }
    });
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return cells[a].textContent === FirstPlayer &&
               cells[a].textContent === cells[b].textContent &&
               cells[a].textContent === cells[c].textContent;
    });
}

// reset all the table 
function resetGame() {
    cells.forEach(cell => cell.textContent = "");
    FirstPlayer = "X";
}

// eventlistener for painting 

let leftMouseDown = false; 

// Track right mouse button state
document.addEventListener("mousedown", (event) => {
    if (event.button === 0) { // Right mouse button
        leftMouseDown = true; 
        console.log("Right mouse button down:", leftMouseDown); // Debugging statement
    }
});

document.addEventListener("mouseup", (event) => {
    if (event.button === 0) { // Right mouse button
        leftMouseDown = false;
        console.log("Right mouse button up:", leftMouseDown); // Debugging statement
    }
});

// Change color on mouseover when right mouse button is held down
allCase.addEventListener("mouseover", (event) => {
    if (leftMouseDown && event.target && event.target.style) {
        if (color) {
            event.target.style.backgroundColor = color;
        } else {
            console.log("error, color picker");
        }
    }
});
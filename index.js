const divContainer = document.querySelector("#divContainer");

createGrid(16)
function createGrid(gridLength) {

for (let i = 1; i <= gridLength; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = 1; j <= gridLength; j++) {
        const square = document.createElement("div");
        square.className = "square";
        square.innerText = j
        row.appendChild(square);
    }
    divContainer.appendChild(row);

}
}

const allSquares = document.querySelectorAll(".square");

allSquares.forEach(e => {
    e.addEventListener('mouseover',function(event) {
        event.target.style.background = "black";
    });
});

const button = document.querySelector("#setSizeButton");

button.addEventListener('click', function(event) {
    setGridSize();
});

function setGridSize() {
    let gridSize = prompt("Please set the size of the grid (Max size is 100)");
    createGrid(gridSize);
}
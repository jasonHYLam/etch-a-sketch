function establishHover() {
let allSquares = document.querySelectorAll(".square");


allSquares.forEach(e => {
    e.addEventListener('mouseover',function(event) {
        if (!event.target.classList.contains("hovered")) {
            event.target.style.background = assignRandomColour();
            event.target.classList.add("hovered");
        }
    });
});
const divContainer = document.querySelector("#divContainer");

}


function removeGrid() {
    while (divContainer.lastChild) {
        divContainer.lastChild.remove();
    }
};

function createGrid(gridLength) {
    for (let i = 1; i <= gridLength; i++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let j = 1; j <= gridLength; j++) {
            const square = document.createElement("div");
            square.className = "square";
            // square.style.border = 'solid';
            // square.innerText= 'hahaiha! ';
            row.appendChild(square);
        }
        divContainer.appendChild(row);
    }
}


function setGridSize() {
    let gridSize = 101;
    while (gridSize > 100 || isNaN(gridSize)) {
        gridSize = prompt("Please set the size of the grid (Max size is 100)");
    }
    removeGrid();
    createGrid(gridSize);
    establishHover();

}

createGrid(16);
establishHover();

const button = document.querySelector("#setSizeButton");

button.addEventListener('click', function(event) {
    setGridSize();
});

function assignRandomColour() {
    return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6,0);
}

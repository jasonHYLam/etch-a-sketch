function establishHover() {
let allSquares = document.querySelectorAll(".square");


allSquares.forEach(e => {
    e.addEventListener('mouseover',function(event) {

        //if square hasn't been hovered yet
        if (!event.target.classList.contains("hovered")) {
            event.target.style.background = assignRandomColour();
            event.target.classList.add("hovered");
            event.target.setAttribute("ogcolour", rgb2hex(event.target.style.background));
        }
        console.log(event.target.style.backgroundColor);
        colourInHex = rgb2hex(event.target.style.background);
        console.log(colourInHex);
        event.target.style.background = darken(colourInHex, event.target.getAttribute("ogcolour"));
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


const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`


function darken(hexColour, ogColour) {
    var R = parseInt(hexColour.substring(1,3), 16);
    var G = parseInt(hexColour.substring(3,5), 16);
    var B = parseInt(hexColour.substring(5,7), 16);

    var oR = parseInt(ogColour.substring(1,3), 16);
    var oG = parseInt(ogColour.substring(3,5), 16);
    var oB = parseInt(ogColour.substring(5,7), 16);

    R = parseInt(R - (oR * 0.1));
    G = parseInt(G - (oG * 0.1));
    B = parseInt(B - (oB * 0.1));

    var darkerR = (R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16);
    var darkerG = (G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16);
    var darkerB = (B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16);

    return "#" + darkerR + darkerG + darkerB;
}
const divContainer = document.querySelector("#divContainer");

for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = 1; j <= 16; j++) {
        const square = document.createElement("div");
        square.className = "square";
        square.innerText = j
        row.appendChild(square);
    }
    divContainer.appendChild(row);

}

const allSquares = document.querySelectorAll(".square");

allSquares.forEach(e => {
    e.addEventListener('mouseover',function(event) {
        event.target.style.background = "black";
    });
});

const button = document.querySelector("#setSizeButton");

button.addEventListener('click', function(event) {
    console.log(event);
});
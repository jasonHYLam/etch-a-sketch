    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';
    
    container.appendChild(content);

const divContainer = document.querySelector("#divContainer");

for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = 1; j <= 16; j++) {
        const square = document.createElement("div");
        square.className = "row";
        square.innerText = j
        row.appendChild(square);
    }
    divContainer.appendChild(row);

}
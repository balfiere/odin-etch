container = document.querySelector("#container");

let gridSize = 16;
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        let div = document.createElement("div");
        div.className = "grid";
        container.appendChild(div);
    }
}

function changeColor(event) {
    event.target.classList.add("hover");
}

container.addEventListener("mouseover", changeColor);
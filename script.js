function makeGrid(gridSize) {
    container.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let div = document.createElement("div");
            div.className = "grid";
            container.appendChild(div);
        }
    }

    let containerSize = getComputedStyle(document.body).getPropertyValue("--containerSize");
    let containerGap = getComputedStyle(document.body).getPropertyValue("--gap");
    
    let divSize = (parseInt(containerSize) - (parseInt(containerGap) * (gridSize) ) ) / gridSize;

    document.querySelectorAll(".grid").forEach(div => {
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
    });
}

function changeColor(event) {
    if (event.target.id != "container") {
        event.target.classList.add("hover");
    }
}

function reset() {
    let gridSize = prompt("Please enter new grid size (1-100)");
    gridSize = parseInt(gridSize);
    while (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
        gridSize = prompt("Invalid input, please enter new grid size (1-100)");
    }

    makeGrid(gridSize);
}

let container = document.querySelector("#container");

let gridSize = 16;
makeGrid(gridSize);

container.addEventListener("mouseover", changeColor, false);

let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", reset, false);
//declaration of document elements
const gridContainer = document.querySelector(".grid-container");
//function to create grid default will be 16
function createGrid(gridSize = 16){
    //clear grid before creation
    clearGrid();
    // Loop to create the X by X grid
    for(let i = 0; i < gridSize; i++){
        //individual id and class assignment
        let row = document.createElement("div");
        row.classList.add("grid-row");
        gridContainer.appendChild(row);
        for(let j = 1; j <= gridSize; j++){
            let box = document.createElement("div");
            box.classList.add("box");
            // box.setAttribute("id", `box-${i+j}`);
            row.appendChild(box);
        }

    }
}

//clear grid function
function clearGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

// createGrid();

//function for changing of color to accept color and element
function changeColor(box,color = "black"){
    switch(color){
        case "black":
            box.style.backgroundColor = "blue";
            break;
    }
}

// event listener for when mouse enters box
gridContainer.addEventListener("mouseover", (e) =>{
    box = e.target;
    console.log(box);
    if(box !== e.currentTarget){
        //changing of the box color 
        changeColor(box);
    }
})

//grabbing button and assigning function
gridBtn = document.querySelector("#grid-size");
document.getElementById("grid-size").onclick = getGridSize;
    
//Function for button click to give user prompt 
function getGridSize(){
console.log("clicked");
    //take input and create new grid 
    let size = prompt("Enter grid size:");
    if(size !== null){
        createGrid(size);
    }
}

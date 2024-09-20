//declaration of document elements
const gridContainer = document.querySelector(".grid-container");
const buttonContainer = document.querySelector(".button-container");

let size = 16;
let color = 'black';
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


//function for changing of color to accept color and element
function changeColor(box,color = "black"){
    switch(color){
        default:
            box.style.backgroundColor = "black";
            break;
        case "black":
            box.style.backgroundColor = "black";
            break;
        case "blue":
            box.style.backgroundColor = "blue";
            break;
        case "green":
            box.style.backgroundColor = "green";
            break;
        case "white":
            box.style.backgroundColor = "white";
            break;
        case "rainbow":
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    }
}

//event listener for buttons
buttonContainer.addEventListener('click', (e)=>{
    
    target = e.target.textContent.toLowerCase();

    if(target === "clear"){
        clearGrid();
        createGrid(size);
    }else if(target === "change grid size"){
        getGridSize();
    }else{
        color = target
    }
    
})

// event listener for when mouse enters box
gridContainer.addEventListener("mouseover", (e) =>{
    box = e.target;
    if(box !== e.currentTarget){
        //changing of the box color 
        changeColor(box, color);
    }
})

    
//Function for button click to give user prompt 
function getGridSize(){
    // hold the old size value
    let buffer = size;
    //take input and create new grid 
    size = prompt("Enter grid size(no more than 100):");
    if(size !== null && size <= 100){
        createGrid(size);
    }else{
        //change the size value back to old size if it doesnt match constraints
        size = buffer;
    }
}

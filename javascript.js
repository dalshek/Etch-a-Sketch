//-----GLOBAL VARIABLES----------
let div='';
let valor = 16;


//---------------CREATING THE TOP BUTTON---------
const topButton = document.createElement('button');
topButton.setAttribute("class", "selection");
document.body.appendChild(topButton);
topButton.textContent="SELECT GRID NUMBER";

//---------------CREATING THE MAIN DIV------------
const divMain = document.createElement('div');
divMain.setAttribute("class", "main");
document.body.appendChild(divMain);



//FUNCTIONS
const mainDom = document.querySelector('.main');


let createDivs = () => {
    div = document.createElement('div');
    div.setAttribute("class", "grid");

    mainDom.appendChild(div);
}

let createGrid = (dim) => {
    for(let i=1; i<=dim;i++){
        
        for(let j=1; j<=dim; j++){
            createDivs();
        }      
    }
    const ind = document.querySelectorAll('.grid');

    ind.forEach((list) => {
        list.addEventListener("mouseenter" , () => {
        list.classList.add('hover');
    });
    });

}

//CREATING THE GRID
createGrid(16);

const but = document.querySelector('.selection');
const ind = document.querySelectorAll('.grid');

//BUTTON LISTENER (CREATES USER GRID)
but.addEventListener("click", () => {
    
    const ind = document.querySelectorAll('.grid');
    ind.forEach(element => element.remove());

    const value = prompt("Select");

    if (value>64) alert("Max dimension: 64")

    //createGrid(prompt("Select number of files per columns"));

    else createGrid(value);

});


















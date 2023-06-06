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



//Creating the 16x16 grid
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
}

createGrid(16);

const but = document.querySelector('.selection');
const ind = document.querySelectorAll('.grid');

but.addEventListener("click", () => {
    
    const ind = document.querySelectorAll('.grid');
    ind.forEach(element => element.remove());

    createGrid(prompt("Select number of files and columns"));


});



ind.forEach((list) => {
    list.addEventListener("mouseenter" , () => {
    list.classList.add('hover');
});
});

ind.forEach((list) => {
    list.addEventListener("click" , () => {
    list.classList.add('enter');
});
});












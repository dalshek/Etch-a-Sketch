//-----GLOBAL VARIABLES----------
let div='';
//---------------CREATIN THE MAIN DIV------------
const divMain = document.createElement('div');
divMain.setAttribute("class", "main")
document.body.appendChild(divMain);

//Creating the 16x16 grid
const mainDom = document.querySelector('.main');



/*mainDom.addEventListener("mouseover", () =>{
    div.classList.add('hover');
})*/

let createDivs = () => {
    div = document.createElement('div');
    div.setAttribute("class", "grid");

    mainDom.appendChild(div);
}

for(let i=1; i<=16;i++){
    
    for(let j=1; j<=16; j++){
        createDivs();
    }      
}

//HOVER EFFECT

const ind = document.querySelectorAll('.grid');

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


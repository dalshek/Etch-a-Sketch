//-----GLOBAL VARIABLES----------
let div='';

//---------------CREATIN THE MAIN DIV------------
const divMain = document.createElement('div');
divMain.setAttribute("class", "main")
document.body.appendChild(divMain);

//Creating the 16x16 grid
const mainDom = document.querySelector('.main');



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
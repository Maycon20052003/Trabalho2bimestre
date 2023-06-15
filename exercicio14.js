let valorconta = document.querySelector("#valorconta");
let carlos = document.querySelector("#carlos");
let andre = document.querySelector("#andre");
let felipe = document.querySelector("#felipe");
let btvalorconta = document.querySelector("#btvalorconta");

function dividirdivida(){
    let vlrc = Number(valorconta.value);
    let valorCarlos = Math.floor(vlrc / 3);
    let valorAndre = Math.floor(vlrc / 3);
    let valorFelipe = vlrc - (valorCarlos + valorAndre);
    
    carlos.textContent = valorCarlos.toFixed(2);
    andre.textContent = valorAndre.toFixed(2);
    felipe.textContent = valorFelipe.toFixed(2);
}

btvalorconta.onclick = function(){
    dividirdivida();
}
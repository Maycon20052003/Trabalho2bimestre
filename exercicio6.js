let pesoprato = document.querySelector("#pesoprato");
let valorpagar = document.querySelector("#valorpagar");
let valortotalapagar = document.querySelector("#valortotalapagar");

function valorapagar(){
    let psprato = Number(pesoprato.value);
    valorpagar.textContent = psprato * 12;
}
valortotalapagar.onclick = function(){
    valorapagar();
}
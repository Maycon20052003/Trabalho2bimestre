let quantidadedias = document.querySelector("#quantidadedias");
let valoranos = document.querySelector("#valoranos");
let valormeses = document.querySelector("#valormeses");
let valordias = document.querySelector("#valordias");
let btdescobrir = document.querySelector("#btdescobrir");


function tempotrabalhosemacidente(){
    let qntdias = Number(quantidadedias.value);
    
    valordias.textContent = qntdias + " Dias sem Acidentes"
    valormeses.textContent = (qntdias / 30) + " Meses sem Acidentes";
    valoranos.textContent = (qntdias / 360) + " Anos sem Acidentes";    
}
btdescobrir.onclick = function(){
    tempotrabalhosemacidente();
}


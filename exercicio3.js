let totaldepaes = document.querySelector("#totaldepaes");
let totaldebroas = document.querySelector("#totaldebroas");
let totalarrecadado = document.querySelector("#totalarrecadado");
let bttotal = document.querySelector("#bttotal");
let porcentagemguardar = document.querySelector("#porcentagemguardar");

function dadossolicitados(){
    let ttpaes = Number(totaldepaes.value);
    let ttbroas = Number(totaldebroas.value);
    totalarrecadado.textContent = (ttpaes * 0.12) + (ttbroas * 1.50);
    porcentagemguardar.textContent = ((ttpaes * 0.12) + (ttbroas * 1.50)) * 0.1;
}

bttotal.onclick = function(){
    dadossolicitados();
}